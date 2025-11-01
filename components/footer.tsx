import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  const instagramImages = [
    { src: "/passport-and-travel-items-on-table.jpg", alt: "Travel" },
    { src: "/feet-in-sand-at-beach-relaxation.jpg", alt: "Beach" },
    { src: "/coffee-cup-on-table-with-crafto-branding.jpg", alt: "Coffee" },
    { src: "/person-with-skateboard-and-sneakers.jpg", alt: "Skateboard" },
    { src: "/white-sneakers-on-concrete-urban-style.jpg", alt: "Sneakers" },
  ]

  return (
    <footer className="bg-[#f5f3f0]">
      {/* Newsletter Section */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image src="/fresh-green-coconut-with-straw-tropical-drink.jpg" alt="Coconut" width={120} height={120} className="mx-auto" />
          </div>
          <h2 className="text-5xl font-serif text-[#2d2d2d] mb-4">
            Get the amazing offers
            <br />
            into your inbox!
          </h2>
          <form className="max-w-2xl mx-auto mb-4">
            <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border-none outline-none text-[#2d2d2d] placeholder:text-[#999]"
              />
              <button
                type="submit"
                className="flex items-center gap-2 text-[#2d2d2d] font-medium hover:text-[#c9a961] transition-colors"
              >
                <Mail className="w-4 h-4" />
                SUBSCRIBE
              </button>
            </div>
          </form>
          <p className="text-sm text-[#7d7d7d]">
            We are committed to protecting your{" "}
            <Link href="#" className="underline">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
            {instagramImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/demo-hotel-and-resort.jpg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                {index === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="text-sm font-medium">Follow crafto</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#7d7d7d]">
              © Copyright 2025{" "}
              <Link href="#" className="underline">
                Crafto
              </Link>
            </p>
            <nav className="flex items-center gap-8">
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Home
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                About us
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Rooms
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Amenities
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Bistro
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Fb.
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Dr.
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Tw.
              </Link>
              <Link href="#" className="text-[#2d2d2d] hover:text-[#c9a961] transition-colors">
                Be.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
