import * as React from "react"
import { clsx } from "clsx"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "teal" | "green"
  size?: "sm" | "md" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 disabled:opacity-50 active:scale-[0.97]"

    const variants: Record<string, string> = {
      default: "bg-teal-600 text-white hover:bg-teal-700",
      outline: "border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white",
      ghost:   "text-teal-700 hover:bg-teal-50",
      // No translate-y or dynamic shadow — avoids shadow flicker on hover
      teal:    "bg-teal-600 text-white hover:bg-teal-700 shadow-md",
      green:   "bg-green-500 text-white hover:bg-green-600 shadow-md",
    }

    const sizes: Record<string, string> = {
      sm:   "px-4 py-2 text-sm",
      md:   "px-6 py-2.5 text-sm",
      lg:   "px-8 py-3 text-base",
      icon: "w-10 h-10",
    }

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
