import type { Metadata } from "next"
import Image from "next/image"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactForm from "@/components/ContactForm"
import FAQ from "@/components/FAQ"

export const metadata: Metadata = {
  title: "Contact Us | Sea Park Activities",
  description:
    "Get in touch with Sea Park Activities for snorkeling tour bookings, questions, or availability checks. WhatsApp, email, or visit us in Nusa Lembongan.",
}

const WHATSAPP_NUMBER = "6281234567890"

export default function ContactPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Tropical beach sunset"
          fill
          className="object-cover"
          sizes="100vw"
          preload
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise text-xs uppercase tracking-[0.2em] font-medium mb-4">
            We&apos;d Love to Hear From You
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* ═══ CONTACT INFO + MAP ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Jungut Batu, Nusa Lembongan
                      <br />
                      Klungkung, Bali, Indonesia 80771
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center text-xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-turquoise text-sm hover:underline"
                    >
                      +62 812 3456 7890
                    </a>
                    <p className="text-white/40 text-xs mt-1">
                      Fastest way to reach us!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center text-xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@seaparkactivities.com"
                      className="text-turquoise text-sm hover:underline"
                    >
                      hello@seaparkactivities.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center text-xl flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-white/50 text-sm">
                      Daily: 7:00 AM – 7:00 PM (WITA)
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                      We reply within 30 minutes during business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-4">
                  💬 Prefer chatting? WhatsApp is our primary channel — it&apos;s
                  the fastest way to get answers, check availability, and book
                  your tour!
                </p>
                <WhatsAppButton
                  message="Hi, I have a question about your snorkeling tours"
                  label="Chat on WhatsApp"
                  variant="secondary"
                  fullWidth
                />
              </div>
            </div>

            {/* Right — Map */}
            <div>
              <div className="glass rounded-3xl overflow-hidden h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.86!2d115.4375!3d-8.6825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24102c4cda42d%3A0xe29e20f1f3d7ee0!2sNusa%20Lembongan!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sea Park Activities Location - Nusa Lembongan"
                  id="google-map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section className="py-24 px-4 bg-navy-light/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              Send a Message
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Contact Form
            </h2>
            <p className="text-white/50 mt-4">
              Have a question? Fill out the form below and we&apos;ll get back to
              you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-turquoise text-sm uppercase tracking-[0.2em] font-medium">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ═══ WHATSAPP CTA ═══ */}
      <section className="py-24 px-4 bg-gradient-to-b from-navy-light/50 to-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prefer WhatsApp?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Chat with us directly — it&apos;s the fastest way to get answers and
            book your snorkeling adventure!
          </p>
          <WhatsAppButton
            message="Hi, I'd like to learn about your snorkeling packages!"
            label="Chat With Us on WhatsApp"
            variant="secondary"
          />
        </div>
      </section>
    </>
  )
}
