// Tiny client helper used by all contact / "Start Your Project" forms
// across the site. Posts to the /api/contact endpoint and returns
// { ok, error? } so each form can show its own success / error UI.

export async function sendContactEnquiry(payload) {
    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...payload,
                source: typeof window !== 'undefined' ? window.location.href : '',
            }),
        })

        let data = null
        try { data = await res.json() } catch (_) { data = null }

        if (!res.ok || !data || data.ok === false) {
            return {
                ok: false,
                error: (data && data.error) || 'Could not send your message. Please try again.',
            }
        }
        return { ok: true }
    } catch (err) {
        return {
            ok: false,
            error: 'Network error. Please check your connection and try again.',
        }
    }
}
