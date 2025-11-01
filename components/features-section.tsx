import { Award, Users, UtensilsCrossed, Waves } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Five stars luxury resort",
    description: "Experience a unique stay",
  },
  {
    icon: Users,
    title: "Well trained manpower",
    description: "Dedicated meal courses",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine dining restaurants",
    description: "Discover a medley of flavours",
  },
  {
    icon: Waves,
    title: "Large swimming pool",
    description: "Unwind and discover joy",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-background mb-6 group-hover:bg-gold/10 transition-colors">
                <feature.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-balance">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
