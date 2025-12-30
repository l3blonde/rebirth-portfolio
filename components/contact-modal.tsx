"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import Button from "./button"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        } else if (formData.name.length < 2) {
            newErrors.name = "Name must be at least 2 characters"
        } else if (formData.name.length > 100) {
            newErrors.name = "Name must be less than 100 characters"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters"
        } else if (formData.message.length > 1000) {
            newErrors.message = "Message must be less than 1000 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error("Please fix the errors in the form")
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const contentType = response.headers.get("content-type")
            if (!contentType || !contentType.includes("application/json")) {
                toast.error("Server error. Please try again later.")
                return
            }

            const data = await response.json()

            if (response.ok) {
                toast.success("Message sent successfully! I'll get back to you soon.")
                setFormData({ name: "", email: "", message: "" })
                setErrors({})
                setTimeout(() => {
                    onClose()
                }, 1500)
            } else {
                toast.error(data.error || "Failed to send message. Please try again.")
            }
        } catch {
            toast.error("Something went wrong. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" })
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-volcanic-ash/60 backdrop-blur-sm z-50"
                    />

                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-blanc rounded-[12px] p-8 md:p-12 max-w-lg w-full shadow-2xl relative"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-volcanic-ash/60 hover:text-volcanic-ash transition-colors"
                                aria-label="Close modal"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-serif text-volcanic-ash mb-2">Work With Me</h2>
                            <p className="text-volcanic-ash/70 mb-8">Let&apos;s create something amazing together.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-sans text-volcanic-ash mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-[4px] focus:outline-none transition-colors ${
                                            errors.name
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-volcanic-ash/20 focus:border-dune-gold"
                                        }`}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-sans text-volcanic-ash mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border-2 rounded-[4px] focus:outline-none transition-colors ${
                                            errors.email
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-volcanic-ash/20 focus:border-dune-gold"
                                        }`}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-sans text-volcanic-ash mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 border-2 rounded-[4px] focus:outline-none transition-colors resize-none ${
                                            errors.message
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-volcanic-ash/20 focus:border-dune-gold"
                                        }`}
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                    <p className="text-volcanic-ash/50 text-xs mt-1">{formData.message.length}/1000 characters</p>
                                </div>

                                <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
