import Image from "next/image"

export function FacilitiesSection() {
  return (
    <section className="py-24 bg-[#f5f3f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#2d2d2d] mb-4">Awesome facilities</h2>
          <p className="text-[#7d7d7d]">Our hotel has been present for over 20 years.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image src="/person-exercising-with-red-kettlebell-at-gym.jpg" alt="Fitness facility" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image src="/luxury-spa-massage-treatment-relaxation.jpg" alt="Luxury spa massage" fill className="object-cover" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full">
              <span className="text-[#2d2d2d] font-medium">Luxury spa massage</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image src="/beach-sunset-with-grass-in-foreground-tropical-par.jpg" alt="Beach access" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
