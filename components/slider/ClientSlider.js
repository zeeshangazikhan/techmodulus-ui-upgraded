import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}
export default function ClientSlider() {
    const logoStyle = {
        width: '180px',
        height: '90px',
        objectFit: 'contain',
        filter: 'grayscale(100%)',
        opacity: 0.7,
        transition: 'all 0.4s ease',
        cursor: 'pointer',
    }

    const logoHoverStyle = {
        filter: 'grayscale(0%)',
        opacity: 1,
        transform: 'scale(1.05)',
    }

    const handleMouseEnter = (e) => {
        Object.assign(e.target.style, logoHoverStyle)
    }

    const handleMouseLeave = (e) => {
        e.target.style.filter = 'grayscale(100%)'
        e.target.style.opacity = '0.7'
        e.target.style.transform = 'scale(1)'
    }

    const clients = [
        'client-11',
        'client-12',
        'client-13',
        'client-14',
        'client-15',
        'client-16',
    ]

    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel ">
                {clients.map((client, index) => (
                    <SwiperSlide className="image" key={index}>
                        <img
                            src={`/assets/images/${client}.png`}
                            className="img-fluid m-auto d-block"
                            alt={client}
                            style={logoStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
