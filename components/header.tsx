import Image from "next/image"

import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    // Updated background and border colors for a light, clean look
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f3] border-b border-[#c9a961]/50"> 
      <div className="px-10">
        {/* Adjusted height for a more standard header size (e.g., h-20 or h-24) */}
        <div className="flex items-center justify-between h-24"> 
          
          {/* Left: Phone Number Style Adjustments */}
          <div className="flex items-center gap-2 text-base text-[#2d2d2d]"> 
            {/* The icon color is the key gold/brown accent */}
            <Phone className="w-4 h-4 text-[#c9a961]" strokeWidth={1.5} /> 
            {/* Set to 'normal' but you could try 'medium' or 'semibold' for emphasis */}
            <span className="font-normal tracking-wide">1 800 222 000</span>
          </div>

          {/* Center: Navigation - Adjusting spacing and font weight */}
          {/* Changed gap-10 to gap-8 for a slightly tighter look and added font styles */}
          <nav className="header-nav hidden lg:flex items-center gap-8"> 
            
            {/* Navigation Link Styles - Made text slightly darker and bolder */}
            <Link href="/" className="text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
              Home
            </Link>
            <Link href="/about" className="text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
              About us
            </Link>
            <Link href="/rooms" className="text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
              Rooms
            </Link>

            {/* Logo - Kept center position, adjusted margin */}
            <Link href="/" className="logo-link mx-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/demo-hotel-and-resort-logo.svg"
                  alt="Resort Logo"
                  width={284}
                  height={108}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Link Styles continued */}
            <Link href="/amenities" className="text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
              Amenities
            </Link>
            <Link href="/bistro" className="text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
              Bistro
            </Link>
            <Link href="/contact" className="text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
              Contact
            </Link>
          </nav>

          {/* Right: Book Button Style Adjustments */}
          {/* Made button text darker, uppercase, and slightly bigger */}
          <button className="header-cta flex items-center gap-2 text-sm text-[#333] hover:text-[#c9a961] transition-colors font-medium uppercase tracking-wide">
            <Calendar className="w-4 h-4 text-[#c9a961]" strokeWidth={1.5} />
            <span>Book your stay</span>
          </button>
        </div>
        
        {/* New Element: The thick brown border at the bottom */}
        <div className="w-full h-[3px] bg-[#c9a961]"></div> 
      </div>
    </header>
  )
}