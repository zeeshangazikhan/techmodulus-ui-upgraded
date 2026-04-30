import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { renderContactEmail } from '@/util/emailTemplate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10)
const SMTP_SECURE = (process.env.SMTP_SECURE || 'true') === 'true'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASSWORD = process.env.SMTP_PASSWORD
const MAIL_TO = process.env.MAIL_TO || SMTP_USER
const MAIL_FROM = process.env.MAIL_FROM || (SMTP_USER ? `TechModulus Website <${SMTP_USER}>` : undefined)

let cachedTransporter = null
function getTransporter() {
    if (cachedTransporter) return cachedTransporter
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
        throw new Error('SMTP environment variables are not configured (SMTP_HOST, SMTP_USER, SMTP_PASSWORD).')
    }
    cachedTransporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_SECURE,
        auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
        tls: { rejectUnauthorized: false },
    })
    return cachedTransporter
}

function sanitize(value, max = 4000) {
    if (value == null) return ''
    return String(value).slice(0, max).trim()
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
    try {
        const body = await request.json().catch(() => ({}))

        const name = sanitize(body.name, 200)
        const email = sanitize(body.email, 200)
        const mobile = sanitize(body.mobile || body.phone, 50)
        const subject = sanitize(body.subject, 200)
        const service = sanitize(body.service, 200) || 'General Enquiry'
        const message = sanitize(body.message, 5000)
        const source = sanitize(body.source || request.headers.get('referer') || '', 500)

        if (!name || !email || !isValidEmail(email)) {
            return NextResponse.json(
                { ok: false, error: 'Please provide a valid name and email.' },
                { status: 400 }
            )
        }

        if (!message && !subject && !mobile) {
            return NextResponse.json(
                { ok: false, error: 'Please tell us a little about your enquiry.' },
                { status: 400 }
            )
        }

        const html = renderContactEmail({ name, email, mobile, subject, service, message, source })

        const textLines = [
            `New enquiry from TechModulus website`,
            `------------------------------------`,
            `Name    : ${name}`,
            `Email   : ${email}`,
            mobile ? `Mobile  : ${mobile}` : null,
            service ? `Service : ${service}` : null,
            subject ? `Subject : ${subject}` : null,
            source ? `Source  : ${source}` : null,
            ``,
            `Message:`,
            message || '(no message)',
        ].filter(Boolean).join('\n')

        const transporter = getTransporter()

        const info = await transporter.sendMail({
            from: MAIL_FROM,
            to: MAIL_TO,
            replyTo: `${name} <${email}>`,
            subject: `New Enquiry — ${service}${subject ? ' · ' + subject : ''} — ${name}`,
            text: textLines,
            html,
        })

        return NextResponse.json({ ok: true, id: info?.messageId || null })
    } catch (err) {
        console.error('[api/contact] failed to send mail:', err)
        return NextResponse.json(
            { ok: false, error: 'Could not send your message right now. Please try again or email contact@techmodulus.com.' },
            { status: 500 }
        )
    }
}
