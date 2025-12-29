"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ContactModal from "./contact-modal"
import { Button } from "./button"

export default function AboutSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <section
                id="about"
                className="min-h-screen bg-sandy-white py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 overflow-x-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Desktop/Tablet Layout - LEFT: Arch with decorative text | RIGHT: Bio content */}
                    <div className="hidden md:grid md:grid-cols-[auto_1fr] md:gap-16 lg:gap-24">
                        {/* LEFT COLUMN: Decorative arch frame */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative flex flex-col items-start"
                        >
                            <div className="w-full flex items-start justify-between mb-6 lg:mb-8 relative">
                                <h2 className="text-[52px] md:text-[60px] lg:text-[80px] font-serif font-normal text-volcanic-ash leading-[1.1] tracking-wider lg:tracking-[0.2em] break-words">
                                    BEHIND
                                </h2>
                                <span className="absolute top-0 right-[-20px] lg:right-[-40px] text-[28px] lg:text-[36px] font-serif italic font-light text-volcanic-ash opacity-80">
                  the
                </span>
                            </div>

                            {/* Arch with vertical SCENES */}
                            <div className="flex items-start gap-6 lg:gap-8">
                                {/* Video arch frame */}
                                <div className="relative w-[280px] h-[480px] lg:w-[340px] lg:h-[560px] flex-shrink-0">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            borderRadius: "200px 200px 0 0",
                                            border: "4px solid #BD9B60",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-[4px]"
                                        style={{
                                            borderRadius: "196px 196px 0 0",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                            <source src="/images/workspace.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-start gap-5 lg:gap-6 h-[480px] lg:h-[560px]">
                                    {["S", "C", "E", "N", "E", "S"].map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className="text-[56px] lg:text-[72px] font-serif font-normal text-volcanic-ash leading-none block"
                                            style={{ letterSpacing: "0.05em" }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: Bio content */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col justify-center max-w-xl space-y-6 lg:space-y-8"
                        >
                            <h3 className="text-3xl lg:text-4xl font-serif font-semibold text-volcanic-ash break-words">
                                Hi, I am Marianne ! :)
                            </h3>

                            <div className="space-y-4 lg:space-y-5 text-volcanic-ash font-sans text-base lg:text-lg leading-relaxed break-words">
                                <p>Today, I study at Thomas More in the Bachelor of Digital Product Architect.</p>
                                <p>Previously, I worked in blockchain and fintech at Kin, a Canadian messaging app.</p>
                                <p>Beyond my current role, I am building a startup at the intersection of AI and creativity.</p>
                                <p>You can reach me through the form below.</p>
                            </div>

                            <div className="pt-2">
                                <Button variant="primary" onClick={() => setIsContactModalOpen(true)}>
                                    Work with me
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col items-center overflow-x-hidden">
                        <div className="w-full flex items-start justify-between mb-8 relative px-2">
                            <h2 className="text-[32px] sm:text-[42px] font-serif font-normal text-volcanic-ash leading-[1.1] tracking-wider sm:tracking-[0.2em] break-words">
                                BEHIND
                            </h2>
                        </div>

                        <div className="w-full flex items-start justify-center gap-3 sm:gap-6 mb-12 relative px-2">
                            {/* Wider arch frame */}
                            <div className="relative w-[200px] sm:w-[280px] h-[360px] sm:h-[480px] flex-shrink-0">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        borderRadius: "120px 120px 0 0",
                                        border: "3px solid #BD9B60",
                                    }}
                                />
                                <div
                                    className="absolute inset-[3px]"
                                    style={{
                                        borderRadius: "117px 117px 0 0",
                                        overflow: "hidden",
                                    }}
                                >
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                        <source src="/images/workspace.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* SCENES with "the" positioned above like "MADE BY CIRCULAR" */}
                            <div className="flex flex-col items-center justify-start h-[360px] sm:h-[480px] relative">
                <span className="absolute -top-8 right-0 text-[16px] sm:text-[20px] font-serif italic font-light text-volcanic-ash opacity-80 uppercase tracking-wide">
                  the
                </span>
                                <div className="flex flex-col items-center justify-start gap-3 sm:gap-4 pt-4">
                                    {["S", "C", "E", "N", "E", "S"].map((letter, i) => (
                                        <span
                                            key={i}
                                            className="text-[40px] sm:text-[52px] font-serif font-normal text-volcanic-ash leading-none block"
                                            style={{ letterSpacing: "0.05em" }}
                                        >
                      {letter}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom: Bio */}
                        <div className="w-full space-y-5 px-2">
                            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-volcanic-ash break-words">
                                Hi, I am Marianne ! :)
                            </h3>

                            <div className="space-y-3 text-volcanic-ash font-sans text-sm leading-relaxed break-words">
                                <p>Today, I study at Thomas More in the Bachelor of Digital Product Architect.</p>
                                <p>Previously, I worked in blockchain and fintech at Kin, a Canadian messaging app.</p>
                                <p>Beyond my current role, I am building a startup at the intersection of AI and creativity.</p>
                                <p>You can reach me through the form below.</p>
                            </div>

                            <div className="pt-2">
                                <Button variant="primary" onClick={() => setIsContactModalOpen(true)}>
                                    Work with me
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    )
}
