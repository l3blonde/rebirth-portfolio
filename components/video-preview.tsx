"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export interface VideoPreviewProps {
    videoSrcMobile: string
    videoSrcDesktop: string
    isFirstCard: boolean
    onVideoClick: () => void
}

export default function VideoPreview({
                                         videoSrcMobile,
                                         videoSrcDesktop,
                                         isFirstCard,
                                         onVideoClick,
                                     }: VideoPreviewProps) {
    const [isInView, setIsInView] = useState(() => isFirstCard)
    const [prefersReducedMotion] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        }
        return false
    })
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
        damping: 25,
        stiffness: 80,
    })
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
        damping: 25,
        stiffness: 80,
    })

    useEffect(() => {
        if (isFirstCard) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold: 0.3 },
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [isFirstCard])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    useEffect(() => {
        if (isInView && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay prevented
            })
        }
    }, [isInView])

    const lidVariants = {
        closed: { rotateX: 15 },
        open: {
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 80,
                duration: 1.8,
            },
        },
    }

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                delay: 1.0,
                duration: 0.8,
                ease: "easeOut" as const,
            },
        },
    }

    const highlightVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: "100%",
            opacity: [0, 0.6, 0],
            transition: {
                duration: 1.5,
                ease: "easeInOut" as const,
            },
        },
    }

    return (
        <motion.div
            ref={containerRef}
            className="relative w-full h-full"
            style={{
                perspective: "2000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="relative w-full h-full"
                style={{
                    transformStyle: "preserve-3d",
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                }}
            >
                <motion.div
                    className="relative w-full h-full rounded-[2rem] overflow-hidden"
                    style={{
                        border: "3px solid #bd9b60",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        transformOrigin: "center center",
                    }}
                    variants={lidVariants}
                    initial={prefersReducedMotion ? "open" : "closed"}
                    animate={isInView ? "open" : "closed"}
                >
                    <motion.div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(189, 155, 96, 0.3), transparent)",
                        }}
                        variants={highlightVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />

                    <motion.div
                        className="relative w-full h-full bg-[#2e2a2b] cursor-pointer"
                        variants={contentVariants}
                        initial={prefersReducedMotion ? "visible" : "hidden"}
                        animate={isInView ? "visible" : "hidden"}
                        onClick={onVideoClick}
                    >
                        <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline preload="none">
                            <source src={videoSrcDesktop} type="video/mp4" media="(min-width: 768px)" />
                            <source src={videoSrcMobile} type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
