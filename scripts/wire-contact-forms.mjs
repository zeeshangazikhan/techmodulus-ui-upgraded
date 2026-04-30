// Local helper script: wires every service page contact form to /api/contact.
// Run with: node scripts/wire-contact-forms.mjs
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.cwd(), 'app')

const targets = fs.readdirSync(root)
    .filter((d) => d.startsWith('service-'))
    .map((d) => path.join(root, d, 'page.js'))
    .filter((p) => fs.existsSync(p))

let touched = 0

for (const file of targets) {
    let src = fs.readFileSync(file, 'utf8')
    const original = src

    // 1) Inject import (just after the last existing import line at the top).
    if (!src.includes("@/util/sendContact")) {
        const importLine = "import { sendContactEnquiry } from \"@/util/sendContact\"\n"
        // place before the first blank line after imports
        const m = src.match(/((?:^import .*\n)+)/m)
        if (m) {
            src = src.replace(m[0], m[0] + importLine)
        } else {
            src = importLine + src
        }
    }

    // 2) Replace the standard handler shape.
    //    Pattern A: setTimeout-around-reset (used by service-app-development)
    src = src.replace(
        /const handleFormSubmit = \(e\) => \{\s*e\.preventDefault\(\)\s*(?:console\.log\([^)]*\)\s*)?setFormSubmitted\(true\)\s*setTimeout\(\(\) => \{\s*setFormSubmitted\(false\)\s*setFormData\(\{ name: '', email: '', mobile: '', service: '([^']+)', message: '' \}\)\s*\}, \d+\)\s*\}/m,
        (_match, svc) => `const handleFormSubmit = async (e) => {
        e.preventDefault()
        const result = await sendContactEnquiry({ ...formData, service: formData.service || '${svc}' })
        if (!result.ok) {
            if (typeof window !== 'undefined') window.alert(result.error)
            return
        }
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: '${svc}', message: '' })
    }`,
    )

    //    Pattern B: classic flat reset.
    src = src.replace(
        /const handleFormSubmit = \(e\) => \{\s*e\.preventDefault\(\)\s*setFormSubmitted\(true\)\s*setTimeout\(\(\) => setFormSubmitted\(false\), \d+\)\s*setFormData\(\{ name: '', email: '', mobile: '', service: '([^']+)', message: '' \}\)\s*\}/m,
        (_match, svc) => `const handleFormSubmit = async (e) => {
        e.preventDefault()
        const result = await sendContactEnquiry({ ...formData, service: formData.service || '${svc}' })
        if (!result.ok) {
            if (typeof window !== 'undefined') window.alert(result.error)
            return
        }
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 4000)
        setFormData({ name: '', email: '', mobile: '', service: '${svc}', message: '' })
    }`,
    )

    if (src !== original) {
        fs.writeFileSync(file, src, 'utf8')
        touched++
        console.log(`updated: ${path.relative(process.cwd(), file)}`)
    } else {
        console.log(`skipped (no match): ${path.relative(process.cwd(), file)}`)
    }
}

console.log(`\nDone. Files updated: ${touched}/${targets.length}`)
