import type { Metadata } from "next"
import Image from "next/image"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Snorkeling Packages | Sea Park Activities",
  description:
    "Compare our Shared & Private snorkeling tours to Manta Bay, Manta Point, Gamat Bay & Crystal Bay in Nusa Lembongan. Book via WhatsApp today!",
}

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=80",
  mantaBay:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  mantaPoint:
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
  gamatBay:
    "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80",
  crystalBay:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
}

const COMPARISON = [
  { feature: "Guide", shared: "Professional guide", private: "Personal dedicated guide" },
  { feature: "Boat", shared: "Shared with group", private: "Private boat for you" },
  { feature: "Group Size", shared: "8–12 people", private: "1–6 people" },
  { feature: "Duration", shared: "~4 hours", private: "~5 hours (flexible)" },
  { feature: "Schedule", shared: "Fixed departure 9 AM", private: "Choose your time" },
  { feature: "Locations", shared: "4 snorkeling spots", private: "4 spots + hidden gems" },
  { feature: "Snorkeling Gear", shared: "✓ Included", private: "✓ Premium gear" },
  { feature: "Photos", shared: "Group photos", private: "Personal photographer" },
  { feature: "Price", shared: "IDR 350,000 / person", private: "IDR 1,800,000 / boat" },
]

const ITINERARY = [
  "Pick-up from your accommodation",
  "Boat transfer to Manta Bay",
  "Snorkeling at Manta Bay (45 min)",
  "Transfer to Manta Point",
  "Snorkeling at Manta Point (30 min)",
  "Transfer to Gamat Bay",
  "Snorkeling at Gamat Bay (30 min)",
  "Transfer to Crystal Bay",
  "Snorkeling at Crystal Bay (30 min)",
  "Return to harbor & drop-off",
]

const SHARED_INCLUDES = [
  "Hotel pick-up & drop-off (Lembongan area)",
  "Boat & fuel",
  "Professional snorkeling guide",
  "Snorkeling mask, snorkel & fins",
  "Life jacket",
  "Fresh towel",
  "Bottled water & light snack",
  "Waterproof bag for belongings",
]

const PRIVATE_INCLUDES = [
  ...SHARED_INCLUDES.slice(0, 2),
  "Personal dedicated guide",
  "Premium snorkeling gear",
  "Life jacket",
  "Fresh towels for all guests",
  "Cooler with drinks & tropical fruit",
  "Underwater camera (GoPro) usage",
  "Flexible schedule & extended time",
  "Waterproof bag for belongings",
]

