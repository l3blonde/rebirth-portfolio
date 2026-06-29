"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "./button"
import Link from "next/link"

interface CoordNode {
    id: string
    label: string
    x: number
    y: number
    coord: string
}

export default function HeroSection() {
    const [activeNode, setActiveNode] = useState<CoordNode | null>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const titleText = "Designing Intelligent Systems"

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleNodeEnter = (node: CoordNode) => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
        setActiveNode(node)
    }

    const handleNodeLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveNode(null)
        }, 400)
    }

    // Individual character variants
    const letterVariants = {
        hidden: {
            opacity: 0,
            y: -18,
            color: "#bd9b60",
        },
        visible: {
            opacity: 1,
            y: 0,
            color: "#ffffff",
        },
    }

    // Coordinates mapped strictly to the center and right side (x >= 200) to clear the left text column
    const nodes: CoordNode[] = [
        { id: "v1", label: "Vertex A", x: 285, y: 285, coord: "[x: 0.425, y: 0.425]" },
        { id: "v2", label: "Vertex B", x: 285, y: 53, coord: "[x: 0.425, y: -0.735]" },
        { id: "v3", label: "Vertex C", x: 304, y: 140, coord: "[x: 0.520, y: -0.300]" },
        { id: "v4", label: "Vertex D", x: 250, y: 150, coord: "[x: 0.250, y: -0.250]" },
        { id: "center", label: "Center", x: 200, y: 200, coord: "[x: 0.000, y: 0.000]" },
    ]

    return (
        <section 
            id="hero" 
            className="relative min-h-screen w-full overflow-hidden overflow-x-hidden flex items-center py-10 md:py-0"
            style={{
                backgroundImage: `
                    radial-gradient(circle at center, rgba(189, 155, 96, 0.08) 0%, rgba(46, 42, 43, 0) 70%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")
                `,
                backgroundColor: "#2E2A2B",
            }}
        >
            {/* Giant Rotating Astrolabe Background Watermark (Full-Screen, Centered, Softened default mobile opacity to 0.35) */}
            <motion.div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={isDesktop ? { 
                    opacity: isHovered ? 0.80 : 0.45,
                    scale: isHovered ? 1.02 : 1.0,
                    x: "-50%",
                    y: "-50%"
                } : { 
                    opacity: 0.35, 
                    scale: [1, 1.04, 1], 
                    x: "-50%",
                    y: "-50%"
                }}
                transition={isDesktop ? { 
                    duration: 0.5, 
                    ease: "easeOut" 
                } : {
                    scale: {
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                    }
                }}
                className="absolute left-1/2 top-1/2 w-[110vh] md:w-[110vw] aspect-square z-0 pointer-events-auto flex items-center justify-center overflow-visible"
            >
                <div className="w-full h-full p-4">
                    <svg 
                        viewBox="0 0 400 400" 
                        className="w-full h-full text-[#bd9b60] select-none pointer-events-auto"
                        style={{ 
                            filter: isHovered && isDesktop 
                                ? "drop-shadow(0 0 25px rgba(189, 155, 96, 0.95))" 
                                : "drop-shadow(0 0 12px rgba(189, 155, 96, 0.5))",
                            transition: "filter 0.5s ease-out"
                        }}
                    >
                        <defs>
                            {/* Circular paths for rotating text equations if needed later */}
                            <path id="outer-ring-path" d="M 200 30 A 170 170 0 1 1 199.9 30" fill="transparent" />
                            <path id="middle-ring-path" d="M 200 80 A 120 120 0 1 1 199.9 80" fill="transparent" />
                            <path id="inner-ring-path" d="M 200 130 A 70 70 0 1 1 199.9 130" fill="transparent" />
                        </defs>
                        
                        {/* 1. Outer Ring Group (Rotates Clockwise Slowly on all screens) */}
                        <motion.g
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
                            style={{ transformOrigin: "200px 200px", originX: "200px", originY: "200px" }}
                        >
                            <circle
                                cx="200"
                                cy="200"
                                r="170"
                                stroke="#bd9b60"
                                strokeWidth="3.0"
                                fill="none"
                                opacity="0.9"
                            />
                            {/* Ecliptic / Zodiac Ring (Off-center astronomical circle) */}
                            <circle
                                cx="180"
                                cy="180"
                                r="130"
                                stroke="#bd9b60"
                                strokeWidth="1.5"
                                fill="none"
                                opacity="0.65"
                                strokeDasharray="6,4"
                            />
                            {/* Constellation Pointer Marks */}
                            <circle cx="310" cy="180" r="3.5" fill="#bd9b60" opacity="0.85" />
                            <text x="316" y="183" fill="#bd9b60" fontSize="7" fontFamily="monospace" opacity="0.7">Sirius</text>
                            
                            <circle cx="180" cy="50" r="3.5" fill="#bd9b60" opacity="0.85" />
                            <text x="186" y="47" fill="#bd9b60" fontSize="7" fontFamily="monospace" opacity="0.7">Vega</text>
                            
                            {/* Angle Tick Lines */}
                            <line x1="200" y1="30" x2="200" y2="45" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            <line x1="200" y1="370" x2="200" y2="355" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            <line x1="30" y1="200" x2="45" y2="200" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            <line x1="370" y1="200" x2="355" y2="200" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            
                            {/* Astrolabe degree notations */}
                            <text x="210" y="42" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">02° As</text>
                            <text x="340" y="215" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">10° ♉</text>
                            <text x="210" y="362" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">12° ♊</text>
                            <text x="35" y="192" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">47° ♏</text>
                        </motion.g>

                        {/* 2. Middle Ring Group (Rotates Counter-Clockwise Slowly on all screens) */}
                        <motion.g
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
                            style={{ transformOrigin: "200px 200px", originX: "200px", originY: "200px" }}
                        >
                            <circle
                                cx="200"
                                cy="200"
                                r="120"
                                stroke="#bd9b60"
                                strokeWidth="3.0"
                                fill="none"
                                opacity="0.9"
                            />
                            {/* Diagonal Tick Lines */}
                            <line x1="115" y1="115" x2="125" y2="125" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            <line x1="285" y1="285" x2="275" y2="275" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            <line x1="285" y1="115" x2="275" y2="125" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />
                            <line x1="115" y1="285" x2="125" y2="275" stroke="#bd9b60" strokeWidth="2.0" opacity="0.85" />

                            <text x="260" y="105" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">15° ♌</text>
                            <text x="100" y="295" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">30° ♒</text>
                        </motion.g>

                        {/* 3. Inner Ring Group (Rotates Clockwise Faster on all screens) */}
                        <motion.g
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                            style={{ transformOrigin: "200px 200px", originX: "200px", originY: "200px" }}
                        >
                            <circle
                                cx="200"
                                cy="200"
                                r="70"
                                stroke="#bd9b60"
                                strokeWidth="3.5"
                                fill="none"
                                opacity="0.95"
                            />
                            <line x1="200" y1="130" x2="200" y2="140" stroke="#bd9b60" strokeWidth="2.0" opacity="0.95" />
                            <line x1="200" y1="270" x2="200" y2="260" stroke="#bd9b60" strokeWidth="2.0" opacity="0.95" />
                            
                            {/* Stylus Markings */}
                            <path d="M 197 145 L 203 145 L 200 150 Z" fill="#bd9b60" opacity="0.9" />
                            <text x="210" y="145" fill="#bd9b60" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.95">YBC</text>
                        </motion.g>

                        {/* 4. Axis Grid Overlay (Static) */}
                        <line x1="200" y1="30" x2="200" y2="370" stroke="#bd9b60" strokeWidth="1.5" opacity="0.45" strokeDasharray="3,3" />
                        <line x1="30" y1="200" x2="370" y2="200" stroke="#bd9b60" strokeWidth="1.5" opacity="0.45" strokeDasharray="3,3" />
                        
                        {/* Decorative Almucantar coordinate arcs */}
                        <path d="M 60 200 A 140 140 0 0 1 340 200" stroke="#bd9b60" strokeWidth="1.2" fill="none" opacity="0.35" />
                        <path d="M 90 200 A 110 110 0 0 1 310 200" stroke="#bd9b60" strokeWidth="1.2" fill="none" opacity="0.35" />
                        
                        {/* Azimuth radial projection lines */}
                        <line x1="200" y1="200" x2="115" y2="85" stroke="#bd9b60" strokeWidth="1.0" opacity="0.3" />
                        <line x1="200" y1="200" x2="285" y2="85" stroke="#bd9b60" strokeWidth="1.0" opacity="0.3" />
                        <line x1="200" y1="200" x2="115" y2="315" stroke="#bd9b60" strokeWidth="1.0" opacity="0.3" />
                        <line x1="200" y1="200" x2="285" y2="315" stroke="#bd9b60" strokeWidth="1.0" opacity="0.3" />

                        {/* 5. Interactive Coordinate Nodes (Static Overlay with radar pings and hover feedback) */}
                        {nodes.map((node, index) => (
                            <g key={node.id}>
                                {/* Sonar radar pulse expanding ring (Discoverability Beacon) */}
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="4.5"
                                    stroke="#bd9b60"
                                    strokeWidth="1.2"
                                    fill="none"
                                    animate={{ scale: [1, 3.5], opacity: [0.8, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: index * 0.4 }}
                                />
                                
                                {/* Core Node circle anchor (Glows crimson and grows when hovered/active) */}
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="4.5"
                                    fill={activeNode?.id === node.id ? "#c25953" : "#bd9b60"}
                                    animate={activeNode?.id === node.id ? { scale: 1.6 } : { scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                />

                                {/* Broad hover/click trigger zone */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="18"
                                    fill="transparent"
                                    className="cursor-pointer pointer-events-auto"
                                    onMouseEnter={() => isDesktop && handleNodeEnter(node)}
                                    onMouseLeave={() => isDesktop && handleNodeLeave()}
                                    onClick={() => {
                                        if (isDesktop) {
                                            handleNodeEnter(node)
                                        } else {
                                            setActiveNode(node)
                                        }
                                    }}
                                />
                            </g>
                        ))}
                    </svg>
                </div>
            </motion.div>

            {/* Content Container (Increased desktop top padding to md:pt-[200px] lg:pt-[240px] for spacing control) */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-16 w-full max-w-7xl mx-auto pt-[42vh] sm:pt-[46vh] md:pt-[200px] lg:pt-[240px] pb-16 md:pb-0 pointer-events-none">
                
                {/* LEFT COLUMN: Bio & Title (Transparent background, optimized contrast via text shadows on all devices) */}
                <div className="w-full md:w-[58%] flex flex-col justify-center relative z-20 pointer-events-auto">
                    {/* Staggered Spring-Loaded Text Animation */}
                    <h1 
                        className="font-serif text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-full break-words"
                        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.95)" }}
                    >
                        {titleText.split(" ").map((word, wordIndex) => {
                            const wordsArray = titleText.split(" ");
                            const previousWords = wordsArray.slice(0, wordIndex);
                            const startIndex = previousWords.join(" ").length + (wordIndex > 0 ? 1 : 0);
                            return (
                                <span key={wordIndex} className="inline-block whitespace-nowrap">
                                    {word.split("").map((char, charIndex) => {
                                        const globalIndex = startIndex + charIndex;
                                        return (
                                            <motion.span
                                                key={charIndex}
                                                variants={letterVariants}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{
                                                    type: "spring" as const,
                                                    damping: 12,
                                                    stiffness: 110,
                                                    delay: globalIndex * 0.04,
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        )
                                    })}
                                    {wordIndex < wordsArray.length - 1 && "\u00A0"}
                                </span>
                            )
                        })}
                    </h1>

                    <p 
                        className="text-white font-sans text-[17px] sm:text-lg leading-relaxed max-w-full mb-8 break-words font-normal"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.95)" }}
                    >
                        Exploring how mathematics, machine learning, and software engineering can be combined to create intelligent, human-centred systems, with a focus on computational geometry, recommendation systems, computer vision, and scalable software design.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/cv">
                            <Button variant="secondary">View CV</Button>
                        </Link>
                        <a href="https://github.com/l3blonde" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">GitHub</Button>
                        </a>
                    </div>

                    {/* mon/tab monospace tooltip callout prompt (Discoverability indicator) */}
                    <div 
                        className="mt-6 font-mono text-[9px] sm:text-[10px] text-[#bd9b60] tracking-widest uppercase flex items-center gap-2" 
                        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bd9b60] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bd9b60]"></span>
                        </span>
                        {isDesktop 
                            ? "* Hover coordinate nodes to decrypt schematic formulas" 
                            : "* Tap coordinate nodes to decrypt schematic formulas"
                        }
                    </div>
                </div>

                {/* RIGHT COLUMN: Hover Detector & Formula Cards on Desktop, Hidden on Mobile */}
                <div className="w-full md:w-[35%] md:min-h-[450px] flex flex-col justify-center pointer-events-auto md:pointer-events-none relative z-10">
                    
                    {/* Rendered on Desktop: Shows active node formula card on hover (z-20, will never overlap behind text) */}
                    <div className="hidden md:block w-full">
                        <AnimatePresence mode="wait">
                            {activeNode && (
                                <motion.div
                                    key={activeNode.id}
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full bg-[#2E2A2B]/95 backdrop-blur-md border border-[#bd9b60]/30 rounded-xl p-6 shadow-2xl flex flex-col gap-4 text-[#f7f7f7] pointer-events-auto"
                                    style={{ 
                                        boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 20px rgba(189,155,96,0.1)" 
                                    }}
                                    onMouseEnter={() => {
                                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
                                    }}
                                    onMouseLeave={() => {
                                        handleNodeLeave()
                                    }}
                                >
                                    {activeNode.id === "v1" && (
                                        <>
                                            <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2">
                                                <span className="font-mono text-[10px] text-[#bd9b60] uppercase tracking-widest font-bold">01 // CONTINUOUS DIFFUSION SDE</span>
                                                <span className="font-mono text-[9px] text-[#bd9b60]/50">GENERATIVE AI</span>
                                            </div>
                                            <div className="font-mono text-sm lg:text-[15px] text-[#bd9b60] py-2 break-all overflow-x-auto scrollbar-hide">
                                                dx<sub>t</sub> = [ f(x,t) - g²(t) ∇<sub>x</sub> log p<sub>t</sub>(x) ] dt + g(t) dW<sub>t</sub>
                                            </div>
                                            <p className="text-xs text-[#f7f7f7]/80 font-sans leading-relaxed">
                                                Reverse-time stochastic differential equation guiding probability density score matching to generate high-fidelity samples from noise space.
                                            </p>
                                        </>
                                    )}
                                    {activeNode.id === "v2" && (
                                        <>
                                            <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2">
                                                <span className="font-mono text-[10px] text-[#bd9b60] uppercase tracking-widest font-bold">02 // KULLBACK-LEIBLER DIVERGENCE</span>
                                                <span className="font-mono text-[9px] text-[#bd9b60]/50">DISTRIBUTION GEOMETRY</span>
                                            </div>
                                            <div className="font-mono text-sm lg:text-[15px] text-[#bd9b60] py-2 flex items-center gap-1 overflow-x-auto scrollbar-hide">
                                                D<sub>KL</sub>(P || Q) = <span className="text-lg font-serif leading-none">∫</span><sub>ℝ</sub> p(x) log
                                                <div className="inline-flex flex-col items-center align-middle mx-1 text-[9px] leading-none">
                                                    <span className="border-b border-[#f7f7f7]/40 px-1 pb-0.5">p(x)</span>
                                                    <span className="px-1 pt-0.5">q(x)</span>
                                                </div>
                                                dx
                                            </div>
                                            <p className="text-xs text-[#f7f7f7]/80 font-sans leading-relaxed">
                                                Relative entropy measure quantifying the informational distance between model distribution P and data distribution Q.
                                            </p>
                                        </>
                                    )}
                                    {activeNode.id === "v3" && (
                                        <>
                                            <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2">
                                                <span className="font-mono text-[10px] text-[#bd9b60] uppercase tracking-widest font-bold">03 // SCALED DOT-PRODUCT ATTENTION</span>
                                                <span className="font-mono text-[9px] text-[#bd9b60]/50">TRANSFORMER CORE</span>
                                            </div>
                                            <div className="font-mono text-sm lg:text-[15px] text-[#bd9b60] py-2 flex items-center gap-1 overflow-x-auto scrollbar-hide">
                                                Attention(Q, K, V) = softmax(
                                                <div className="inline-flex flex-col items-center align-middle mx-1 text-[9px] leading-none">
                                                    <span className="border-b border-[#f7f7f7]/40 px-1 pb-0.5">Q K<sup>T</sup></span>
                                                    <span className="px-1 pt-0.5">√d<sub>k</sub></span>
                                                </div>
                                                ) V
                                            </div>
                                            <p className="text-xs text-[#f7f7f7]/80 font-sans leading-relaxed">
                                                High-dimensional score projection mapping relative semantic importance inside transformer-based cognitive models.
                                            </p>
                                        </>
                                    )}
                                    {activeNode.id === "v4" && (
                                        <>
                                            <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2">
                                                <span className="font-mono text-[10px] text-[#bd9b60] uppercase tracking-widest font-bold">04 // RIEMANNIAN METRIC</span>
                                                <span className="font-mono text-[9px] text-[#bd9b60]/50">GEOMETRY</span>
                                            </div>
                                            <div className="font-mono text-sm lg:text-[15px] text-[#bd9b60] py-2 break-all overflow-x-auto scrollbar-hide">
                                                ds² = ∑ g<sub>ij</sub> dx<sup>i</sup> dx<sup>j</sup>
                                            </div>
                                            <p className="text-xs text-[#f7f7f7]/80 font-sans leading-relaxed">
                                                Differential geometry metric defining distances on curved manifolds, central to computational geometry and manifold learning.
                                            </p>
                                        </>
                                    )}
                                    {activeNode.id === "center" && (
                                        <>
                                            <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2">
                                                <span className="font-mono text-[10px] text-[#bd9b60] uppercase tracking-widest font-bold">00 // SINGULARITY POINT</span>
                                                <span className="font-mono text-[9px] text-[#bd9b60]/50">ORIGIN</span>
                                            </div>
                                            <div className="font-mono text-sm lg:text-[15px] text-[#bd9b60] py-2 break-all overflow-x-auto scrollbar-hide">
                                                [ x₀, y₀ ] = [ 0.000, 0.000 ]
                                            </div>
                                            <p className="text-xs text-[#f7f7f7]/80 font-sans leading-relaxed">
                                                The mathematical origin of the coordinate space, serving as the central translation anchor of all vector transformations.
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* MOBILE ACTIVE OVERLAY CARD: Slides up as a beautiful Bottom Sheet when a node is tapped (z-50) */}
            <AnimatePresence>
                {!isDesktop && activeNode && (
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 80 }}
                        transition={{ type: "spring", damping: 25, stiffness: 220 }}
                        className="fixed bottom-4 left-4 right-4 z-50 bg-[#2E2A2B]/98 backdrop-blur-md border border-[#bd9b60]/30 rounded-xl p-5 shadow-2xl flex flex-col gap-3 text-[#f7f7f7] pointer-events-auto"
                        style={{ 
                            boxShadow: "0 -10px 40px rgba(0,0,0,0.6), 0 0 20px rgba(189,155,96,0.15)" 
                        }}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setActiveNode(null)}
                            className="absolute top-3.5 right-3.5 text-[#bd9b60] hover:text-[#f7f7f7] p-1.5 transition-colors rounded-full bg-[#2E2A2B]/80 border border-[#bd9b60]/10"
                        >
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {activeNode.id === "v1" && (
                            <>
                                <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2 pr-8">
                                    <span className="font-mono text-[9px] text-[#bd9b60] uppercase tracking-wider font-bold">01 // DIFFUSION SDE</span>
                                    <span className="font-mono text-[8px] text-[#bd9b60]/50">GENERATIVE AI</span>
                                </div>
                                <div className="font-mono text-xs text-[#bd9b60] py-1 break-all overflow-x-auto scrollbar-hide">
                                    dx<sub>t</sub> = [ f(x,t) - g²(t) ∇<sub>x</sub> log p<sub>t</sub>(x) ] dt + g(t) dW<sub>t</sub>
                                </div>
                                <p className="text-[10px] text-[#f7f7f7]/80 font-sans leading-relaxed">
                                    Reverse-time stochastic differential equation guiding probability density score matching to generate high-fidelity samples from noise space.
                                </p>
                            </>
                        )}
                        {activeNode.id === "v2" && (
                            <>
                                <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2 pr-8">
                                    <span className="font-mono text-[9px] text-[#bd9b60] uppercase tracking-wider font-bold">02 // KL DIVERGENCE</span>
                                    <span className="font-mono text-[8px] text-[#bd9b60]/50">ENTROPY</span>
                                </div>
                                <div className="font-mono text-xs text-[#bd9b60] py-1 flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
                                    D<sub>KL</sub>(P||Q) = <span className="text-sm font-serif">∫</span><sub>ℝ</sub> p(x) log
                                    <div className="inline-flex flex-col items-center align-middle mx-0.5 text-[8px] leading-none">
                                        <span className="border-b border-[#f7f7f7]/40 px-0.5 pb-0.5">p(x)</span>
                                        <span className="px-0.5 pt-0.5">q(x)</span>
                                    </div>
                                    dx
                                </div>
                                <p className="text-[10px] text-[#f7f7f7]/80 font-sans leading-relaxed">
                                    Relative entropy measure quantifying the informational distance between model distribution P and data distribution Q.
                                </p>
                            </>
                        )}
                        {activeNode.id === "v3" && (
                            <>
                                <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2 pr-8">
                                    <span className="font-mono text-[9px] text-[#bd9b60] uppercase tracking-wider font-bold">03 // ATTENTION CORE</span>
                                    <span className="font-mono text-[8px] text-[#bd9b60]/50">TRANSFORMER</span>
                                </div>
                                <div className="font-mono text-xs text-[#bd9b60] py-1 flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
                                    Attention(Q,K,V) = softmax(
                                    <div className="inline-flex flex-col items-center align-middle mx-0.5 text-[8px] leading-none">
                                        <span className="border-b border-[#f7f7f7]/40 px-0.5 pb-0.5">Q K<sup>T</sup></span>
                                        <span className="px-0.5 pt-0.5">√d<sub>k</sub></span>
                                    </div>
                                    ) V
                                </div>
                                <p className="text-[10px] text-[#f7f7f7]/80 font-sans leading-relaxed">
                                    High-dimensional score projection mapping relative semantic importance inside transformer networks.
                                </p>
                            </>
                        )}
                        {activeNode.id === "v4" && (
                            <>
                                <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2 pr-8">
                                    <span className="font-mono text-[9px] text-[#bd9b60] uppercase tracking-wider font-bold">04 // RIEMANNIAN METRIC</span>
                                    <span className="font-mono text-[8px] text-[#bd9b60]/50">GEOMETRY</span>
                                </div>
                                <div className="font-mono text-xs text-[#bd9b60] py-1 break-all overflow-x-auto scrollbar-hide">
                                    ds² = ∑ g<sub>ij</sub> dx<sup>i</sup> dx<sup>j</sup>
                                </div>
                                <p className="text-[10px] text-[#f7f7f7]/80 font-sans leading-relaxed">
                                    Differential geometry metric defining distances on curved manifolds, central to computational geometry and manifold learning.
                                </p>
                            </>
                        )}
                        {activeNode.id === "center" && (
                            <>
                                <div className="flex items-center justify-between border-b border-[#bd9b60]/20 pb-2 pr-8">
                                    <span className="font-mono text-[9px] text-[#bd9b60] uppercase tracking-wider font-bold">00 // SINGULARITY POINT</span>
                                    <span className="font-mono text-[8px] text-[#bd9b60]/50">ORIGIN</span>
                                </div>
                                <div className="font-mono text-xs text-[#bd9b60] py-1 break-all overflow-x-auto scrollbar-hide">
                                    [ x₀, y₀ ] = [ 0.000, 0.000 ]
                                </div>
                                <p className="text-[10px] text-[#f7f7f7]/80 font-sans leading-relaxed">
                                    The mathematical origin of the coordinate space, serving as the central translation anchor of all vector transformations.
                                </p>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
