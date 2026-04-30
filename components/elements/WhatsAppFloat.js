'use client'

export default function WhatsAppFloat() {
    const phoneNumber = "918329042454"; // WhatsApp number in international format without + or spaces
    const message = "Hello! I'd like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
            >
                <svg 
                    viewBox="0 0 32 32" 
                    width="32" 
                    height="32"
                    fill="currentColor"
                >
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.488 2.025 7.788L0 32l8.412-2.025C10.712 31.262 13.375 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.475 0-4.85-.675-6.925-1.95l-.5-.3-5.15 1.238 1.238-5.15-.3-.5C2.675 20.85 2 18.475 2 16 2 8.275 8.275 2 16 2s14 6.275 14 14-6.275 13.333-14 13.333zm7.788-9.975c-.425-.213-2.525-1.238-2.913-1.375-.387-.138-.675-.213-.95.213-.275.425-1.075 1.375-1.313 1.65-.238.275-.487.313-.913.1-.425-.213-1.8-.663-3.425-2.113-1.263-1.125-2.113-2.513-2.363-2.938-.238-.425-.025-.65.188-.863.188-.188.425-.488.638-.738.213-.238.288-.413.425-.688.138-.275.075-.513-.038-.725-.113-.213-1.013-2.438-1.388-3.338-.375-.863-.75-.738-1.025-.75h-.875c-.3 0-.788.113-1.2.563-.413.438-1.575 1.538-1.575 3.75s1.613 4.35 1.838 4.65c.225.3 3.15 4.838 7.65 6.788 1.063.463 1.9.738 2.55.95 1.075.338 2.05.288 2.825.175.863-.125 2.525-1.038 2.888-2.038.363-1.013.363-1.875.25-2.05-.113-.188-.413-.3-.863-.513z"/>
                </svg>
            </a>

            <style jsx>{`
                .whatsapp-float {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: calc(60px + env(safe-area-inset-bottom));
                    right: 70px;
                    background-color: #25D366;
                    color: #fff;
                    border-radius: 50%;
                    text-align: center;
                    font-size: 30px;
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    margin: 0;
                }

                .whatsapp-float:hover {
                    background-color: #128C7E;
                    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
                    transform: translateY(-3px) scale(1.05);
                }

                .whatsapp-float svg {
                    width: 32px;
                    height: 32px;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }

                /* Mobile responsive */
                @media (max-width: 768px) {
                    .whatsapp-float {
                        width: 50px;
                        height: 50px;
                        bottom: calc(20px + env(safe-area-inset-bottom));
                        right: 16px;
                    }

                    .whatsapp-float svg {
                        width: 26px;
                        height: 26px;
                    }
                }
            `}</style>
        </>
    );
}
