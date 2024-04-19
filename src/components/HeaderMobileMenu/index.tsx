'use client'

import { useEffect, useState } from "react"

export default function HeaderMobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      setIsMobileMenuOpen(true)
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])
  return (
    <div className="w-full h-96 bg-neutral-800"></div>
  )
}