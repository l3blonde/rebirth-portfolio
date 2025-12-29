"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, Palette, Code2, Glasses, Linkedin, Mail } from "lucide-react"
import ContactModal from "./contact-modal"
import { Button } from "./button"

const skills = [
    {
        name: "AI/ML",
        icon: Brain,
    },
    {
        name: "UX/UI",
        icon: Palette,
    },
    {
        name: "Development",
        icon: Code2,
    },
    {
        name: "AR/VR",
        icon: Glasses,
    },
]

export default function SkillsSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <section id="skills" className="relative min-h-screen bg-[#2E2A2B] overflow-hidden overflow-x-hidden">
                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col px-4 sm:px-6 py-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f7f7f7] mb-8 tracking-wider break-words">
                        MY SKILLS
                    </h2>

                    <p className="text-[#f7f7f7]/90 font-sans text-base leading-relaxed mb-10 break-words">
                        I work across AI/ML, development and design, building for both the backend and the frontend. I shape
                        experiences through UX and UI, and explore AR and VR to create new ways of engaging with the digital world
                        using Python, Node.js, TypeScript, and modern frameworks.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#bd9b60] flex items-center justify-center mb-3 shadow-lg">
                                        <IconComponent className="w-9 h-9 text-[#2E2A2B]" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[#f7f7f7] font-sans text-sm">{skill.name}</span>
                                </motion.div>
                            )
                        })}
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

                    <div className="flex flex-col items-start gap-6">
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#f7f7f7] break-words">Interested?</h3>
                        <Button variant="secondary" onClick={() => setIsContactModalOpen(true)}>
                            Work With Me
                        </Button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-[55%_45%] min-h-screen">
                    <div className="flex flex-col justify-center px-12 lg:px-16 py-24">
                        <h2 className="text-6xl lg:text-7xl font-serif text-[#f7f7f7] mb-10 tracking-wider break-words">
                            MY SKILLS
                        </h2>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <p className="text-[#f7f7f7]/90 font-sans text-base lg:text-lg leading-relaxed break-words">
                                I work across AI/ML, development and design, building for the backend with Python and Node.js, and the
                                frontend with TypeScript and modern frameworks. I shape digital experiences through UX and UI, and
                                explore AR and VR using tools like Next.js, Three.js and Blender to bring ideas to life.
                            </p>
                            <p className="text-[#f7f7f7]/90 font-sans text-base lg:text-lg leading-relaxed break-words">
                                I work with Figma for design systems, Adobe Suite (Photoshop, Illustrator, Premiere Pro) for creative
                                work, and Canva for rapid prototyping. My practice is grounded in clarity, curiosity and thoughtful
                                craft. I aim to make digital work feel simple, human and meaningful.
                            </p>
                        </div>

                        <div className="flex gap-8 mb-16">
                            {skills.map((skill, index) => {
                                const IconComponent = skill.icon
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-[#bd9b60] flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform">
                                            <IconComponent className="w-11 h-11 text-[#2E2A2B]" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-[#f7f7f7] font-sans text-base">{skill.name}</span>
                                    </motion.div>
                                )
                            })}
                        </div>

                        <div className="flex items-center gap-8">
                            <h3 className="text-4xl font-serif text-[#f7f7f7] break-words">Interested?</h3>
                            <Button variant="secondary" onClick={() => setIsContactModalOpen(true)}>
                                Work With Me
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
                    <p className="text-[#f7f7f7]/70 font-sans text-sm">© 2025 Rebirth Studio. All rights reserved.</p>
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
