import { useMemo, useState } from "react";

export default function Carousel({ items, renderItem }) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const [index, setIndex] = useState(0);

  const hasItems = safeItems.length > 0;
  const current = hasItems ? safeItems[index % safeItems.length] : null;

  const prev = () =>
    setIndex((i) => (hasItems ? (i - 1 + safeItems.length) % safeItems.length : 0));
  const next = () => setIndex((i) => (hasItems ? (i + 1) % safeItems.length : 0));

  if (!hasItems) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-gray-600">
        No items to display.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prev}
          className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          Prev
        </button>
        <div className="flex-1">{renderItem(current)}</div>
        <button
          onClick={next}
          className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {safeItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-gray-900" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
