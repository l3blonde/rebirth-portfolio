"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, Palette, Code2, Glasses, Linkedin, Mail } from "lucide-react"
import ContactModal from "./contact-modal"
import { Button } from "./button"

const domains = [
    { name: "Artificial Intelligence", percentage: 80 },
    { name: "Machine Learning", percentage: 70 },
    { name: "Software Systems", percentage: 80 },
    { name: "Linear Algebra", percentage: 60 },
    { name: "Computational Geometry", percentage: 70 },
    { name: "Human-Centred Interaction", percentage: 80 },
]

export default function SkillsSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <section id="skills" className="relative min-h-screen bg-[#2E2A2B] overflow-hidden overflow-x-hidden">
                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col px-4 sm:px-6 py-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wider text-[#f7f7f7] mb-8 break-words">
                        RESEARCH DOMAINS
                    </h2>

                    <p className="text-[#f7f7f7]/90 font-sans text-base leading-relaxed mb-10 break-words">
                        I investigate how computer science, machine learning, and mathematics can be synthesised to build intelligent, human-centred systems. My research spans convolutional networks, high-dimensional vector spaces, WebGL graphics, and adaptive user state machines.
                    </p>

                    <div className="space-y-4 mb-10">
                        {domains.map((domain, index) => (
                            <div key={domain.name} className="space-y-1">
                                <div className="flex justify-between text-xs font-mono text-[#f7f7f7]">
                                    <span>{domain.name}</span>
                                    <span className="text-[#bd9b60]">{domain.percentage}%</span>
                                </div>
                                <div className="h-1 w-full bg-[#f7f7f7]/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${domain.percentage}%` }}
                                        transition={{ delay: index * 0.05, duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-[#bd9b60]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col items-center mb-10 relative">
                        <div className="w-[280px] sm:w-[320px] flex items-start justify-between mb-6 relative">
                            <h2 className="text-[32px] sm:text-[42px] font-serif font-normal text-[#f7f7f7] leading-[1.1] tracking-wider sm:tracking-[0.2em] break-words">
                                BEHIND
                            </h2>
                            <span className="absolute top-0 right-[20px] text-[18px] sm:text-[24px] font-serif italic font-light text-[#f7f7f7]/80">
                                the
                            </span>
                        </div>

                        <div className="w-full flex items-start justify-center gap-3 sm:gap-6 mb-4 relative">
                            <div className="relative w-[180px] sm:w-[240px] h-[300px] sm:h-[400px] flex-shrink-0">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        borderRadius: "100px 100px 0 0",
                                        border: "3px solid #bd9b60",
                                    }}
                                />
                                <div
                                    className="absolute inset-[3px]"
                                    style={{
                                        borderRadius: "97px 97px 0 0",
                                        overflow: "hidden",
                                    }}
                                >
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                        <source src="/images/workspace.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-start gap-2.5 sm:gap-4 pt-3">
                                {["S", "C", "E", "N", "E", "S"].map((letter, i) => (
                                    <span
                                        key={i}
                                        className="text-[32px] sm:text-[44px] font-serif font-normal text-[#f7f7f7] leading-none block"
                                        style={{ letterSpacing: "0.05em" }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start pt-4">
                        <Button variant="secondary" onClick={() => setIsContactModalOpen(true)}>
                            Get in Touch
                        </Button>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[55%_45%] min-h-screen">
                    <div className="flex flex-col justify-center px-12 lg:px-16 py-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wider text-[#f7f7f7] mb-10 break-words">
                            RESEARCH DOMAINS
                        </h2>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <p className="text-[#f7f7f7]/90 font-sans text-base lg:text-lg leading-relaxed break-words">
                                I investigate how computer science, machine learning, and mathematics can be synthesised to build intelligent, human-centred systems. My research spans convolutional networks, high-dimensional vector spaces, WebGL graphics, and adaptive user state machines.
                            </p>
                            <p className="text-[#f7f7f7]/90 font-sans text-base lg:text-lg leading-relaxed break-words">
                                I explore the intersection of theory and application using Python, TypeScript, PyTorch, and Next.js. My academic trajectory is focused on constructing software architectures grounded in mathematical reasoning and computational geometry.
                            </p>
                        </div>

                        <div className="space-y-4 mb-16 max-w-xl">
                            {domains.map((domain, index) => (
                                <div key={domain.name} className="space-y-1.5">
                                    <div className="flex justify-between text-base font-mono text-[#f7f7f7]">
                                        <span>{domain.name}</span>
                                        <span className="text-[#bd9b60]">{domain.percentage}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-[#f7f7f7]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${domain.percentage}%` }}
                                            transition={{ delay: index * 0.05, duration: 1, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-[#bd9b60]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center">
                            <Button variant="secondary" onClick={() => setIsContactModalOpen(true)}>
                                Get in Touch
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-[#2E2A2B] py-20 px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="w-full flex items-start justify-between mb-6 lg:mb-8 relative pr-6">
                                <h2 className="text-[52px] md:text-[60px] lg:text-[80px] font-serif font-normal text-[#f7f7f7] leading-[1.1] tracking-wider lg:tracking-[0.2em] break-words">
                                    BEHIND
                                </h2>
                                <span className="absolute top-0 right-[-10px] lg:right-[-20px] text-[28px] lg:text-[36px] font-serif italic font-light text-[#f7f7f7]/80">
                                    the
                                </span>
                            </div>

                            <div className="flex items-start gap-6 lg:gap-8">
                                <div className="relative w-[240px] h-[400px] lg:w-[280px] lg:h-[480px] flex-shrink-0">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            borderRadius: "160px 160px 0 0",
                                            border: "4px solid #bd9b60",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-[4px]"
                                        style={{
                                            borderRadius: "156px 156px 0 0",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                            <source src="/images/workspace.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-start gap-3 lg:gap-4 h-[400px] lg:h-[480px] pt-4">
                                    {["S", "C", "E", "N", "E", "S"].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.08, duration: 0.4 }}
                                            viewport={{ once: true }}
                                            className="text-[44px] lg:text-[56px] font-serif font-normal text-[#f7f7f7] leading-none block"
                                            style={{ letterSpacing: "0.05em" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2E2A2B] border-t border-[#bd9b60]/20 px-4 sm:px-6 md:px-12 lg:px-16 py-8 overflow-x-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#f7f7f7]/70 font-sans text-sm">© 2026 Rebirth Systems</p>
                    <div className="flex gap-6">
                        <a
                            href="https://www.linkedin.com/in/marianne-legrelle-520914146/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#f7f7f7]/70 hover:text-[#bd9b60] transition-colors font-sans text-sm"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <a
                            href="mailto:marilegrelle@gmail.com"
                            className="flex items-center gap-2 text-[#f7f7f7]/70 hover:text-[#bd9b60] transition-colors font-sans text-sm"
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </a>
                    </div>
                </div>
            </footer>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    )
}
