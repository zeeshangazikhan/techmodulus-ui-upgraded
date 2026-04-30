'use client'

/**
 * Hero3D — premium animated WebGL hero scene (three.js).
 *
 * Renders a glowing wireframe icosahedron with a particle field.
 * Auto-pauses when off-screen or tab is hidden. Cleans up properly.
 *
 * Mobile guard rails:
 *  - DPR clamped to 1.5
 *  - Reduced particle count on coarse pointers
 *  - Caller (`Hero3DLazy`) gates mounting on hardware + reduced-motion.
 */

import { useEffect, useRef } from 'react'

export default function Hero3D({ className = '', style = {} }) {
    const mountRef = useRef(null)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        let renderer, scene, camera, rafId
        let mesh, particles, particleMaterial
        let disposed = false
        const clock = { last: performance.now() }
        const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
        const isCoarse =
            typeof window !== 'undefined' &&
            window.matchMedia('(pointer: coarse)').matches

        let io, vis

        ;(async () => {
            const THREE = await import('three')
            if (disposed || !mount) return

            const w = mount.clientWidth || window.innerWidth
            const h = mount.clientHeight || window.innerHeight

            scene = new THREE.Scene()
            scene.fog = new THREE.FogExp2(0x070a18, 0.06)

            camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100)
            camera.position.set(0, 0, 6)

            renderer = new THREE.WebGLRenderer({
                antialias: !isCoarse,
                alpha: true,
                powerPreference: 'high-performance',
            })
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCoarse ? 1.25 : 1.75))
            renderer.setSize(w, h, false)
            renderer.setClearColor(0x000000, 0)
            mount.appendChild(renderer.domElement)
            renderer.domElement.style.display = 'block'
            renderer.domElement.style.width = '100%'
            renderer.domElement.style.height = '100%'
            renderer.domElement.style.pointerEvents = 'none'

            // ---------- Icosahedron (premium centerpiece) ----------
            const geo = new THREE.IcosahedronGeometry(1.9, 1)
            const wireGeo = new THREE.WireframeGeometry(geo)

            const wireMat = new THREE.LineBasicMaterial({
                color: 0x008BF9,
                transparent: true,
                opacity: 0.45,
            })
            const wire = new THREE.LineSegments(wireGeo, wireMat)

            const fillMat = new THREE.MeshBasicMaterial({
                color: 0x0F3567,
                transparent: true,
                opacity: 0.06,
                depthWrite: false,
            })
            const fill = new THREE.Mesh(geo, fillMat)

            mesh = new THREE.Group()
            mesh.add(fill)
            mesh.add(wire)
            scene.add(mesh)

            // ---------- Inner glow sphere ----------
            const glowGeo = new THREE.SphereGeometry(1.2, 24, 24)
            const glowMat = new THREE.MeshBasicMaterial({
                color: 0x008BF9,
                transparent: true,
                opacity: 0.12,
                depthWrite: false,
            })
            const glow = new THREE.Mesh(glowGeo, glowMat)
            mesh.add(glow)

            // ---------- Particle field ----------
            const particleCount = isCoarse ? 700 : 1600
            const positions = new Float32Array(particleCount * 3)
            const colorPrimary = new THREE.Color(0x008BF9)
            const colorSecondary = new THREE.Color(0x36619A)
            const colors = new Float32Array(particleCount * 3)

            for (let i = 0; i < particleCount; i++) {
                const r = 6 + Math.random() * 10
                const theta = Math.random() * Math.PI * 2
                const phi = Math.acos(2 * Math.random() - 1)
                positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
                positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
                positions[i * 3 + 2] = r * Math.cos(phi) - 2

                const mix = Math.random()
                const c = colorPrimary.clone().lerp(colorSecondary, mix)
                colors[i * 3]     = c.r
                colors[i * 3 + 1] = c.g
                colors[i * 3 + 2] = c.b
            }

            const pGeo = new THREE.BufferGeometry()
            pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

            particleMaterial = new THREE.PointsMaterial({
                size: 0.045,
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true,
            })
            particles = new THREE.Points(pGeo, particleMaterial)
            scene.add(particles)

            // ---------- Pointer parallax (desktop only) ----------
            const onPointer = (e) => {
                const rect = mount.getBoundingClientRect()
                pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
                pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2
            }
            if (!isCoarse) {
                window.addEventListener('pointermove', onPointer, { passive: true })
            }

            // ---------- Resize ----------
            const onResize = () => {
                if (!mount || !renderer || !camera) return
                const nw = mount.clientWidth || window.innerWidth
                const nh = mount.clientHeight || window.innerHeight
                camera.aspect = nw / nh
                camera.updateProjectionMatrix()
                renderer.setSize(nw, nh, false)
            }
            window.addEventListener('resize', onResize, { passive: true })

            // ---------- Visibility / off-screen pause ----------
            let visible = true
            let onScreen = true
            const onVis = () => { visible = !document.hidden; if (visible) loop() }
            document.addEventListener('visibilitychange', onVis)
            vis = onVis

            io = new IntersectionObserver(([entry]) => {
                onScreen = entry.isIntersecting
                if (onScreen) loop()
            }, { threshold: 0.01 })
            io.observe(mount)

            // ---------- Animation loop ----------
            const loop = () => {
                if (disposed) return
                if (!visible || !onScreen) { rafId = null; return }
                const now = performance.now()
                const dt = Math.min(0.05, (now - clock.last) / 1000)
                clock.last = now

                pointer.x += (pointer.tx - pointer.x) * 0.04
                pointer.y += (pointer.ty - pointer.y) * 0.04

                if (mesh) {
                    mesh.rotation.y += dt * 0.18
                    mesh.rotation.x += dt * 0.06
                    mesh.position.x = pointer.x * 0.4
                    mesh.position.y = -pointer.y * 0.3
                }
                if (particles) {
                    particles.rotation.y += dt * 0.02
                    particles.rotation.x = pointer.y * 0.05
                }
                if (camera) {
                    camera.position.x += (pointer.x * 0.4 - camera.position.x) * 0.05
                    camera.lookAt(0, 0, 0)
                }

                renderer.render(scene, camera)
                rafId = requestAnimationFrame(loop)
            }
            clock.last = performance.now()
            loop()

            mount.__hero3dCleanup = () => {
                window.removeEventListener('resize', onResize)
                window.removeEventListener('pointermove', onPointer)
                document.removeEventListener('visibilitychange', onVis)
                io?.disconnect()
                if (rafId) cancelAnimationFrame(rafId)
                rafId = null

                try {
                    geo.dispose(); wireGeo.dispose()
                    wireMat.dispose(); fillMat.dispose()
                    glowGeo.dispose(); glowMat.dispose()
                    pGeo.dispose(); particleMaterial.dispose()
                    renderer.dispose()
                    if (renderer.domElement && renderer.domElement.parentNode) {
                        renderer.domElement.parentNode.removeChild(renderer.domElement)
                    }
                } catch (_) { /* noop */ }
            }
        })()

        return () => {
            disposed = true
            try { mount.__hero3dCleanup && mount.__hero3dCleanup() } catch (_) { /* noop */ }
        }
    }, [])

    return (
        <div
            ref={mountRef}
            className={`fx-hero3d ${className}`.trim()}
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                ...style,
            }}
        />
    )
}
