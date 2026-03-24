import * as React from "react"
import { clsx } from "clsx"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "green"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-teal-100 text-teal-800 border-teal-200",
    outline: "border border-teal-300 text-teal-700 bg-transparent",
    green: "bg-green-100 text-green-800 border-green-200",
  }

  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
