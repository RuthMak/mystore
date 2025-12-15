import { useState } from "react";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className="rounded-xl border border-rooted-line bg-white"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-rooted-green">
                {item.question}
              </span>
              <span className="text-rooted-greenSoft">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen ? (
              <div className="px-4 pb-4 text-rooted-greenSoft">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
