import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import WhatsAppButton from "@/components/WhatsAppButton"
import fs from "fs/promises"
import path from "path"

/* ─── Placeholder image URLs (Unsplash) ─── */
const IMAGES = {
  hero: "manta-bay-seapark.webp",
  shared:
    "gamat-bay-seapark.webp",
  private:
    "crystal-bay-seapark.webp",
  cta: "manta-point-seapark.webp",
}

const WHY_CHOOSE = [
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "International safety standards with certified equipment and trained guides for your peace of mind.",
  },
  {
    icon: "🤿",
    title: "Expert Guides",
    desc: "Our experienced local guides know every secret spot and ensure amazing encounters.",
  },
  {
    icon: "📍",
    title: "Best Spots",
    desc: "Exclusive access to Manta Bay, Manta Point, Gamat Bay, and Crystal Bay — the best in Bali.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly",
    desc: "We practice responsible tourism to protect marine life and coral reefs for future generations.",
  },
]

export default async function HomePage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery")
  let galleryImages: string[] = []
  try {
    const galleryFiles = await fs.readdir(galleryDir)
    galleryImages = galleryFiles
      .filter((file) => /\.(webp|jpg|jpeg|png)$/i.test(file))
      .map((file) => `/gallery/${file}`)
  } catch (err) {
    console.error("Failed to load gallery images:", err)
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Underwater ocean view with sunlight"
          fill
          className="object-cover"
          sizes="100vw"
          preload
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-turquoise/30 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise text-xs uppercase tracking-[0.2em] font-medium mb-6">
              Nusa Lembongan, Bali
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Discover the Magic of{" "}
              <span className="gradient-text">Nusa Lembongan</span>{" "}
              Snorkeling
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Swim alongside majestic manta rays, explore vibrant coral reefs,
              and dive into crystal-clear waters with our expert-guided
              snorkeling adventures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                message="Hi, I'd like to learn about your snorkeling packages!"
                label="Book Your Adventure"
                variant="primary"
              />
              <Link
                href="/packages"
                className="px-6 py-3 border-2 border-white/20 text-white hover:bg-white/10 font-semibold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/30 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-turquoise rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-turquoise to-coral mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Welcome to Sea Park Activities
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Based in the heart of Nusa Lembongan, we specialize in creating
            unforgettable snorkeling experiences. Whether you&apos;re a first-time
            snorkeler or a seasoned explorer, our shared and private tours take
            you to Bali&apos;s most spectacular underwater sites — from the legendary
            Manta Bay to the crystal-clear waters of Crystal Bay.
          </p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              The Sea Park Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-8 text-center group hover:border-turquoise/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PACKAGES ═══ */}
      <section className="py-24 px-4 bg-navy-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Our Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Choose Your Adventure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Shared Tour Card */}
            <div className="glass rounded-3xl overflow-hidden group hover:border-turquoise/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={IMAGES.shared}
                  alt="Group snorkeling tour"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-turquoise/90 text-navy font-bold text-xs uppercase rounded-full">
                  Most Popular
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy/90 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Shared Snorkeling Tour
                </h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Join a fun group and explore 4 incredible snorkeling spots with
                  experienced guides. Perfect for solo travelers and new friends.
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-sm text-white/40">From</span>
                  <span className="text-3xl font-bold text-turquoise">
                    IDR 350K
                  </span>
                  <span className="text-sm text-white/40">/ person</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppButton
                    message="Hi, I'm interested in the Shared Snorkeling Package"
                    label="Ask About This Tour"
                    variant="secondary"
                  />
                  <Link
                    href="/packages"
                    className="inline-flex items-center justify-center px-5 py-3 border border-white/10 text-white/70 hover:text-white hover:border-white/30 text-sm rounded-full transition-all"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Private Tour Card */}
            <div className="glass rounded-3xl overflow-hidden group hover:border-coral/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={IMAGES.private}
                  alt="Private snorkeling experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-coral/90 text-white font-bold text-xs uppercase rounded-full">
                  Premium
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy/90 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Private Snorkeling Tour
                </h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Your own boat, your own guide, your own pace. The ultimate
                  exclusive snorkeling experience for couples and small groups.
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-sm text-white/40">From</span>
                  <span className="text-3xl font-bold text-coral">
                    IDR 1.8M
                  </span>
                  <span className="text-sm text-white/40">/ boat</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppButton
                    message="Hello, I want to book a Private Snorkel trip"
                    label="Book Private Tour"
                    variant="primary"
                  />
                  <Link
                    href="/packages"
                    className="inline-flex items-center justify-center px-5 py-3 border border-white/10 text-white/70 hover:text-white hover:border-white/30 text-sm rounded-full transition-all"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              What Our Guests Say
            </h2>
          </div>
          <div className="w-full flex justify-center">
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-6b377ae9-9136-415d-8691-5d8de5d26e09 w-full" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="py-24 px-4 bg-navy-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Moments from the Sea
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square"
              >
                <Image
                  src={src}
                  alt={`Snorkeling gallery photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-deep-ocean/0 group-hover:bg-deep-ocean/30 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src={IMAGES.cta}
          alt="Ocean sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready for an Unforgettable Adventure?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Book your snorkeling tour today and create memories that will last a
            lifetime. Our team is ready to make your Bali experience
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              message="Hi, I'd like to book a snorkeling tour!"
              label="Book Your Adventure"
              variant="primary"
            />
            <WhatsAppButton
              message="Hi, I'd like to check today's availability"
              label="Check Availability"
              variant="secondary"
            />
          </div>
        </div>
      </section>
    </>
  )
}
