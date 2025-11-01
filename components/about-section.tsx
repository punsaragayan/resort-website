'use client'
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from 'react';

export function AboutSection() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const newScrollOffset = scrollTop - elementTop;
        setScrollOffset(newScrollOffset * 0.2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl">
            <p className="text-[#c9a961] text-sm font-medium">About resorts</p>
            {/* THIS IS THE MODIFIED H2 ELEMENT */}
            <h2 className="font-serif text-[#2d2d2d] text-[3.438rem] font-medium leading-[3.3rem] tracking-[-2px]">
              Relax at the luxury resorts around the entire world.
            </h2>
            <p className="text-[#8a8a8a] leading-relaxed text-base">
              A design-led approach guides the team, implementing practices, products and services that are thoughtful
              and environmentally sound. Family of professionals that creates intelligent designs that help the face of
              hospitality.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="bg-[#2d2d2d] text-white hover:bg-[#2d2d2d]/0 px-5">
                About resort
              </Button>
              <button className="flex items-center gap-2 text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">1 800 222 000</span>
              </button>
            </div>
          </div>

          {/* Right Images - Overlapping Grid */}
          <div className="relative h-[600px]">
            <div 
              ref={parallaxRef} 
              className="absolute top-0 left-24 p-6 z-20 w-[200px]"
              style={{ transform: `translateY(${scrollOffset}px)` }}
            >
                <p className="font-Urbanist  Sans-serif font-bold text-black text-xs uppercase tracking-wider mb-1">STARTED IN</p>
                                 <p className="font-[Urbanist,sans-serif] font-bold text-[4rem] leading-[4.5rem] text-8xl md:text-8xl lg:text-8xl leading-none">1995</p>            </div>

            <div className="absolute top-5 right-0 w-[65%] h-[420px] overflow-hidden">
              <Image src="/coconuts.webp" alt="Coconuts on tree" fill className="object-cover" />
            </div>

            <div className="absolute bottom-0 left-10 w-[48%] h-[360px] overflow-hidden z-10">
              <Image
                src="/hatgirl.webp"
                alt="Resort guest in sun hat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
        <div className="flex items-center gap-4 -rotate-90 origin-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8a8a8a]">SCROLL</span>
          <div className="w-12 h-px bg-[#8a8a8a]"></div>
        </div>
      </div>
    </section>
  )
}