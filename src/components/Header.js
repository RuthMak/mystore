import { Link } from "react-router-dom";

export default function Header({ title, subtitle, ctaText }) {
  return (
    <header className="border-b border-rooted-line bg-rooted-offwhite">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-rooted-greenSoft">
          ROOTED Hair Store
        </p>

        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-rooted-green">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-4 max-w-2xl text-rooted-greenSoft">
            {subtitle}
          </p>
        ) : null}

        {ctaText ? (
          <Link
            to="/shop"
            className="inline-block mt-6 rounded-2xl bg-rooted-green px-6 py-3 text-sm font-semibold text-rooted-offwhite hover:bg-rooted-greenDark transition"
          >
            {ctaText}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
