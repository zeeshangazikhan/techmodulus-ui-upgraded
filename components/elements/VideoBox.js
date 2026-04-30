'use client'

import { useState } from "react"
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"
export default function VideoBox({ videoId = "11THdF_ZDc4" }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a href="#video" onClick={(e) => { e.preventDefault(); setOpen(true); }} className="lightbox-image"><i className="fi-rr-play" /></a>
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
                youtube={{ autoplay: 1, mute: 1, enablejsapi: 1, playsinline: 1 }}
            />
        </>
    )
}

