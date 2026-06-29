"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpen, Award, ArrowUpRight } from "lucide-react"
import Button from "./button"
import ContactModal from "./contact-modal"

export default function AboutSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <>
            <section id="about" className="relative py-16 md:py-24 bg-[#E5D4B8] overflow-hidden overflow-x-hidden">
                <div className="max-w-[100vw] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
                    {/* Core Profile Grid */}
                    <div className="max-w-7xl mx-auto grid md:grid-cols-[40%_60%] gap-12 items-stretch">
                        {/* Profile Image Column: Floating transparent cutout with custom silhouette drop-shadow and formulas */}
                        <div className="relative min-h-[350px] md:min-h-[450px] h-full w-full flex items-center justify-center group overflow-visible">
                            {/* Floating Charcoal Formula Annotations (Kinetic drift on hover) */}
                            <div className="absolute inset-0 select-none pointer-events-none z-0 overflow-visible">
                                {/* Formula 1: Gradient (Moves Inward/Down-Right) */}
                                <motion.div 
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                    className="absolute top-4 left-0 md:-left-6 font-serif italic text-xs md:text-sm font-bold text-volcanic-ash/55 transition-all duration-500 group-hover:text-volcanic-ash/90 group-hover:scale-110 group-hover:translate-x-8 group-hover:translate-y-8"
                                >
                                    ∇ L(θ) = 0
                                </motion.div>

                                {/* Formula 2: Euler (Moves Inward/Down-Left) */}
                                <motion.div 
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-12 right-0 md:-right-6 font-mono text-[10px] md:text-xs font-bold text-volcanic-ash/55 transition-all duration-500 group-hover:text-volcanic-ash/90 group-hover:scale-110 group-hover:-translate-x-8 group-hover:translate-y-8"
                                >
                                    V - E + F = 2
                                </motion.div>

                                {/* Formula 3: Inner Product (Moves Inward/Up-Right) */}
                                <motion.div 
                                    animate={{ x: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                                    className="absolute bottom-24 left-0 md:-left-6 font-serif italic text-xs md:text-sm font-bold text-volcanic-ash/55 transition-all duration-500 group-hover:text-volcanic-ash/90 group-hover:scale-110 group-hover:translate-x-8 group-hover:-translate-y-8"
                                >
                                    ⟨u, v⟩ ∈ ℝ<sup>d</sup>
                                </motion.div>

                                {/* Formula 4: Manifold (Moves Inward/Up-Left) */}
                                <motion.div 
                                    animate={{ x: [0, 6, 0] }}
                                    transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 3 }}
                                    className="absolute bottom-20 right-0 md:-right-6 font-mono text-[9px] md:text-[10px] font-bold text-volcanic-ash/55 transition-all duration-500 group-hover:text-volcanic-ash/90 group-hover:scale-110 group-hover:-translate-x-8 group-hover:-translate-y-8"
                                >
                                    f: ℳ → ℝ<sup>2</sup>
                                </motion.div>

                                {/* Abstract hand-drawn coordinate axis behind the portrait (linearly expands and brightens on hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] scale-[0.88] group-hover:scale-[1.18] group-hover:opacity-[0.48] transition-all duration-[850ms] ease-out transform transform-gpu z-0 pointer-events-none">
                                    <svg viewBox="0 0 200 200" className="w-full h-full text-volcanic-ash">
                                        <defs>
                                            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" />
                                            </marker>
                                        </defs>
                                        
                                        {/* Faint grid mesh behind the main axes */}
                                        <g className="opacity-30 stroke-current" strokeWidth="0.5" strokeDasharray="2,4">
                                            <line x1="30" y1="0" x2="30" y2="200" />
                                            <line x1="65" y1="0" x2="65" y2="200" />
                                            <line x1="135" y1="0" x2="135" y2="200" />
                                            <line x1="170" y1="0" x2="170" y2="200" />
                                            
                                            <line x1="0" y1="30" x2="200" y2="30" />
                                            <line x1="0" y1="65" x2="200" y2="65" />
                                            <line x1="0" y1="135" x2="200" y2="135" />
                                            <line x1="0" y1="170" x2="200" y2="170" />
                                        </g>

                                        {/* Primary Cartesian X and Y axes with Arrow Markers */}
                                        <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
                                        <line x1="100" y1="185" x2="100" y2="15" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />

                                        {/* Ticks on X axis */}
                                        <line x1="30" y1="96" x2="30" y2="104" stroke="currentColor" strokeWidth="1.2" />
                                        <line x1="65" y1="96" x2="65" y2="104" stroke="currentColor" strokeWidth="1.2" />
                                        <line x1="135" y1="96" x2="135" y2="104" stroke="currentColor" strokeWidth="1.2" />
                                        <line x1="170" y1="96" x2="170" y2="104" stroke="currentColor" strokeWidth="1.2" />

                                        {/* Ticks on Y axis */}
                                        <line x1="96" y1="30" x2="104" y2="30" stroke="currentColor" strokeWidth="1.2" />
                                        <line x1="96" y1="65" x2="104" y2="65" stroke="currentColor" strokeWidth="1.2" />
                                        <line x1="96" y1="135" x2="104" y2="135" stroke="currentColor" strokeWidth="1.2" />
                                        <line x1="96" y1="170" x2="104" y2="170" stroke="currentColor" strokeWidth="1.2" />

                                        {/* Origin Dot & Text */}
                                        <circle cx="100" cy="100" r="3.5" fill="currentColor" />
                                        <text x="106" y="114" fill="currentColor" fontSize="9" fontFamily="monospace" fontWeight="bold">(0,0)</text>

                                        {/* Axis Label Tags */}
                                        <text x="188" y="96" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold">x</text>
                                        <text x="106" y="12" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold">y</text>
                                    </svg>
                                </div>
                            </div>

                            {/* Transparent Cutout Portrait with custom drop shadow and scale transition */}
                            <div className="relative w-full h-full flex items-center justify-center z-10 filter drop-shadow-[0_20px_35px_rgba(46,42,43,0.3)] transition-all duration-500 group-hover:scale-[1.08] group-hover:-translate-y-3">
                                <Image
                                    src="/images/profile-photo-v2-transparent.png"
                                    alt="Marianne L.-P. Portrait"
                                    fill
                                    className="object-contain grayscale-[100%] contrast-[1.08] brightness-[0.92] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Bio Text Column */}
                        <div className="flex flex-col justify-center gap-6 pr-2 md:pr-10 lg:pr-16">
                            <div className="space-y-2">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-volcanic-ash mb-2 font-normal leading-tight">
                                    Academic Background & Goals
                                </h2>
                                <div className="h-[2px] w-16 bg-volcanic-ash/30 mt-2"></div>
                            </div>

                            {/* Wrapped in a beautiful division with left padding and a notebook margin line */}
                            <div className="space-y-4 text-volcanic-ash font-sans text-sm leading-relaxed break-words pl-4 sm:pl-6 border-l border-volcanic-ash/20">
                                <p>I currently study Digital Product Architecture at Thomas More, focusing on the intersection of software engineering, UX systems, and emerging technologies. My academic journey is driven by a desire to understand not just how systems look, but how they perform, scale, and interact with complex human behaviours.</p>
                                <p>Previously, I worked in fintech and blockchain integration at Kin, a Canadian messaging platform. This role exposed me to real-world distributed systems, performance optimization, and scalable API design in production environments.</p>
                                <p>I am transitioning towards formal academic research in Computer Science and Artificial Intelligence, with active interests in Machine Learning systems, Human-Computer Interaction (HCI), Computational Geometry, and Intelligent Decision Systems.</p>
                            </div>

                            <div className="pt-2">
                                <Button variant="primary" onClick={() => setIsContactModalOpen(true)}>
                                    Discuss Research
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Computational Learning Log */}
                    <div id="learning-log" className="mt-20 pt-16 border-t border-volcanic-ash/10">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wider text-volcanic-ash mb-6 uppercase">
                            COMPUTATIONAL<br />LEARNING LOG
                        </h3>
                        <p className="text-volcanic-ash/90 font-sans text-base lg:text-lg leading-relaxed max-w-3xl mb-12">
                            The Computational Learning Log documents my active exploration of computer science fundamentals, mathematical foundations, and system architectures. It serves as an academic record of self-directed research, progression, and practical insights gained during my studies.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {/* Card 1: Linear Algebra */}
                            <motion.div 
                                onMouseEnter={() => setHoveredCard(0)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                className="relative bg-[#fcfbfa] hover:bg-white border border-volcanic-ash/10 hover:border-volcanic-ash/45 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-[0_22px_40px_-8px_rgba(46,42,43,0.18)] border-l-4 border-l-volcanic-ash/30 hover:border-l-volcanic-ash flex flex-col justify-between overflow-hidden group min-h-[460px] cursor-pointer transition-all duration-300"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(46, 42, 43, 0.04) 1px, transparent 1px), 
                                        linear-gradient(90deg, rgba(46, 42, 43, 0.04) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "20px 20px"
                                }}
                            >
                                <div>
                                    <span className="font-mono text-[10px] text-volcanic-ash/60 uppercase tracking-wider block mb-2 font-bold">01 // LINEAR ALGEBRA</span>
                                    <h4 className="font-serif text-lg font-bold text-volcanic-ash mb-2 leading-tight">Vector Spaces & Embeddings</h4>
                                    
                                    {/* Handwritten scribble equation */}
                                    <span className="font-serif italic font-light text-[13px] tracking-wide text-volcanic-ash/75 block my-5">
                                        u · v = ∑ u<sub>i</sub> v<sub>i</sub> = ||u|| ||v|| cos θ
                                    </span>

                                    <p className="text-xs font-sans text-volcanic-ash/80 leading-relaxed mb-4">
                                        Exploring high-dimensional vector representations, inner product spaces, and coordinate projections that form the spatial architecture of user recommendation models.
                                    </p>
                                </div>

                                {/* Graph + Formula Label Container (Grayscale, Spaced, Closer to Text) */}
                                <div className="w-full mt-2 flex flex-col items-center">
                                    <div className="w-full h-34">
                                        <svg viewBox="0 0 160 65" className="w-full h-full text-volcanic-ash/35 group-hover:text-[#1A1818] transition-colors duration-300">
                                            {/* Baseline */}
                                            <line x1="10" y1="52" x2="150" y2="52" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3,3" />
                                            {/* Rotating vector */}
                                            <motion.g
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: hoveredCard === 0 ? 4 : 12, ease: "linear" }}
                                                style={{ transformOrigin: "40px 52px" }}
                                            >
                                                <line x1="40" y1="52" x2="95" y2="52" stroke="currentColor" strokeWidth="4.8" />
                                                <polygon points="95,48 102,52 95,56" fill="currentColor" />
                                            </motion.g>
                                            <motion.circle
                                                animate={{ r: [4.0, 7.5, 4.0], opacity: [0.6, 1, 0.6] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                cx="40"
                                                cy="52"
                                                r="5.0"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    {/* Monospace Formula Label directly under the graph */}
                                    <div className="mt-3 font-mono text-[9px] text-volcanic-ash/50 group-hover:text-volcanic-ash/85 tracking-widest uppercase transition-colors duration-300">
                                        ⟨u, v⟩ ∈ ℝ
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Calculus */}
                            <motion.div 
                                onMouseEnter={() => setHoveredCard(1)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                className="relative bg-[#fcfbfa] hover:bg-white border border-volcanic-ash/10 hover:border-volcanic-ash/45 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-[0_22px_40px_-8px_rgba(46,42,43,0.18)] border-l-4 border-l-volcanic-ash/30 hover:border-l-volcanic-ash flex flex-col justify-between overflow-hidden group min-h-[460px] cursor-pointer transition-all duration-300"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(46, 42, 43, 0.04) 1px, transparent 1px), 
                                        linear-gradient(90deg, rgba(46, 42, 43, 0.04) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "20px 20px"
                                }}
                            >
                                <div>
                                    <span className="font-mono text-[10px] text-volcanic-ash/60 uppercase tracking-wider block mb-2 font-bold">02 // CALCULUS & OPTIMIZATION</span>
                                    <h4 className="font-serif text-lg font-bold text-volcanic-ash mb-2 leading-tight">Stochastic Gradients & Descent</h4>
                                    
                                    {/* Handwritten scribble equation */}
                                    <span className="font-serif italic font-light text-[13px] tracking-wide text-volcanic-ash/75 block my-5">
                                        θ<sub>t+1</sub> = θ<sub>t</sub> - η ∇<sub>θ</sub> L(θ<sub>t</sub>)
                                    </span>

                                    <p className="text-xs font-sans text-volcanic-ash/80 leading-relaxed mb-4">
                                        Analyzing gradient fields, Hessian structures, and stochastic processes to optimize neural network cost manifolds through backpropagation systems.
                                    </p>
                                </div>

                                {/* Graph + Formula Label Container (Grayscale, Spaced, Closer to Text) */}
                                <div className="w-full mt-2 flex flex-col items-center">
                                    <div className="w-full h-34">
                                        <svg viewBox="0 0 160 65" className="w-full h-full text-volcanic-ash/35 group-hover:text-[#1A1818] transition-colors duration-300">
                                            <path d="M 20 48 Q 80 8 140 48" fill="none" stroke="currentColor" strokeWidth="3.5" strokeDasharray="3,3" />
                                            <path d="M 20 48 Q 80 8 140 48" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                            {/* Sliding Optimizer ball */}
                                            <motion.circle
                                                animate={{
                                                    cx: [20, 80, 140, 80, 20],
                                                    cy: [48, 18, 48, 18, 48]
                                                }}
                                                transition={{ repeat: Infinity, duration: hoveredCard === 1 ? 2.2 : 6, ease: "easeInOut" }}
                                                r="9.0"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    {/* Monospace Formula Label directly under the graph */}
                                    <div className="mt-3 font-mono text-[9px] text-volcanic-ash/50 group-hover:text-volcanic-ash/85 tracking-widest uppercase transition-colors duration-300">
                                        x* = argmin f(x)
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Probability */}
                            <motion.div 
                                onMouseEnter={() => setHoveredCard(2)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                className="relative bg-[#fcfbfa] hover:bg-white border border-volcanic-ash/10 hover:border-volcanic-ash/45 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-[0_22px_40px_-8px_rgba(46,42,43,0.18)] border-l-4 border-l-volcanic-ash/30 hover:border-l-volcanic-ash flex flex-col justify-between overflow-hidden group min-h-[460px] cursor-pointer transition-all duration-300"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(46, 42, 43, 0.04) 1px, transparent 1px), 
                                        linear-gradient(90deg, rgba(46, 42, 43, 0.04) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "20px 20px"
                                }}
                            >
                                <div>
                                    <span className="font-mono text-[10px] text-volcanic-ash/60 uppercase tracking-wider block mb-2 font-bold">03 // PROBABILITY & STATS</span>
                                    <h4 className="font-serif text-lg font-bold text-volcanic-ash mb-2 leading-tight">Entropy & Divergence Geometry</h4>
                                    
                                    {/* Handwritten scribble equation */}
                                    <span className="font-serif italic font-light text-[12px] tracking-wide text-volcanic-ash/75 block my-5 flex items-center leading-none">
                                        D<sub>KL</sub>(P || Q) = ∫<sub>ℝ</sub> p(x) log(p(x)/q(x)) dx
                                    </span>

                                    <p className="text-xs font-sans text-volcanic-ash/80 leading-relaxed mb-4">
                                        Studying information theoretic distances, probability distributions, and Kullback-Leibler measures to align model likelihood representations with real data.
                                    </p>
                                </div>

                                {/* Graph + Formula Label Container (Grayscale, Spaced, Closer to Text) */}
                                <div className="w-full mt-2 flex flex-col items-center">
                                    <div className="w-full h-34">
                                        <svg viewBox="0 0 160 65" className="w-full h-full text-volcanic-ash/35 group-hover:text-[#1A1818] transition-colors duration-300">
                                            <path d="M 10 52 Q 50 52 80 12 T 150 52" fill="none" stroke="currentColor" strokeWidth="2.0" opacity="0.3" />
                                            <motion.path
                                                animate={{
                                                    d: [
                                                        "M 10 52 Q 35 52 65 12 T 150 52", 
                                                        "M 10 52 Q 50 52 80 12 T 150 52", 
                                                        "M 10 52 Q 65 52 95 12 T 150 52", 
                                                        "M 10 52 Q 50 52 80 12 T 150 52"
                                                    ]
                                                }}
                                                transition={{ repeat: Infinity, duration: hoveredCard === 2 ? 2.2 : 6, ease: "easeInOut" }}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="4.5"
                                            />
                                        </svg>
                                    </div>
                                    {/* Monospace Formula Label directly under the graph */}
                                    <div className="mt-3 font-mono text-[9px] text-volcanic-ash/50 group-hover:text-volcanic-ash/85 tracking-widest uppercase transition-colors duration-300">
                                        D_KL(P || Q) → 0
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 4: Discrete Math */}
                            <motion.div 
                                onMouseEnter={() => setHoveredCard(3)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                className="relative bg-[#fcfbfa] hover:bg-white border border-volcanic-ash/10 hover:border-volcanic-ash/45 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-[0_22px_40px_-8px_rgba(46,42,43,0.18)] border-l-4 border-l-volcanic-ash/30 hover:border-l-volcanic-ash flex flex-col justify-between overflow-hidden group min-h-[460px] cursor-pointer transition-all duration-300"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(46, 42, 43, 0.04) 1px, transparent 1px), 
                                        linear-gradient(90deg, rgba(46, 42, 43, 0.04) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "20px 20px"
                                }}
                            >
                                <div>
                                    <span className="font-mono text-[10px] text-volcanic-ash/60 uppercase tracking-wider block mb-2 font-bold">04 // DISCRETE MATHEMATICS</span>
                                    <h4 className="font-serif text-lg font-bold text-volcanic-ash mb-2 leading-tight">Graph Structures & Networks</h4>
                                    
                                    {/* Handwritten scribble equation */}
                                    <span className="font-serif italic font-light text-[13px] tracking-wide text-volcanic-ash/75 block my-5">
                                        G = (V, E) &nbsp;⟹&nbsp; A ∈ ℝ<sup>|V| × |V|</sup>
                                    </span>

                                    <p className="text-xs font-sans text-volcanic-ash/80 leading-relaxed mb-4">
                                        Modeling relational architectures using topological networks, adjacency matrices, and connectivity trees to study message passing in graph neural systems.
                                    </p>
                                </div>

                                {/* Graph + Formula Label Container (Grayscale, Spaced, Closer to Text) */}
                                <div className="w-full mt-2 flex flex-col items-center">
                                    <div className="w-full h-34">
                                        <svg viewBox="0 0 160 65" className="w-full h-full text-volcanic-ash/35 group-hover:text-[#1A1818] transition-colors duration-300">
                                            <line x1="30" y1="32.5" x2="80" y2="15" stroke="currentColor" strokeWidth="2.8" />
                                            <line x1="30" y1="32.5" x2="80" y2="50" stroke="currentColor" strokeWidth="2.8" />
                                            <line x1="80" y1="15" x2="130" y2="32.5" stroke="currentColor" strokeWidth="2.8" />
                                            <line x1="80" y1="50" x2="130" y2="32.5" stroke="currentColor" strokeWidth="2.8" />
                                            <line x1="80" y1="15" x2="80" y2="50" stroke="currentColor" strokeWidth="2.8" />

                                            <motion.circle cx="30" cy="32.5" r="9.0" fill="currentColor" opacity="0.6" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: hoveredCard === 3 ? 1.2 : 3, delay: 0 }} />
                                            <motion.circle cx="80" cy="15" r="9.0" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: hoveredCard === 3 ? 1.2 : 3, delay: hoveredCard === 3 ? 0.24 : 0.6 }} />
                                            <motion.circle cx="80" cy="50" r="9.0" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: hoveredCard === 3 ? 1.2 : 3, delay: hoveredCard === 3 ? 0.48 : 1.2 }} />
                                            <motion.circle cx="130" cy="32.5" r="9.0" fill="currentColor" opacity="0.6" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: hoveredCard === 3 ? 1.2 : 3, delay: hoveredCard === 3 ? 0.72 : 1.8 }} />
                                        </svg>
                                    </div>
                                    {/* Monospace Formula Label directly under the graph */}
                                    <div className="mt-3 font-mono text-[9px] text-volcanic-ash/50 group-hover:text-volcanic-ash/85 tracking-widest uppercase transition-colors duration-300">
                                        G = (V, E)
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    )
}
