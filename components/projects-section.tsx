"use client"

import type React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import VideoPreview from "./video-preview"

const projects = [
    {
        id: 1,
        title: "Dream Your Bag",
        description: "Interactive 3D bag builder with AR/VR features for personalized Jacquemus bags.",
        tags: ["UX/UI", "AR/VR"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-1-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-1-desktop.mp4",
        link: "https://jacquemus-web.vercel.app/flow.html",
    },
    {
        id: 2,
        title: "BlueWave",
        description: "Mobile app for divers to explore locations, discover marine species, and connect underwater.",
        tags: ["UX/UI", "Mobile"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-2-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-2-desktop.mp4",
        link: "https://dive-app-omega.vercel.app",
    },
    {
        id: 3,
        title: "Marine AI Recognition",
        description: "AI platform identifying marine species with habitat details and safety information.",
        tags: ["AI/ML", "Python"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-3-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-3-desktop.mp4",
        link: "https://marine-species-spotting.vercel.app",
    },
    {
        id: 4,
        title: "Sereno",
        description: "PWA for Porsche EV drivers offering guided breathing exercises during charging.",
        tags: ["UX/UI", "Next.js"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-4-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-4-desktop.mp4",
        link: "https://sereno-app-three.vercel.app",
    },
    {
        id: 6,
        title: "Pauline",
        description: "Pauline is an AI agent app designed to help elderly people feel safe, never lost, and never alone.",
        tags: ["UX/UI", "AI", "Python"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-6-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-6-desktop.mp4",
        link: "#",
    },
]

export default function ProjectsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const updateScrollButtons = () => {
        if (!scrollContainerRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setCanScrollLeft(scrollLeft > 10)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return
        const scrollAmount = scrollContainerRef.current.offsetWidth
        scrollContainerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <section id="projects" className="relative py-16 md:py-24 bg-[#f5f1ec]">
            <div className="max-w-[100vw] mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto mb-12 md:mb-16 flex items-center justify-between">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-wider md:tracking-[0.2em] text-[#2e2a2b]">
                        FEATURED PROJECTS
                    </h2>

                    <div className="hidden lg:flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="p-3 rounded-full border-2 border-[#bd9b60] text-[#2e2a2b] hover:bg-[#bd9b60] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="p-3 rounded-full border-2 border-[#bd9b60] text-[#2e2a2b] hover:bg-[#bd9b60] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    onScroll={updateScrollButtons}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6 pb-4"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} isFirstCard={index === 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, isFirstCard }: { project: (typeof projects)[0]; isFirstCard?: boolean }) {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
        stiffness: 400,
        damping: 30,
    })
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
        stiffness: 400,
        damping: 30,
    })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-shrink-0 snap-center w-[85vw] aspect-[9/16] md:w-[90vw] md:aspect-[16/10] lg:w-[75vw] lg:aspect-[16/11] rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(46,42,43,0.3)] hover:shadow-[0_25px_70px_-20px_rgba(46,42,43,0.4)] transition-all duration-400"
            >
                <motion.div
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], [10, -10]),
                        y: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)",
                    }}
                    className="absolute inset-0"
                >
                    <VideoPreview
                        videoSrcMobile={project.videoMobile}
                        videoSrcDesktop={project.videoDesktop}
                        isFirstCard={isFirstCard || false}
                        onVideoClick={() => setIsVideoModalOpen(true)}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: isFirstCard ? 1.2 : 0.3,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(40px)",
                    }}
                    className="absolute bottom-0 right-0 w-[85%] h-auto md:w-[50%] lg:w-[42%] bg-[#bd9b60] rounded-tl-2xl p-4 md:p-8 shadow-2xl flex flex-col justify-between min-h-[280px] md:min-h-[320px]"
                >
                    <div className="flex justify-center mb-3 md:mb-5">
                        <svg viewBox="0 0 280 70" className="w-48 h-12 md:w-64 md:h-16 lg:w-72 lg:h-20">
                            <path id={`curve-${project.id}`} d="M 20 55 Q 140 10 260 55" fill="transparent" />
                            <text className="text-sm md:text-lg lg:text-xl fill-[#2e2a2b] font-serif tracking-[0.15em]">
                                <textPath href={`#curve-${project.id}`} startOffset="50%" textAnchor="middle">
                                    project {["one", "two", "three", "four", "five", "six"][project.id - 1]}
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#2e2a2b] mb-2 md:mb-3 text-center leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-[#2e2a2b] text-xs md:text-base leading-relaxed mb-3 md:mb-4 text-center line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-3 md:mb-5">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-[#e5d4b8] rounded-full px-3 py-1 text-[#2e2a2b] text-xs md:text-sm whitespace-nowrap"
                            >
                {tag}
              </span>
                        ))}
                    </div>

                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#e5d4b8] text-[#2e2a2b] text-xs md:text-base font-medium py-2 md:py-2.5 px-4 md:px-6 rounded-full hover:gap-3 transition-all duration-300 shadow-md"
                    >
                        website link <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </Link>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isVideoModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsVideoModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="absolute -top-12 right-0 p-2 text-white hover:text-[#bd9b60] transition-colors"
                                aria-label="Close video"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <video ref={videoRef} autoPlay controls loop preload="none" className="w-full h-full rounded-lg">
                                <source src={project.videoDesktop} type="video/mp4" media="(min-width: 768px)" />
                                <source src={project.videoMobile} type="video/mp4" />
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
