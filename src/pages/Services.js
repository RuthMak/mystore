import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Modal from "../components/Modal";

const serviceCards = [
  {
    id: "s-1",
    title: "Hair Consultation",
    desc: "Texture, length, density, and install plan tailored to you.",
    details:
      "We help you choose the right hair type for your lifestyle and desired look. Bring inspiration photos and we’ll guide the match.",
  },
  {
    id: "s-2",
    title: "Install Prep Guidance",
    desc: "Product and tool recommendations for a flawless install.",
    details:
      "We recommend prep and care routines, including cleansing, conditioning, heat protection, and extension maintenance.",
  },
  {
    id: "s-3",
    title: "Aftercare Support",
    desc: "Keep your hair looking fresh longer with the right routine.",
    details:
      "We explain how often to wash, how to detangle, nighttime protection, and which products to avoid.",
  },
];

export default function Services() {
  const [openService, setOpenService] = useState(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <SectionTitle
        eyebrow="Services"
        title="Consultations & support"
        subtitle="Professional guidance to help you choose, prep, and maintain your hair."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {serviceCards.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl border border-rooted-line bg-white p-6"
          >
            <h3 className="text-lg font-bold text-rooted-green">
              {s.title}
            </h3>

            <p className="mt-2 text-sm text-rooted-greenSoft">
              {s.desc}
            </p>

            <button
              onClick={() => setOpenService(s)}
              className="mt-4 rounded-xl bg-rooted-green px-4 py-2 text-sm font-semibold text-rooted-offwhite hover:bg-rooted-greenDark transition"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>

      <Modal
        open={!!openService}
        title={openService?.title}
        onClose={() => setOpenService(null)}
      >
        <p className="text-rooted-greenSoft leading-relaxed">
          {openService?.details}
        </p>

        {/* Optional real CTA instead of dev text */}
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block rounded-xl border border-rooted-line px-4 py-2 text-sm font-semibold text-rooted-green hover:bg-rooted-offwhite transition"
          >
            Book a consultation
          </a>
        </div>
      </Modal>
    </main>
  );
}
