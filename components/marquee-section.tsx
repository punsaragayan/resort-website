export function MarqueeSection() {
  const phrases = [
    "The resort is built in and around an 18 acres",
    "Sustainable and meaningful ecosystem of hospitality",
    "Our hotel has been present for over 20 years",
    "We make the best for all our customers",
    "The resort is built in and around an 18 acres",
  ]

  return (
    <section className="py-8 bg-[#f5f3f0] border-y border-gray-200 overflow-hidden">
      <div className="flex items-center gap-12 animate-marquee-slow whitespace-nowrap">
        {/* First set */}
        {phrases.map((phrase, index) => (
          <div key={index} className="flex items-center gap-12">
            <span
              className="text-[#2d2d2d] font-[var(--e-global-typography-secondary-font-family),Sans-serif]"
              style={{ fontSize: '1.75rem', lineHeight: '2.6rem', letterSpacing: '-0.5px'}}
            >
              {phrase}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961] flex-shrink-0" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {phrases.map((phrase, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-12">
            <span
              className="text-[#2d2d2d] font-serif"
              style={{ fontSize: '1.75rem', lineHeight: '2.6rem', letterSpacing: '-0.5px', fontWeight: 700 }}
            >
              {phrase}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961] flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}
