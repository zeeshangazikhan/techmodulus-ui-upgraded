'use client'

export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader"></div>
                <div className="layer"> </div>
                <div className="animation-preloader">
                    <div className="spinner" />
                </div>
            </div>

        </>
    )
}
