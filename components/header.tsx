"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import ContactModal from "./contact-modal"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "about", "projects", "skills"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMobileMenuOpen(false)
    }

    const openContactModal = () => {
        setIsContactModalOpen(true)
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            {/* Desktop & Mobile Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-dune-gold">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-[26px] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center justify-center w-auto h-6 md:h-10">
                        <Image
                            src="/logo-rebirth.svg"
                            alt="Rebirth Studio"
                            width={120}
                            height={33}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-lg text-volcanic-ash hover:opacity-70 transition-opacity"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-lg text-volcanic-ash hover:opacity-70 transition-opacity"
                        >
                            Projects
                        </button>
                        <button
                            onClick={openContactModal}
                            className="text-lg text-volcanic-ash hover:opacity-70 transition-opacity"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button - 4 Squares */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex items-center justify-center w-8 h-8 p-[5px]"
                        aria-label="Toggle menu"
                    >
                        <div className="grid grid-cols-2 gap-[3px] w-full h-full">
                            <div
                                className={`rounded-[2px] transition-colors ${
                                    activeSection === "about" ? "bg-volcanic-ash" : "bg-sandy-white"
                                }`}
                            ></div>
                            <div
                                className={`rounded-[2px] transition-colors ${
                                    activeSection === "projects" ? "bg-volcanic-ash" : "bg-sandy-white"
                                }`}
                            ></div>
                            <div
                                className={`rounded-[2px] transition-colors ${
                                    activeSection === "skills" ? "bg-volcanic-ash" : "bg-sandy-white"
                                }`}
                            ></div>
                            <div
                                className={`rounded-[2px] transition-colors ${
                                    activeSection === "hero" ? "bg-volcanic-ash" : "bg-sandy-white"
                                }`}
                            ></div>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Modal */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-40 md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute inset-0 bg-volcanic-ash/80 backdrop-blur-sm"
                        ></motion.div>

                        {/* Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-x-4 top-24 bg-sandy-white rounded-[12px] p-8 shadow-2xl"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "About", section: "about" },
                                    { label: "Projects", section: "projects" },
                                    { label: "Skills", section: "skills" },
                                ].map((item, index) => (
                                    <motion.button
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection(item.section)}
                                        className={`h-32 rounded-[8px] text-xl font-sans transition-colors ${
                                            activeSection === item.section
                                                ? "bg-dune-gold text-volcanic-ash"
                                                : "bg-sea-salt text-volcanic-ash hover:bg-dune-gold/50"
                                        }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                                {/* Contact button as separate element */}
                                <motion.button
                                    key="contact"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 3 * 0.05, duration: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={openContactModal}
                                    className="h-32 rounded-[8px] text-xl font-sans transition-colors bg-sea-salt text-volcanic-ash hover:bg-dune-gold/50"
                                >
                                    Contact
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ContactModal Component */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    )
}
