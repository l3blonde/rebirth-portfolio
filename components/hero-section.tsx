"use client"

import Button from "./button"
import Link from "next/link"
import ClayGridCanvas from "./clay-grid-canvas"

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden overflow-x-hidden bg-[#2E2A2B] flex items-center">
            {/* Interactive Clay Voxel Grid Backdrop */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 h-full z-0 opacity-80 pointer-events-auto">
                <ClayGridCanvas />
            </div>

            <div className="relative z-10 flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 w-full max-w-7xl mx-auto pt-[93px]">
                <div className="max-w-full md:max-w-[55%]">
                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl text-[#f7f7f7] mb-6 leading-tight max-w-full break-words">
                        Designing Intelligent Systems
                    </h1>
                    <p className="text-[#f7f7f7]/90 font-sans text-base lg:text-lg leading-relaxed max-w-full mb-8 break-words">
                        I investigate how mathematics, machine learning, and software engineering can be synthesised to build intelligent, human-centred systems. My work focuses on computational geometry, recommendation algorithms, computer vision, and scalable software architectures.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/cv">
                            <Button variant="secondary">View CV</Button>
                        </Link>
                        <a href="https://github.com/l3blonde" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">GitHub</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
