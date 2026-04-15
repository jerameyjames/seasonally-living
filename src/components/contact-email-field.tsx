"use client";

import { useState } from "react";

type ContactEmailFieldProps = {
  email: string;
  defaultSubject: string;
};

export function ContactEmailField({
  email,
  defaultSubject,
}: ContactEmailFieldProps) {
  const [note, setNote] = useState("");

  function openMail() {
    const params = new URLSearchParams();
    params.set("subject", defaultSubject);
    const body = note.trim();
    if (body) params.set("body", body);
    window.location.href = `mailto:${email}?${params.toString()}`;
  }

  return (
    <div className="space-y-3">
      <label
        htmlFor="reach-email-note"
        className="block text-sm font-medium text-[var(--sl-ink)]"
      >
        Optional message
      </label>
      <textarea
        id="reach-email-note"
        name="note"
        rows={3}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="sl-input w-full resize-y"
        placeholder="Measurements, timing, or what you are shopping for..."
      />
      <button type="button" onClick={openMail} className="sl-btn-primary h-11 w-full sm:w-auto">
        Open email app
      </button>
    </div>
  );
}
