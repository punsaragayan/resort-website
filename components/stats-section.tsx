export function StatsSection() {
  const stats = [
    { text: "Build around an 18 acres" },
    { text: "Sustainable and meaningful ecosystem of hospitality" },
    { text: "Our hotel has been present for over 20 years" },
    { text: "We make the best for all our customers" },
  ]

  return (
    <section className="py-16 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 animate-marquee">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-muted-foreground text-sm">{stat.text}</span>
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {stats.map((stat, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-muted-foreground text-sm">{stat.text}</span>
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
