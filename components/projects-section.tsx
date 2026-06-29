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
        title: "Mathematical AI Recommendation Engine",
        researchQuestion: "How can vector mathematics and spatial geometry be combined to compute real-time relevance for user-matching models?",
        insight: "Combining high-dimensional vector embeddings with coordinate constraints reduces API latency while maintaining high precision.",
        tags: ["FastAPI", "PostgreSQL", "Next.js", "Vector Math"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-2-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-2-desktop.mp4",
        link: "https://seafolio-dive-app.vercel.app",
    },
    {
        id: 2,
        title: "Fine-Tuned Marine Species Classifier",
        researchQuestion: "Can lightweight computer vision models fine-tuned on a 10,000+ marine species image dataset identify species with high precision?",
        insight: "Fine-tuning lightweight models on over 10,000 high-contrast marine images achieves high classification accuracy.",
        tags: ["Computer Vision", "PyTorch", "Hugging Face", "Gradio"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-3-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-3-desktop.mp4",
        link: "https://huggingface.co/spaces/ocean4/marine-species-ai",
    },
    {
        id: 3,
        title: "Geometric Interaction Engine",
        researchQuestion: "How can interactive three-dimensional geometry improve spatial reasoning and mathematical exploration?",
        insight: "Visualising topological properties (e.g. V - E + F = 2) interactively reduces cognitive load when studying spatial mathematics.",
        tags: ["WebGL", "Three.js", "Computational Geometry"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-1-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-1-desktop.mp4",
        link: "https://seafolio-dive-app.vercel.app",
    },
    {
        id: 4,
        title: "Sereno: CarPlay Wellness PWA",
        researchQuestion: "How can interface state machines and ambient 3D environments adapt to CarPlay standards to support driver wellness?",
        insight: "Synchronising client-side service workers with GSAP-driven breathing animations ensures full offline reliability for automotive displays.",
        tags: ["Next.js 15", "CarPlay", "Three.js", "State Machines"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-4-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-4-desktop.mp4",
        link: "https://sereno-app-three.vercel.app",
    },
    {
        id: 5,
        title: "Human-Centred AI Task Assistant",
        researchQuestion: "How can conversational agents support focus by scaffolding a 'one high-impact task per day' methodology on mobile platforms?",
        insight: "Restricting daily interactive options to a single major task mentored by a conversational agent mitigates task paralysis.",
        tags: ["React Native", "Expo", "Zustand", "Generative AI"],
        videoMobile: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-6-mobile.mp4",
        videoDesktop: "https://xu5qaaigiohvkyk8.public.blob.vercel-storage.com/project-6-desktop.mp4",
        link: "https://github.com/l3blonde/fileyourfacts-todo-app",
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
                <div className="max-w-7xl mx-auto mb-10 md:mb-12 flex items-center justify-between">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-wider text-[#2e2a2b]">
                        COMPUTATIONAL EXPERIMENTS
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
                        <ProjectCard key={project.id} project={project} index={index} isFirstCard={index === 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index, isFirstCard }: { project: (typeof projects)[0]; index: number; isFirstCard?: boolean }) {
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
                    className="absolute bottom-0 right-0 w-[85%] h-auto md:w-[50%] lg:w-[42%] bg-[#bd9b60] rounded-tl-2xl p-4 md:p-6 shadow-2xl flex flex-col justify-between min-h-[280px] md:min-h-[320px]"
                >
                    <div className="flex justify-center mb-2">
                        <svg viewBox="0 0 280 70" className="w-48 h-10 md:w-64 md:h-12 lg:w-72 lg:h-14">
                            <path id={`curve-${project.id}`} d="M 20 55 Q 140 10 260 55" fill="transparent" />
                            <text className="text-xs md:text-sm fill-[#2e2a2b] font-serif tracking-[0.15em]">
                                <textPath href={`#curve-${project.id}`} startOffset="50%" textAnchor="middle">
                                    experiment {["one", "two", "three", "four", "five"][index]}
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-[#2e2a2b] mb-2 text-center leading-tight">
                        {project.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                        <p className="text-[#2e2a2b] text-[11px] leading-relaxed text-center font-sans">
                            <span className="font-semibold block uppercase text-[9px] tracking-wider text-[#2e2a2b]/70 font-mono">Research Question</span>
                            {project.researchQuestion}
                        </p>
                        <p className="text-[#2e2a2b] text-[11px] leading-relaxed text-center font-sans">
                            <span className="font-semibold block uppercase text-[9px] tracking-wider text-[#2e2a2b]/70 font-mono">Key Insight</span>
                            {project.insight}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-[#e5d4b8] rounded-full px-3 py-1 text-[#2e2a2b] text-xs font-mono whitespace-nowrap"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#e5d4b8] text-[#2e2a2b] text-xs font-medium py-2 md:py-2.5 px-4 md:px-6 rounded-full hover:gap-3 transition-all duration-300 shadow-md font-mono"
                    >
                        view repository / demo <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
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
