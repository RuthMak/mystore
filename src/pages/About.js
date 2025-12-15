import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <SectionTitle
        eyebrow="About"
        title="Built from quality, rooted in confidence"
      />

      <div className="rounded-3xl border border-rooted-line bg-white p-8 space-y-4">
        <p className="text-rooted-greenSoft">
          ROOTED is a hair store that sells everything hair: extensions, human
          hair, braiding hair, salon tools, hair products, and styling tools.
        </p>

        <p className="text-rooted-greenSoft">
          We also provide consultations so clients can choose the right texture,
          length, and maintenance routine. The goal is simple: quality hair and
          the confidence that comes with it.
        </p>

        <div className="grid gap-4 md:grid-cols-3 pt-2">
          {[
            { t: "Quality-first", d: "Hair and tools selected for performance." },
            { t: "Guidance", d: "Consultations that match the look you want." },
            { t: "Care", d: "Aftercare support for long-lasting installs." },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-rooted-line p-5"
            >
              <p className="font-bold text-rooted-green">{x.t}</p>
              <p className="mt-2 text-sm text-rooted-greenSoft">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
