"use client"

import { useEffect, useRef, useState } from "react"

interface Voxel {
    col: number
    row: number
    z: number      // Current height/depth
    targetZ: number // Target height/depth
}

export default function ClayGridCanvas() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set dimensions
        let width = container.clientWidth
        let height = container.clientHeight
        canvas.width = width
        canvas.height = height

        // Grid parameters
        const cols = 14
        const rows = 14
        const boxWidth = 36  // Size of isometric cube face
        const boxHeight = 18 // Height of isometric cube face (half of width)
        const blockThickness = 12 // Height extrusion of the cube

        // Initialize voxels
        const voxels: Voxel[] = []
        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                voxels.push({
                    col: c,
                    row: r,
                    z: 0,
                    targetZ: 0,
                })
            }
        }

        // Handle resize
        const handleResize = () => {
            if (!container || !canvas) return
            width = container.clientWidth
            height = container.clientHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener("resize", handleResize)

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            setMouse({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }

        const handleMouseLeave = () => {
            setMouse(null)
        }

        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("mouseleave", handleMouseLeave)

        // Animation Loop
        let animationFrameId: number

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // Center grid on screen
            const originX = width / 2
            const originY = height / 2 - (rows * boxHeight) / 2 + 30

            // Update Target Heights based on mouse proximity
            voxels.forEach((voxel) => {
                // Default state is flat (0)
                voxel.targetZ = 0

                if (mouse) {
                    // Compute 2D center position of voxel face (un-deformed)
                    const isoX = (voxel.col - voxel.row) * (boxWidth / 2) + originX
                    const isoY = (voxel.col + voxel.row) * (boxHeight / 2) + originY

                    const dx = mouse.x - isoX
                    const dy = mouse.y - isoY
                    const distance = Math.hypot(dx, dy)

                    // Soft depression radius (approx 120 pixels)
                    if (distance < 120) {
                        // Max depression depth is 16px, fading out with distance
                        const force = (1 - distance / 120) * 16
                        voxel.targetZ = force // Positive value to offset downwards
                    }
                }

                // Smooth interpolation (lerp) towards target height
                voxel.z += (voxel.targetZ - voxel.z) * 0.1
            })

            // Sort voxels back-to-front for proper painter-algorithm rendering (depth sorting)
            const sortedVoxels = [...voxels].sort((a, b) => {
                return (a.col + a.row) - (b.col + b.row)
            })

            // Draw voxels
            sortedVoxels.forEach((voxel) => {
                const col = voxel.col
                const row = voxel.row
                const depth = voxel.z // Amount pressed down

                // Isometric coordinates (offset Y downward by depth)
                const x = (col - row) * (boxWidth / 2) + originX
                const y = (col + row) * (boxHeight / 2) + originY + depth

                // Colors representing raw Babylonian unbaked clay textures
                // Shaded faces based on light coming from top-left
                const colorTop = "#E5D4B8"   // Soft clay sand
                const colorLeft = "#D2C1A5"  // Mid-shade clay
                const colorRight = "#BFA586" // Dark shade clay

                // 1. Top Face
                ctx.fillStyle = colorTop
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(x + boxWidth / 2, y - boxHeight / 2)
                ctx.lineTo(x + boxWidth, y)
                ctx.lineTo(x + boxWidth / 2, y + boxHeight / 2)
                ctx.closePath()
                ctx.fill()

                // Draw thin, geometric gridlines to give math matrix aesthetic
                ctx.strokeStyle = "#2E2A2B"
                ctx.lineWidth = 0.2
                ctx.stroke()

                // 2. Left Face
                ctx.fillStyle = colorLeft
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(x + boxWidth / 2, y + boxHeight / 2)
                ctx.lineTo(x + boxWidth / 2, y + boxHeight / 2 + blockThickness)
                ctx.lineTo(x, y + blockThickness)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()

                // 3. Right Face
                ctx.fillStyle = colorRight
                ctx.beginPath()
                ctx.moveTo(x + boxWidth / 2, y + boxHeight / 2)
                ctx.lineTo(x + boxWidth, y)
                ctx.lineTo(x + boxWidth, y + blockThickness)
                ctx.lineTo(x + boxWidth / 2, y + boxHeight / 2 + blockThickness)
                ctx.closePath()
                ctx.fill()
                ctx.stroke()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener("resize", handleResize)
            canvas.removeEventListener("mousemove", handleMouseMove)
            canvas.removeEventListener("mouseleave", handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [mouse])

    return (
        <div ref={containerRef} className="w-full h-full relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
        </div>
    )
}
