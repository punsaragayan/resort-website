"use client"

import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f3] border-b border-[#e8e6e3]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left: Phone */}
          <div className="flex items-center gap-2 text-sm text-[#2d2d2d]">
            <Phone className="w-4 h-4 text-[#c9a961]" strokeWidth={1.5} />
            <span className="font-normal">1 800 222 000</span>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
              Home
            </Link>
            <Link href="/about" className="text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
              About us
            </Link>
            <Link href="/rooms" className="text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
              Rooms
            </Link>

            {/* Logo */}
            <Link href="/" className="mx-6">
              <div className="flex items-center gap-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2L8 16H28L18 2Z" stroke="#2d2d2d" strokeWidth="1.5" fill="none" />
                  <path d="M8 16L2 26H14L8 16Z" stroke="#2d2d2d" strokeWidth="1.5" fill="none" />
                  <path d="M28 16L22 26H34L28 16Z" stroke="#2d2d2d" strokeWidth="1.5" fill="none" />
                  <path d="M18 26L12 34H24L18 26Z" stroke="#2d2d2d" strokeWidth="1.5" fill="none" />
                </svg>
                <span className="font-serif text-2xl font-semibold text-[#2d2d2d]">Resort</span>
              </div>
            </Link>

            <Link href="/amenities" className="text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
              Amenities
            </Link>
            <Link href="/bistro" className="text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
              Bistro
            </Link>
            <Link href="/contact" className="text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
              Contact
            </Link>
          </nav>

          {/* Right: Book Button */}
          <button className="flex items-center gap-2 text-sm text-[#666] hover:text-[#c9a961] transition-colors font-normal">
            <Calendar className="w-4 h-4 text-[#c9a961]" strokeWidth={1.5} />
            <span>Book your stay</span>
          </button>
        </div>
      </div>
    </header>
  )
}
