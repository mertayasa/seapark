"use client"

import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  if (submitted) {
    return (
      <div className="glass rounded-3xl p-12 text-center">
        <div className="text-5xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Message Sent!
        </h3>
        <p className="text-white/60 mb-8">
          Thank you for reaching out! We&apos;ll get back to you within 24 hours.
          For faster responses, chat with us on WhatsApp.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 border border-white/20 text-white/70 hover:text-white hover:border-white/30 text-sm rounded-full transition-all"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 lg:p-12 space-y-6"
      id="contact-form"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-white/60 text-sm font-medium mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="contact-name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise/50 focus:ring-1 focus:ring-turquoise/30 transition-all"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-white/60 text-sm font-medium mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="contact-email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise/50 focus:ring-1 focus:ring-turquoise/30 transition-all"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-white/60 text-sm font-medium mb-2"
        >
          Your Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise/50 focus:ring-1 focus:ring-turquoise/30 transition-all resize-none"
          placeholder="Tell us about your trip plans, group size, preferred dates..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5"
        id="contact-submit"
      >
        Send Message
      </button>
    </form>
  )
}
