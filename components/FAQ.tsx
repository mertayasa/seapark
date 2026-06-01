"use client"

import { useState } from "react"

const FAQ_ITEMS = [
  {
    question: "Do I need snorkeling experience?",
    answer:
      "Not at all! Our tours are suitable for all levels, including complete beginners. Our guides will provide a safety briefing and stay with you throughout the trip. Life jackets are provided for those who need extra confidence in the water.",
  },
  {
    question: "What's the best time of year for manta ray sightings?",
    answer:
      "Manta rays are present in Nusa Lembongan year-round! However, the peak season is from May to November when plankton blooms attract more mantas. We have a 90%+ sighting rate during these months. Even in the rainy season, encounters are still very common.",
  },
  {
    question: "What should I bring on the tour?",
    answer:
      "We recommend bringing: reef-safe sunscreen, a swimsuit, a change of clothes, a waterproof phone case (optional), and any personal medication. We provide all snorkeling gear, towels, water, and snacks — so you don't need to worry about equipment!",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes! We offer free cancellation up to 24 hours before your tour. For cancellations within 24 hours, a 50% fee applies. Rescheduling is always free and subject to availability. Weather-related cancellations are fully refundable.",
  },
  {
    question: "Is it safe for children?",
    answer:
      "Children aged 6 and above are welcome on our tours (with a parent or guardian). We provide child-sized snorkeling gear and life jackets. For families with younger children, we recommend the Private Tour for a more relaxed pace.",
  },
  {
    question: "How do I get to Nusa Lembongan from Bali?",
    answer:
      "Nusa Lembongan is a 30-minute fast boat ride from Sanur, Bali. Several boat operators run daily services. We can help you arrange boat transfers — just ask us on WhatsApp! Once on the island, we handle all pick-up and drop-off for your tour.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3" id="faq-section">
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === i ? "border-turquoise/20" : ""
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left"
            id={`faq-toggle-${i}`}
          >
            <span className="text-white font-medium text-sm pr-4">
              {item.question}
            </span>
            <span
              className={`text-turquoise text-xl flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