const LOCATIONS = [
  {
    name: "Manta Bay",
    image: IMAGES.mantaBay,
    description:
      "A sheltered bay with calm, clear waters where manta rays come to feed on plankton. This is the most reliable spot for close encounters with these gentle giants. Ideal for beginners and experienced snorkelers alike.",
    highlight: "Best for: Close manta encounters in calm water",
  },
  {
    name: "Manta Point",
    image: IMAGES.mantaPoint,
    description:
      "An open-ocean site with deeper, bluer water where larger oceanic mantas are often spotted. The currents can be stronger here, making it more adventurous. You may see multiple mantas cruising through the deep blue.",
    highlight: "Best for: Adventurous snorkelers, bigger mantas",
  },
  {
    name: "Gamat Bay",
    image: IMAGES.gamatBay,
    description:
      "A vibrant coral garden teeming with colorful tropical fish, sea turtles, and diverse marine life. The shallow reef makes it perfect for snorkeling and underwater photography.",
    highlight: "Best for: Coral reefs, tropical fish, turtles",
  },
  {
    name: "Crystal Bay",
    image: IMAGES.crystalBay,
    description:
      "Famous for its impossibly clear turquoise water and white sandy bottom. The visibility here is often 30+ meters, making it a paradise for underwater photography. Occasional mola-mola (sunfish) sightings.",
    highlight: "Best for: Crystal clear water, photography",
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Snorkelers in crystal blue water"
          fill
          className="object-cover"
          sizes="100vw"
          preload
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise text-xs uppercase tracking-[0.2em] font-medium mb-4">
            Shared & Private Options
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Our Snorkeling Packages
          </h1>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Compare
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Shared vs. Private
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Choose the experience that fits your style — both include the same
              incredible snorkeling locations.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block glass rounded-3xl overflow-hidden">
            <table className="w-full" id="comparison-table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-left text-white/40 text-sm font-medium uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="p-5 text-center">
                    <div className="inline-block px-4 py-1.5 bg-turquoise/10 rounded-full text-turquoise font-bold text-sm">
                      🤝 Shared Tour
                    </div>
                  </th>
                  <th className="p-5 text-center">
                    <div className="inline-block px-4 py-1.5 bg-coral/10 rounded-full text-coral font-bold text-sm">
                      👑 Private Tour
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 ${
                      i === COMPARISON.length - 1
                        ? "bg-white/[0.03]"
                        : "hover:bg-white/[0.02]"
                    } transition-colors`}
                  >
                    <td className="p-5 text-white/70 font-medium text-sm">
                      {row.feature}
                    </td>
                    <td className="p-5 text-center text-white/60 text-sm">
                      {row.shared}
                    </td>
                    <td className="p-5 text-center text-white/60 text-sm">
                      {row.private}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {COMPARISON.map((row) => (
              <div key={row.feature} className="glass rounded-xl p-4">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                  {row.feature}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-turquoise text-[10px] font-bold uppercase">
                      Shared
                    </span>
                    <p className="text-white/60 text-sm">{row.shared}</p>
                  </div>
                  <div>
                    <span className="text-coral text-[10px] font-bold uppercase">
                      Private
                    </span>
                    <p className="text-white/60 text-sm">{row.private}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PACKAGE CARDS ═══ */}
      <section className="py-24 px-4 bg-navy-light/50">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* ── Shared Tour ── */}
          <div className="glass rounded-3xl overflow-hidden" id="shared-package">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-full">
                <Image
                  src={IMAGES.mantaBay}
                  alt="Shared snorkeling tour group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-turquoise/90 text-navy font-bold text-xs uppercase rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Shared Snorkeling Tour
                </h3>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs">
                    ⏱ ~4 hours
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs">
                    👥 8–12 people
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs">
                    🏊 Easy–Medium
                  </span>
                </div>

                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  Itinerary
                </h4>
                <ol className="space-y-2 mb-8">
                  {ITINERARY.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/50 text-sm"
                    >
                      <span className="w-6 h-6 rounded-full bg-turquoise/10 text-turquoise flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  What&apos;s Included
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {SHARED_INCLUDES.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-white/50 text-sm"
                    >
                      <span className="text-turquoise text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-sm text-white/40">Starting from</span>
                  <span className="text-4xl font-bold text-turquoise">
                    IDR 350,000
                  </span>
                  <span className="text-sm text-white/40">/ person</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppButton
                    message="Hi, I'm interested in the Shared Snorkeling Package"
                    label="Ask About Shared Tour"
                    variant="secondary"
                  />
                  <WhatsAppButton
                    message="Hi, I'd like to check today's availability for the Shared Tour"
                    label="Check Availability"
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Private Tour ── */}
          <div className="glass rounded-3xl overflow-hidden" id="private-package">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-full order-1 lg:order-2">
                <Image
                  src={IMAGES.crystalBay}
                  alt="Private snorkeling tour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-coral/90 text-white font-bold text-xs uppercase rounded-full">
                  Premium Experience
                </div>
              </div>
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Private Snorkeling Tour
                </h3>
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs">
                    ⏱ ~5 hours (flexible)
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs">
                    👥 1–6 people
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs">
                    🏊 All levels
                  </span>
                </div>

                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  Itinerary
                </h4>
                <ol className="space-y-2 mb-8">
                  {ITINERARY.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/50 text-sm"
                    >
                      <span className="w-6 h-6 rounded-full bg-coral/10 text-coral flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  What&apos;s Included
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {PRIVATE_INCLUDES.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-white/50 text-sm"
                    >
                      <span className="text-coral text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end gap-1 mb-6">
                  <span className="text-sm text-white/40">Starting from</span>
                  <span className="text-4xl font-bold text-coral">
                    IDR 1,800,000
                  </span>
                  <span className="text-sm text-white/40">/ boat</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppButton
                    message="Hello, I want to book a Private Snorkel trip for 2 people"
                    label="Book Private Snorkeling"
                    variant="primary"
                  />
                  <WhatsAppButton
                    message="Hi, I'd like to check availability for a Private Tour"
                    label="Check Availability"
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCATION HIGHLIGHTS ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Snorkeling Spots
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Explore Our Locations
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
              Each location offers a unique underwater experience. From manta ray
              encounters to pristine coral gardens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="glass rounded-3xl overflow-hidden group hover:border-turquoise/20 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy/90 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {loc.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {loc.description}
                  </p>
                  <span className="inline-block px-3 py-1.5 bg-turquoise/10 border border-turquoise/20 rounded-full text-turquoise text-xs font-medium">
                    {loc.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Manta Bay vs Manta Point explainer */}
          <div className="mt-16 glass rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🐠 Manta Bay vs. Manta Point — What&apos;s the Difference?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-turquoise/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏖️
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Manta Bay
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  A <strong className="text-white/70">sheltered, calm bay</strong>{" "}
                  with shallower water (5–10m). Mantas come here to feed, so they
                  swim slowly and closely. Perfect for{" "}
                  <strong className="text-white/70">beginners</strong> and close
                  encounters. Higher chance of sightings year-round.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌊
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Manta Point
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  An{" "}
                  <strong className="text-white/70">
                    open-ocean, deeper-water site
                  </strong>{" "}
                  (10–25m depth). Known for{" "}
                  <strong className="text-white/70">larger oceanic mantas</strong>{" "}
                  cruising through. Stronger currents make it more adventurous.
                  Best for experienced snorkelers seeking thrills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy-light/50 to-navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Dive In?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Contact us via WhatsApp to book your tour, ask questions, or check
            today&apos;s availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              message="Hi, I'm interested in the Shared Snorkeling Package"
              label="Ask about Shared Tour"
              variant="secondary"
            />
            <WhatsAppButton
              message="Hello, I want to book a Private Snorkel trip for 2 people"
              label="Book Private Snorkeling"
              variant="primary"
            />
            <WhatsAppButton
              message="Hi, I'd like to check today's availability"
              label="Check Today's Availability"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </>
  )
}
