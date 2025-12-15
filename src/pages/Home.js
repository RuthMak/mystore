import SectionTitle from "../components/SectionTitle";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faqs";

import hero from "../images/home/hero.jpg";
import humanHair from "../images/home/human-hair.jpg";
import braidingHair from "../images/home/braiding-hair.jpg";
import tools from "../images/home/tools.jpg";

export default function Home() {
  return (
    <main className="space-y-16">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rooted-green">
            Premium hair. Professional tools. Confident installs.
          </h2>

          <p className="mt-4 text-rooted-greenSoft max-w-xl">
            ROOTED sells everything hair - extensions, human hair, braiding hair,
            salon tools, hair products, and styling tools; with consultations to
            help you choose confidently.
          </p>
        </div>

        <img
          src={hero}
          alt="Premium hair installs"
          className="rounded-3xl object-cover w-full h-[320px] md:h-[420px]"
        />
      </section>

      {/* CATEGORY VISUALS */}
      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Shop by category"
          title="Everything hair, all in one place"
          subtitle="Carefully curated hair, tools, and products."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Human Hair",
              desc: "Soft, natural blends that last.",
              img: humanHair,
            },
            {
              title: "Braiding Hair",
              desc: "Smooth installs and clean finishes.",
              img: braidingHair,
            },
            {
              title: "Tools & Products",
              desc: "Everything for prep, style, and care.",
              img: tools,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-rooted-line bg-white overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-rooted-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-rooted-greenSoft">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Social proof"
          title="What clients say"
          subtitle="Trusted by clients who value quality and confidence."
        />

        <Carousel
          items={testimonials}
          renderItem={(t) => (
            <div className="px-4">
              <p className="text-lg font-semibold text-rooted-green">
                “{t.quote}”
              </p>
              <p className="mt-2 text-sm text-rooted-greenSoft">
                — {t.name}
              </p>
            </div>
          )}
        />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <SectionTitle
          eyebrow="Help"
          title="Frequently asked questions"
          subtitle="Everything you need to know before purchasing."
        />
        <Accordion items={faqs} />
      </section>
    </main>
  );
}
