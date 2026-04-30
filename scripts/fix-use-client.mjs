// Fix: move the sendContact import below the `'use client'` directive.
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

    // Match: `import { sendContactEnquiry } from "@/util/sendContact"\n'use client'`
    // and swap to `'use client'\n\nimport ...`
    src = src.replace(
        /^import \{ sendContactEnquiry \} from "@\/util\/sendContact"\s*\n+('use client'|"use client")/,
        (_m, useDirective) => `${useDirective}\n\nimport { sendContactEnquiry } from "@/util/sendContact"`,
    )

    if (src !== original) {
        fs.writeFileSync(file, src, 'utf8')
        touched++
        console.log(`fixed: ${path.relative(process.cwd(), file)}`)
    }
}
console.log(`\nDone. Files fixed: ${touched}/${targets.length}`)
