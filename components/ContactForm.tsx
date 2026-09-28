"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ButtonRow } from "@/components/ui";
import { contact } from "@/lib/content";

/* The live contact form posts to WordPress. This rebuild has no backend, so sending opens the visitor's
   own mail app with the message addressed to GAK and the fields filled in. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const body = [`Name: ${field("name")}`, `Email: ${field("email")}`, `Phone: ${field("phone")}`, "", field("message")].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(field("subject") || "Enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <form className="contact-form" onSubmit={submit} data-rise>
    <label><span className="mono">Name</span><input name="name" required autoComplete="name" /></label>
    <label><span className="mono">Email</span><input name="email" type="email" required autoComplete="email" /></label>
    <label><span className="mono">Phone</span><input name="phone" type="tel" autoComplete="tel" /></label>
    <label><span className="mono">Subject</span><input name="subject" /></label>
    <label className="full"><span className="mono">Message</span><textarea name="message" rows={6} required /></label>
    <div className="full form-foot">
      <button type="submit" className="btn btn-blue btn-arrow">
        <ButtonRow arrow>Send Message</ButtonRow>
      </button>
      <p className="mono" aria-live="polite">{sent ? "Your mail app should now be open." : "We will reply from " + contact.email}</p>
    </div>
  </form>;
}
