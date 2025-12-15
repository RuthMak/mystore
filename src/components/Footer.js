export default function Footer() {
  return (
    <footer className="border-t border-rooted-line bg-rooted-offwhite">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-rooted-greenSoft">
            © {new Date().getFullYear()} ROOTED Hair Store. All rights reserved. Ruth M.
          </p>
          <p className="text-sm text-rooted-greenSoft">
            Extensions • Human Hair • Braiding Hair • Tools • Consultations
          </p>
        </div>
      </div>
    </footer>
  );
}
