export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-widest uppercase text-rooted-greenSoft">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-rooted-green">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-2 text-rooted-greenSoft">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
