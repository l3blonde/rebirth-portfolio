"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import VideoPreview from "./video-preview"

const projects = [
    {
        id: 1,
        title: "Dream Your Bag",
        description:
            "An interactive website with a 3D bag builder and AR and VR features where users create a personalised bag by uploading meaningful images, choosing colours and styles, and transforming personal memories into a unique Jacquemus bag.",
        tags: ["UX/UI", "Branding", "Motion", "AR/VR"],
        video: "/images/project-1-preview.mp4",
        link: "https://purse-webxr.vercel.app",
    },
    {
        id: 2,
        title: "BlueWave",
        description:
            "An interactive mobile app designed for divers where users explore dive locations on a map, discover marine species at each spot, and connect with the underwater world through shared knowledge and visual exploration.",
        tags: ["UX/UI", "Product Design", "Interaction Design", "Mobile App"],
        video: "/images/project-2-preview.mp4",
        link: "https://dive-app-omega.vercel.app",
    },
    {
        id: 3,
        title: "Marine AI Recognition",
        description:
            "An AI powered platform where users upload a photo of marine life and receive species identification, habitat details, fun facts, depth range, size, and safety information using a custom trained machine learning model.",
        tags: ["AI/ML", "Data Training", "Python", "Computer Vision"],
        video: "/images/project-3-preview.mp4",
        link: "https://marine-species-spotting.vercel.app",
    },
    {
        id: 4,
        title: "Sereno",
        description:
            "A progressive web app created for Porsche electric vehicle drivers that offers guided breathing exercises during charging time, helping users relax, refocus, and turn waiting moments into a calm wellbeing experience.",
        tags: ["UX/UI", "Web Development", "Next.js", "Node.js"],
        video: "/images/project-4-preview.mp4",
        link: "https://sereno-app-three.vercel.app",
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
                {/* Section Header with Navigation Arrows */}
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

    return (
        <>
            {/* Added hover lift and shadow effect */}
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-shrink-0 snap-center w-[85vw] aspect-[3/4] md:w-[90vw] md:aspect-video lg:w-[75vw] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(46,42,43,0.3)]"
            >
                {/* Video Background - Full Size */}
                <div className="absolute inset-0">
                    <VideoPreview
                        videoSrc={project.video}
                        isFirstCard={isFirstCard || false}
                        onVideoClick={() => setIsVideoModalOpen(true)}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: isFirstCard ? 1.2 : 0.3,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="absolute bottom-0 right-0 w-[75%] md:w-[45%] lg:w-[40%] bg-[#bd9b60] rounded-tl-3xl p-6 md:p-8 shadow-2xl"
                >
                    {/* Curved Text */}
                    <div className="flex justify-center mb-5 md:mb-6">
                        <svg viewBox="0 0 280 70" className="w-56 h-14 md:w-64 md:h-16 lg:w-72 lg:h-20">
                            <path id={`curve-${project.id}`} d="M 20 55 Q 140 10 260 55" fill="transparent" />
                            <text className="text-base md:text-lg lg:text-xl fill-[#2e2a2b] font-serif tracking-[0.15em]">
                                <textPath href={`#curve-${project.id}`} startOffset="50%" textAnchor="middle">
                                    project {["one", "two", "three", "four"][project.id - 1]}
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#2e2a2b] mb-3 md:mb-4 text-center leading-tight">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#2e2a2b] text-sm md:text-base leading-relaxed mb-4 md:mb-5 text-center line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-5 md:mb-6">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="bg-[#e5d4b8] rounded-full px-4 py-1.5 text-[#2e2a2b] text-xs md:text-sm">
                {tag}
              </span>
                        ))}
                    </div>

                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#e5d4b8] text-[#2e2a2b] text-sm md:text-base font-medium py-2.5 px-6 rounded-full hover:gap-3 transition-all duration-300 shadow-md"
                    >
                        website link <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Fullscreen Video Modal */}
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

                            <video ref={videoRef} autoPlay controls loop className="w-full h-full rounded-lg">
                                <source src={project.video} type="video/mp4" />
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
