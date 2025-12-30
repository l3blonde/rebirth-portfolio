"use client"

import { useRef, useState } from "react"
import Button from "./button"
import VideoControls from "./video-controls"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [showVideo, setShowVideo] = useState(false)

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play().catch((error) => {
                    console.error("Video play failed:", error)
                })
                setIsPlaying(true)
                setShowVideo(true)
            }
        }
    }

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden overflow-x-hidden">
            {!showVideo && (
                <>
                    <Image
                        src="/images/hero-poster-desktop.jpg"
                        alt="Hero background"
                        fill
                        priority
                        sizes="(max-width: 768px) 0vw, 100vw"
                        className="hidden md:block object-cover"
                    />
                    <Image
                        src="/images/hero-poster-mobile.jpg"
                        alt="Hero background"
                        fill
                        priority
                        sizes="(min-width: 768px) 0vw, 100vw"
                        className="block md:hidden object-cover"
                    />
                </>
            )}

            <video
                ref={videoRef}
                loop
                muted={isMuted}
                playsInline
                preload="none"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    showVideo ? "opacity-100" : "opacity-0"
                }`}
            >
                <source
                    src="https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/hero-bg-desktop.mp4"
                    type="video/mp4"
                    media="(min-width: 768px)"
                />
                <source src="https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/hero-bg-mobile.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 pt-[93px] max-w-full overflow-x-hidden">
                <div className="mt-auto pb-8 md:pb-12">
                    <div className="max-w-full md:max-w-3xl mb-8 md:mb-12">
                        <h1 className="font-serif text-[28px] sm:text-[32px] md:text-5xl lg:text-6xl text-blanc mb-6 leading-tight max-w-full break-words">
                            Building Digital Products
                        </h1>
                        <p className="font-sans text-sm sm:text-base md:text-lg text-blanc/90 leading-relaxed max-w-full md:max-w-2xl mb-8 break-words">
                            At Rebirth, a creative digital studio, every idea is a rebirth and every design an emotion. We craft
                            digital products that inspire, engage and feel thoughtfully made.
                        </p>

                        <Link href="/cv" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">View My CV</Button>
                        </Link>
                    </div>

                    <VideoControls
                        isPlaying={isPlaying}
                        isMuted={isMuted}
                        onPlayPause={handlePlayPause}
                        onMuteToggle={handleMuteToggle}
                    />
                </div>
            </div>
        </section>
    )
}
