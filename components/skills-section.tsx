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
                    <h2 className="text-4xl sm:text-5xl font-serif text-[#f7f7f7] mb-8 tracking-wider break-words">
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

                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-10 shadow-2xl">
                        <Image
                            src="/images/profile-photo.jpg"
                            alt="Professional portrait"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 45vw"
                        />
                    </div>

                    <div className="flex flex-col items-start pt-4">
                        <Button variant="secondary" onClick={() => setIsContactModalOpen(true)}>
                            Collaborate
                        </Button>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[55%_45%] min-h-screen">
                    <div className="flex flex-col justify-center px-12 lg:px-16 py-24">
                        <h2 className="text-6xl lg:text-7xl font-serif text-[#f7f7f7] mb-10 tracking-wider break-words">
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
                                Collaborate
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="/images/profile-photo.jpg"
                            alt="Professional portrait"
                            fill
                            className="object-cover"
                            sizes="45vw"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2E2A2B] border-t border-[#bd9b60]/20 px-4 sm:px-6 md:px-12 lg:px-16 py-8 overflow-x-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#f7f7f7]/70 font-sans text-sm">© 2026 Marianne — Rebirth</p>
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
