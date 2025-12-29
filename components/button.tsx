"use client"

import type React from "react"

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    className?: string
    type?: "button" | "submit" | "reset"
    variant?: "primary" | "secondary" | "tertiary"
}

const Button = ({
                    children,
                    onClick,
                    disabled = false,
                    className = "",
                    type = "button",
                    variant = "primary",
                }: ButtonProps) => {
    const variantStyles = {
        primary: `
      bg-dune-gold text-volcanic-ash border-2 border-dune-gold
      shadow-[0_2px_8px_rgba(189,155,96,0.3)]
      hover:bg-[#D4B47A] hover:border-[#D4B47A] hover:scale-105 hover:shadow-lg
      active:bg-[#A6834D] active:border-[#A6834D] active:scale-98 active:shadow-md
      disabled:bg-[#DBCEBE] disabled:border-[#DBCEBE] disabled:text-volcanic-ash/40
    `,
        secondary: `
      bg-transparent text-sandy-white border-2 border-sandy-white backdrop-blur-sm
      shadow-[0_2px_8px_rgba(0,0,0,0.1)]
      hover:bg-sandy-white hover:text-volcanic-ash hover:scale-105 hover:shadow-lg
      active:bg-dune-gold active:text-volcanic-ash active:border-dune-gold active:scale-98
      disabled:border-sandy-white/30 disabled:text-sandy-white/40 disabled:backdrop-blur-none
    `,
        tertiary: `
      bg-transparent text-volcanic-ash border-0 shadow-none
      underline-offset-4 decoration-transparent
      hover:text-dune-gold hover:-translate-y-0.5 hover:decoration-dune-gold
      active:text-[#A6834D] active:translate-y-0
      disabled:text-volcanic-ash/40 disabled:no-underline
    `,
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        inline-flex h-12 px-10 py-3 items-center justify-center gap-4
        rounded-[14px] font-sans font-medium text-base
        transition-all duration-300 ease-out whitespace-nowrap min-w-[180px]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${variantStyles[variant]}
        ${className}
      `}
        >
            {children}
        </button>
    )
}

export { Button }
export default Button
