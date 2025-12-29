"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactModal from "@/components/contact-modal"
import { useState } from "react"

export default function Home() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <Header />

            <main className="min-h-screen overflow-x-hidden max-w-full">
                <HeroSection />

                <AboutSection />

                <ProjectsSection />

                <SkillsSection />
            </main>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    )
}
