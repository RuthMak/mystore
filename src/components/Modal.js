export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white border border-rooted-line p-6">
        {title ? (
          <h2 className="text-xl font-bold text-rooted-green mb-3">{title}</h2>
        ) : null}

        {children}

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-rooted-green px-4 py-2 text-sm font-semibold text-rooted-offwhite hover:bg-rooted-greenDark transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
