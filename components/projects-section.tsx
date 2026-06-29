"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"

const projects = [
    {
        id: 1,
        title: "Mathematical AI Recommendation Engine",
        projectName: "Seafolio",
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
        projectName: "Marine Species AI",
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
        projectName: "Seafolio",
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
        projectName: "Sereno",
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
        projectName: "fileyourfacts",
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wider text-[#2e2a2b]">
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
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isCardHovered, setIsCardHovered] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)
    const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("mobile")

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setScreenSize("desktop")
                setIsDesktop(true)
            } else if (window.innerWidth >= 768) {
                setScreenSize("tablet")
                setIsDesktop(false)
            } else {
                setScreenSize("mobile")
                setIsDesktop(false)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

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
        setIsCardHovered(false)
    }

    const handleCardClick = () => {
        if (!isDesktop) {
            setIsCardHovered(!isCardHovered)
        }
    }

    const getDefaultWidth = () => {
        if (screenSize === "desktop") return "42%"
        if (screenSize === "tablet") return "50%"
        return "85%"
    }

    const getDefaultHeight = () => {
        if (screenSize === "desktop") return "380px"
        if (screenSize === "tablet") return "380px"
        return "340px"
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsCardHovered(true)}
            onClick={handleCardClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0 snap-center w-[85vw] aspect-[9/16] md:w-[90vw] md:aspect-[16/10] lg:w-[75vw] lg:aspect-[16/11] rounded-2xl overflow-hidden bg-[#e5d4b8] shadow-[0_20px_40px_rgba(46,42,43,0.12)] hover:shadow-[0_25px_60px_rgba(46,42,43,0.18)] transition-all duration-400 border border-[#bd9b60]/20 group cursor-pointer"
        >
            {/* Tactile Inscribed SVG Math Diagram Background (Full-bleed, stretching past edges with zero padding) */}
            <motion.div
                style={{
                    x: useTransform(mouseX, [-0.5, 0.5], [16, -16]),
                    y: useTransform(mouseY, [-0.5, 0.5], [16, -16]),
                    transformStyle: "preserve-3d",
                    transform: "translateZ(20px)",
                }}
                className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden rounded-2xl"
            >
                <div className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <ProjectDiagram id={project.id} />
                </div>
            </motion.div>

            {/* Info Overlay Panel: Slides and grows on Hover to full-screen */}
            <motion.div
                initial={false}
                animate={{
                    width: isCardHovered ? "100%" : getDefaultWidth(),
                    height: isCardHovered ? "100%" : getDefaultHeight(),
                    backgroundColor: isCardHovered ? "rgba(46, 42, 43, 0.98)" : "rgba(189, 155, 96, 1)",
                    borderRadius: isCardHovered ? "16px" : "16px 0px 0px 16px",
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{
                    transformStyle: "preserve-3d",
                    transform: isCardHovered ? "translateZ(45px)" : "translateZ(30px)",
                    boxShadow: isCardHovered 
                        ? "0 25px 60px rgba(0, 0, 0, 0.5)" 
                        : "0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
                className="absolute bottom-0 right-0 p-5 md:p-6 border-t border-l border-[#2e2a2b]/10 z-10 flex flex-col justify-between overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    {isCardHovered ? (
                        /* Expanded View: Center-aligned, beautifully proportioned, pure volcanic mode */
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-xl mx-auto flex flex-col justify-center items-center text-center h-full py-4 px-2 sm:px-6 space-y-4 md:space-y-5 flex-grow"
                        >
                            {/* Larger Curved SVG index header */}
                            <div className="flex justify-center flex-shrink-0">
                                <svg viewBox="0 0 280 70" className="w-56 h-12 sm:w-64 sm:h-14 md:w-80 md:h-18 transition-transform duration-300">
                                    <path id={`curve-hover-${project.id}`} d="M 20 55 Q 140 10 260 55" fill="transparent" />
                                    <text 
                                        fontSize="21"
                                        className="font-serif tracking-[0.16em] fill-[#bd9b60] font-medium"
                                    >
                                        <textPath href={`#curve-hover-${project.id}`} startOffset="50%" textAnchor="middle">
                                            experiment {["one", "two", "three", "four", "five"][index]}
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Project Product Name Badge */}
                            <div className="font-mono text-[10px] sm:text-xs tracking-widest text-[#bd9b60] uppercase bg-[#2e2a2b] border border-white/15 rounded-full px-4 py-1 flex-shrink-0 -mt-2">
                                {project.projectName}
                            </div>

                            {/* Center-aligned Title */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-tight font-normal flex-shrink-0">
                                {project.title}
                            </h3>

                            {/* Spaced metadata details */}
                            <div className="space-y-3 w-full max-w-md overflow-y-auto scrollbar-hide py-1">
                                <div className="font-sans">
                                    <span className="font-semibold block uppercase text-[10px] tracking-wider text-[#bd9b60] font-mono mb-1">
                                        Research Question
                                    </span>
                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                                        {project.researchQuestion}
                                    </p>
                                </div>
                                <div className="font-sans">
                                    <span className="font-semibold block uppercase text-[10px] tracking-wider text-[#bd9b60] font-mono mb-1">
                                        Key Insight
                                    </span>
                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                                        {project.insight}
                                    </p>
                                </div>
                            </div>

                            {/* Tag list */}
                            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 flex-shrink-0">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#2e2a2b] text-white/95 border border-white/10 rounded-full px-3.5 py-0.5 text-[10px] sm:text-xs font-mono whitespace-nowrap"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Centered Constrained Button */}
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#bd9b60] hover:bg-[#D4B47A] text-[#1A1818] text-xs sm:text-sm font-semibold py-2.5 px-8 rounded-[14px] hover:gap-3 transition-all duration-300 shadow-md font-mono max-w-xs w-full flex-shrink-0"
                            >
                                view repository / demo <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ) : (
                        /* Default View: Taller, spacing-balanced gold theme with hidden Key Insight */
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full flex flex-col justify-between h-full flex-grow"
                        >
                            {/* Curved SVG label */}
                            <div className="flex justify-center mb-1 flex-shrink-0">
                                <svg viewBox="0 0 280 70" className="w-56 h-12 md:w-64 md:h-14 lg:w-72 lg:h-16">
                                    <path id={`curve-collapsed-${project.id}`} d="M 20 55 Q 140 10 260 55" fill="transparent" />
                                    <text 
                                        fontSize="21"
                                        className="font-serif tracking-[0.16em] fill-[#2e2a2b] font-medium"
                                    >
                                        <textPath href={`#curve-collapsed-${project.id}`} startOffset="50%" textAnchor="middle">
                                            experiment {["one", "two", "three", "four", "five"][index]}
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-serif text-[#2e2a2b] font-bold mb-3 text-center leading-tight">
                                {project.title}
                            </h3>

                            {/* Research Question */}
                            <div className="text-center font-sans mb-3 flex-grow flex flex-col justify-center">
                                <span className="font-semibold block uppercase text-[9px] tracking-wider text-[#2e2a2b]/70 font-mono mb-0.5">
                                    Research Question
                                </span>
                                <p className="text-[12px] sm:text-xs leading-relaxed text-[#2e2a2b]/95 max-w-md mx-auto">
                                    {project.researchQuestion}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-1.5 mb-4 flex-shrink-0">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#e5d4b8] text-[#2e2a2b] rounded-full px-3 py-0.5 text-[10px] sm:text-xs font-mono whitespace-nowrap"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#e5d4b8] hover:bg-white text-[#2e2a2b] text-[11px] sm:text-xs font-semibold py-2.5 px-4 md:px-6 rounded-[14px] hover:gap-3 transition-all duration-300 shadow-md font-mono mt-auto flex-shrink-0"
                            >
                                view repository / demo <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

function ProjectDiagram({ id }: { id: number }) {
    const defaultColorClasses = "w-full h-full text-volcanic-ash/20 group-hover:text-[#1A1818] transition-colors duration-300"
    
    switch (id) {
        case 1:
            return (
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className={defaultColorClasses}>
                    <line x1="50" y1="50" x2="50" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    <line x1="150" y1="50" x2="150" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    <line x1="250" y1="50" x2="250" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    <line x1="350" y1="50" x2="350" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    <line x1="50" y1="150" x2="350" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    <line x1="50" y1="250" x2="350" y2="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    
                    <line x1="50" y1="300" x2="350" y2="300" stroke="currentColor" strokeWidth="2.8" />
                    <line x1="50" y1="300" x2="50" y2="50" stroke="currentColor" strokeWidth="2.8" />
                    
                    {/* Animate user vector slowly waving back and forth */}
                    <motion.g
                        animate={{ rotate: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        style={{ transformOrigin: "50px 300px" }}
                    >
                        <line x1="50" y1="300" x2="240" y2="100" stroke="currentColor" strokeWidth="4.8" />
                        <polygon points="240,95 247,100 240,105" fill="currentColor" />
                    </motion.g>

                    <line x1="50" y1="300" x2="310" y2="190" stroke="currentColor" strokeWidth="4.5" />
                    
                    <line x1="240" y1="100" x2="190" y2="160" stroke="currentColor" strokeWidth="2.0" strokeDasharray="3,3" />
                    <path d="M 110 250 A 90 90 0 0 0 140 270" fill="none" stroke="currentColor" strokeWidth="2.0" />
                    
                    <text x="255" y="95" fill="currentColor" fontSize="16" fontFamily="monospace" fontWeight="bold">u (user)</text>
                    <text x="325" y="195" fill="currentColor" fontSize="16" fontFamily="monospace" fontWeight="bold">v (item)</text>
                    <text x="145" y="240" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="bold">θ</text>
                    <text x="90" y="80" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="bold">u·v = |u||v|cosθ</text>
                </svg>
            )
        case 2:
            return (
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className={defaultColorClasses}>
                    <rect x="50" y="80" width="300" height="240" fill="none" stroke="currentColor" strokeWidth="2.0" strokeDasharray="6,6" />
                    <path d="M 70 200 C 140 110, 260 110, 330 200 C 260 290, 140 290, 70 200 Z" fill="none" stroke="currentColor" strokeWidth="3.5" />
                    <path d="M 330 200 L 365 165 L 350 200 L 365 235 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="130" cy="180" r="8.0" fill="currentColor" />
                    
                    {/* Animate scanning line moving up and down across bbox */}
                    <motion.line 
                        animate={{ y: [-50, 110, -50] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        x1="40" y1="160" x2="360" y2="160" stroke="currentColor" strokeWidth="3.5" 
                    />
                    
                    <text x="70" y="115" fill="currentColor" fontSize="15" fontFamily="monospace" fontWeight="bold">LABEL: MARINE_SPECIES</text>
                    <text x="70" y="138" fill="currentColor" fontSize="15" fontFamily="monospace" fontWeight="bold">CONFIDENCE: 98.2%</text>
                    <text x="70" y="295" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold">x_bbox: [80, 130, 320, 270]</text>
                </svg>
            )
        case 3:
            return (
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className={defaultColorClasses}>
                    <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="2.0" strokeDasharray="5,5" />
                    
                    {/* Animate rotating 3D wireframe polyhedron projection */}
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                        style={{ transformOrigin: "200px 200px" }}
                    >
                        <path d="M 200 60 L 320 150 L 280 290 L 120 290 L 80 150 Z" fill="none" stroke="currentColor" strokeWidth="3.5" />
                        <path d="M 200 60 L 200 160 M 320 150 L 240 210 M 280 290 L 200 250 M 120 290 L 160 210 M 80 150 L 160 160" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M 200 160 L 240 210 L 200 250 L 160 210 L 160 160 Z" fill="none" stroke="currentColor" strokeWidth="2.0" />
                        <line x1="200" y1="160" x2="160" y2="210" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="240" y1="210" x2="160" y2="160" stroke="currentColor" strokeWidth="1.5" />
                    </motion.g>

                    <text x="110" y="340" fill="currentColor" fontSize="16" fontFamily="monospace" fontWeight="bold">Euler: V - E + F = 2</text>
                    <text x="80" y="50" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="bold">GEOM_ENGINE_3D</text>
                </svg>
            )
        case 4:
            return (
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className={defaultColorClasses}>
                    <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="2.0" />
                    <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    
                    {/* Animate breathing wave shift */}
                    <motion.path 
                        animate={{
                            d: [
                                "M 50 200 Q 87.5 80, 125 200 T 200 200 T 275 200 T 350 200",
                                "M 50 200 Q 87.5 130, 125 200 T 200 200 T 275 200 T 350 200",
                                "M 50 200 Q 87.5 80, 125 200 T 200 200 T 275 200 T 350 200"
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        fill="none" stroke="currentColor" strokeWidth="4.0" 
                    />
                    
                    <motion.path 
                        animate={{
                            d: [
                                "M 50 200 Q 87.5 280, 125 200 T 200 200 T 275 200 T 350 200",
                                "M 50 200 Q 87.5 230, 125 200 T 200 200 T 275 200 T 350 200",
                                "M 50 200 Q 87.5 280, 125 200 T 200 200 T 275 200 T 350 200"
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        fill="none" stroke="currentColor" strokeWidth="2.0" opacity="0.5" strokeDasharray="6,4" 
                    />
                    
                    <rect x="230" y="60" width="110" height="45" rx="6" fill="none" stroke="currentColor" strokeWidth="2.0" />
                    
                    <text x="245" y="87" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="bold">BREATH: IN</text>
                    <text x="60" y="85" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="bold">f(t) = A·sin(ωt + φ)</text>
                </svg>
            )
        case 5:
            return (
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className={defaultColorClasses}>
                    <line x1="200" y1="90" x2="100" y2="180" stroke="currentColor" strokeWidth="2.8" />
                    <line x1="200" y1="90" x2="200" y2="180" stroke="currentColor" strokeWidth="2.8" />
                    <line x1="200" y1="90" x2="300" y2="180" stroke="currentColor" strokeWidth="2.8" />
                    <line x1="100" y1="180" x2="60" y2="270" stroke="currentColor" strokeWidth="2.2" />
                    <line x1="100" y1="180" x2="140" y2="270" stroke="currentColor" strokeWidth="2.2" />
                    
                    {/* Animate tree network nodes pulsing in a staggered wave */}
                    <motion.circle cx="200" cy="90" r="16" fill="currentColor" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 0 }} />
                    <motion.circle cx="100" cy="180" r="12" fill="currentColor" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 0.8 }} />
                    <motion.circle cx="200" cy="180" r="12" fill="currentColor" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 0.8 }} />
                    <motion.circle cx="300" cy="180" r="12" fill="currentColor" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 0.8 }} />
                    <motion.circle cx="60" cy="270" r="9" fill="currentColor" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 1.6 }} />
                    <motion.circle cx="140" cy="270" r="9" fill="currentColor" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 1.6 }} />
                    
                    <circle cx="200" cy="180" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,5" />
                    
                    <text x="225" y="94" fill="currentColor" fontSize="15" fontFamily="monospace" fontWeight="bold">Core Agent</text>
                    <text x="220" y="195" fill="currentColor" fontSize="14" fontFamily="monospace" fontWeight="bold">FOCUS_NODE [Active]</text>
                    <text x="50" y="330" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold">Task Scaffolding: scaffold(priority_task)</text>
                </svg>
            )
        default:
            return null
    }
}
