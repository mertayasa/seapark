"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const WHATSAPP_NUMBER = "6281234567890"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-turquoise to-deep-ocean flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-110">
            🌊
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-tight">
              Sea Park
            </span>
            <span className="block text-turquoise text-[10px] uppercase tracking-[0.2em] -mt-1">
              Activities
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-turquoise bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to learn about your snorkeling packages!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 bg-coral hover:bg-coral-dark text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-navy-light border-l border-white/10 p-8 pt-24 transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  pathname === link.href
                    ? "text-turquoise bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to learn about your snorkeling packages!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 bg-coral hover:bg-coral-dark text-white font-semibold text-center rounded-full transition-all"
            >
              Book via WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
