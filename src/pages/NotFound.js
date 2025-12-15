import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-3xl border border-rooted-line bg-white p-10">
        <h2 className="text-2xl font-extrabold text-rooted-green">
          Page not found
        </h2>
        <p className="mt-2 text-rooted-greenSoft">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-2xl bg-rooted-green px-6 py-3 text-sm font-semibold text-rooted-offwhite hover:bg-rooted-greenDark transition"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
