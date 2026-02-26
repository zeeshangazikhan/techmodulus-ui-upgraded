import { useState } from "react"

export default function StickyContact() {
    const [hoveredItem, setHoveredItem] = useState(null)

    const phoneNumber = "918329042454"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'd like to inquire about your services.")}`

    const items = [
        {
            id: "whatsapp",
            href: whatsappUrl,
            target: "_blank",
            label: "WhatsApp",
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            ),
        },
        {
            id: "phone",
            href: "tel:+918329042454",
            target: "_self",
            label: "Call Us",
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
            ),
        },
        {
            id: "email",
            href: "mailto:info@ciencechip.com",
            target: "_self",
            label: "Email Us",
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
            ),
        },
    ]

    return (
        <>
            <div className="sticky-contact-bar">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        target={item.target}
                        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                        className={`sticky-contact-item ${hoveredItem === item.id ? "hovered" : ""}`}
                        aria-label={item.label}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <span className="sticky-contact-icon">{item.icon}</span>
                        <span className="sticky-contact-tooltip">{item.label}</span>
                    </a>
                ))}
            </div>

            <style jsx>{`
                .sticky-contact-bar {
                    position: fixed;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1000000000 !important;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    background: rgba(10, 15, 30, 0.92);
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    border-radius: 14px 0 0 14px;
                    padding: 6px 0;
                    box-shadow: -4px 4px 24px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-right: none;
                }
                .sticky-contact-item {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 48px;
                    color: rgba(255, 255, 255, 0.55);
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    border-left: 3px solid transparent;
                }
                .sticky-contact-item:hover {
                    color: #fff;
                    background: rgba(0, 139, 249, 0.12);
                    border-left-color: #008BF9;
                }
                .sticky-contact-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .sticky-contact-item:hover .sticky-contact-icon {
                    transform: scale(1.15);
                }
                .sticky-contact-tooltip {
                    position: absolute;
                    right: 100%;
                    top: 50%;
                    transform: translateY(-50%) translateX(8px);
                    background: rgba(10, 15, 30, 0.95);
                    backdrop-filter: blur(12px);
                    color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 8px;
                    white-space: nowrap;
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    letter-spacing: 0.3px;
                    box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }
                .sticky-contact-tooltip::after {
                    content: '';
                    position: absolute;
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 5px solid transparent;
                    border-left-color: rgba(10, 15, 30, 0.95);
                }
                .sticky-contact-item:hover .sticky-contact-tooltip {
                    opacity: 1;
                    transform: translateY(-50%) translateX(-6px);
                }

                /* Dividers between items */
                .sticky-contact-item + .sticky-contact-item {
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                /* Mobile responsive */
                @media (max-width: 768px) {
                    .sticky-contact-bar {
                        gap: 1px;
                        padding: 5px 0;
                        border-radius: 12px 0 0 12px;
                        box-shadow: -2px 2px 16px rgba(15, 34, 64, 0.3);
                    }
                    .sticky-contact-item {
                        width: 40px;
                        height: 40px;
                    }
                    .sticky-contact-icon :global(svg) {
                        width: 16px;
                        height: 16px;
                    }
                    .sticky-contact-tooltip {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}
