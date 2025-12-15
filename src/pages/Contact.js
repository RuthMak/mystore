import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Modal from "../components/Modal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <SectionTitle
        eyebrow="Contact"
        title="Book a consultation"
        subtitle="Request a consultation and we’ll follow up with personalized guidance."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-rooted-line bg-white p-6 space-y-4"
        >
          <div>
            <label className="text-sm font-semibold text-rooted-green">
              Name
            </label>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-rooted-green">
              Email
            </label>
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="you@email.com"
              type="email"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-rooted-green">
              Hair Goal
            </label>
            <input
              value={form.goal}
              onChange={(e) => update("goal", e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="e.g., sew-in, braids, tape-ins"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-rooted-green">
              Budget
            </label>
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2"
              required
            >
              <option value="" disabled>
                Select budget
              </option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-rooted-green px-4 py-3 text-sm font-semibold text-rooted-offwhite hover:bg-rooted-greenDark transition"
          >
            Submit request
          </button>
        </form>

        {/* STORE INFO */}
        <div className="rounded-3xl border border-rooted-line bg-white p-6 space-y-3">
          <p className="font-bold text-rooted-green">What happens next?</p>

          <p className="text-sm text-rooted-greenSoft">
            Once your consultation request is submitted, our team will review
            your hair goals and reach out with personalized recommendations.
          </p>

          <div className="rounded-2xl border border-rooted-line bg-rooted-offwhite p-4">
            <p className="text-sm text-rooted-greenSoft">
              Typical response time: <strong>24 - 48 hours</strong>.
              <br />
              Please include inspiration photos when we follow up to help us
              guide you better.
            </p>
          </div>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      <Modal
        open={submitted}
        title="Consultation request received"
        onClose={() => setSubmitted(false)}
      >
        <p className="text-rooted-greenSoft">
          Thank you, <span className="font-semibold">{form.name}</span>!
          <br />
          We’ve received your request and will follow up at{" "}
          <span className="font-semibold">{form.email}</span>.
        </p>

        <div className="mt-4 rounded-xl border border-rooted-line bg-rooted-offwhite p-4">
          <p className="text-sm text-rooted-greenSoft">
            Hair goal: <strong>{form.goal}</strong>
            <br />
            Budget range: <strong>{form.budget}</strong>
          </p>
        </div>
      </Modal>
    </main>
  );
}
