// Branded HTML email template for TechModulus contact submissions.
// Theme is aligned with the website palette (deep navy + electric blue accents).

function escapeHtml(value) {
    if (value == null) return ''
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function row(label, value, { isLink, href } = {}) {
    if (!value) return ''
    const safe = escapeHtml(value)
    const inner = isLink && href
        ? `<a href="${escapeHtml(href)}" style="color:#0095FF;text-decoration:none;font-weight:600;">${safe}</a>`
        : safe
    return `
      <tr>
        <td style="padding:14px 24px;border-bottom:1px solid rgba(15,53,103,0.08);font-family:'Segoe UI',Arial,sans-serif;font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:.6px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:14px 24px;border-bottom:1px solid rgba(15,53,103,0.08);font-family:'Segoe UI',Arial,sans-serif;font-size:15px;color:#0f172a;font-weight:500;">${inner}</td>
      </tr>`
}

export function renderContactEmail(data) {
    const { name = '', email = '', mobile = '', subject = '', service = '', message = '', source = '' } = data || {}

    const submittedAt = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short',
    })

    const safeMessage = escapeHtml(message || '').replace(/\n/g, '<br/>')

    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>New Enquiry · TechModulus</title>
</head>
<body style="margin:0;padding:0;background:#eef2f8;font-family:'Segoe UI',Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#eef2f8;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(15,53,103,0.18);">

          <!-- Header / Brand bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a1628 0%,#0F3567 45%,#008BF9 100%);padding:36px 32px 30px;position:relative;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-family:'Segoe UI',Arial,sans-serif;color:#ffffff;">
                    <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#9bd3ff;margin-bottom:10px;">TechModulus · New Enquiry</div>
                    <div style="font-size:26px;font-weight:700;line-height:1.25;">You have a new project enquiry</div>
                    <div style="font-size:14px;color:#cfe6ff;margin-top:8px;">Submitted ${escapeHtml(submittedAt)} IST</div>
                  </td>
                  <td align="right" valign="top" style="font-family:'Segoe UI',Arial,sans-serif;">
                    <div style="display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);color:#ffffff;font-size:12px;font-weight:600;letter-spacing:.5px;">
                      ${escapeHtml(service || 'General')}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead summary -->
          <tr>
            <td style="padding:28px 32px 4px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7faff;border:1px solid #e2ecf9;border-radius:14px;">
                <tr>
                  <td style="padding:20px 24px;font-family:'Segoe UI',Arial,sans-serif;">
                    <div style="font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:.6px;">From</div>
                    <div style="font-size:20px;font-weight:700;color:#0F3567;margin-top:4px;">${escapeHtml(name)}</div>
                    <div style="margin-top:6px;font-size:14px;color:#334155;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#008BF9;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>
                      ${mobile ? ` &nbsp;·&nbsp; <a href="tel:${escapeHtml(mobile)}" style="color:#0F3567;text-decoration:none;">${escapeHtml(mobile)}</a>` : ''}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Detail rows -->
          <tr>
            <td style="padding:18px 32px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2ecf9;border-radius:14px;overflow:hidden;">
                ${row('Service', service)}
                ${subject ? row('Subject', subject) : ''}
                ${row('Email', email, { isLink: true, href: `mailto:${email}` })}
                ${mobile ? row('Mobile', mobile, { isLink: true, href: `tel:${mobile}` }) : ''}
                ${source ? row('Page', source) : ''}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:18px 32px 8px;">
              <div style="font-family:'Segoe UI',Arial,sans-serif;font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px;">Message</div>
              <div style="background:#0F3567;background:linear-gradient(160deg,#0F3567 0%,#0a1628 100%);color:#e6f0ff;padding:22px 24px;border-radius:14px;font-family:'Segoe UI',Arial,sans-serif;font-size:15px;line-height:1.65;border-left:4px solid #008BF9;">
                ${safeMessage || '<em style="color:#9bb3d6;">No message provided.</em>'}
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:24px 32px 8px;">
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius:999px;background:linear-gradient(90deg,#008BF9,#00d4ff);">
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20enquiry%20to%20TechModulus" style="display:inline-block;padding:12px 26px;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:.3px;">Reply to ${escapeHtml(name.split(' ')[0] || 'lead')} →</a>
                  </td>
                  ${mobile ? `
                  <td style="padding-left:12px;">
                    <a href="tel:${escapeHtml(mobile)}" style="display:inline-block;padding:12px 22px;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;font-weight:600;color:#0F3567;text-decoration:none;border:1px solid #cfe0f5;border-radius:999px;">Call ${escapeHtml(mobile)}</a>
                  </td>` : ''}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:30px 32px 32px;">
              <hr style="border:none;border-top:1px solid #e2ecf9;margin:0 0 18px;" />
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-family:'Segoe UI',Arial,sans-serif;font-size:12px;color:#64748b;line-height:1.6;">
                    This message was generated by the contact form on
                    <a href="https://techmodulus.com" style="color:#008BF9;text-decoration:none;">techmodulus.com</a>.<br/>
                    © ${new Date().getFullYear()} TechModulus · Kharadi, Pune 411014
                  </td>
                  <td align="right" style="font-family:'Segoe UI',Arial,sans-serif;font-size:12px;color:#94a3b8;">
                    <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:#f1f5fb;color:#0F3567;font-weight:600;letter-spacing:.4px;">TM • Lead</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
