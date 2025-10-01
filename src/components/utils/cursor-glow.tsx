"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-70 transition-opacity duration-300"
      style={{
        background: `radial-gradient(1200px circle at ${position.x}px ${position.y}px, rgba(231, 16, 16, 0.25), transparent 40%)`,
      }}
    />
  )
}
