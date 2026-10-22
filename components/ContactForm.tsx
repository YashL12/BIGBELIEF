"use client";

import { useId, useState, type FormEvent } from "react";
import { Arrow } from "./Icon";

const topics = ["Custom software or web application", "Workflow automation", "Stock Audit Automation (demo)", "Audit Management Platform", "Data, analytics or integration", "Something else"];

type State = "idle" | "sending" | "done" | "mailto" | "error";

export function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const id = useId();
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) errs.email = "Please enter a valid email address.";
    if (!data.message?.trim() || data.message.trim().length < 10) errs.message = "Tell us a little about what you want to build or improve.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("bad response");
      const result = (await res.json()) as { delivered?: boolean };
      if (result.delivered === false) {
        // No delivery backend configured yet: hand the message to the visitor's email app.
        const body = `${data.message}\n\n— ${data.name}${data.company ? `, ${data.company}` : ""}${data.phone ? `\nPhone: ${data.phone}` : ""}\n${data.email}`;
        window.location.href = `mailto:hello@bigbeliefsolutions.com?subject=${encodeURIComponent(data.topic || "Website enquiry")}&body=${encodeURIComponent(body)}`;
        setState("mailto");
        return;
      }
      setState("done");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const field = "mt-1.5 w-full rounded-lg border border-[var(--line-strong)] bg-white px-3.5 py-3 text-base text-[var(--ink)] placeholder:text-[#9aa7c4] focus:border-[var(--blue-500)] focus:outline-none focus:ring-4 focus:ring-[var(--blue-500)]/15 aria-[invalid=true]:border-[var(--bad)]";
  const label = "block text-sm font-medium text-[var(--navy-900)]";

  if (state === "mailto") {
    return (
      <div role="status" className="card p-8">
        <h3 className="h3">Almost there. Please send the email.</h3>
        <p className="mt-3 text-[var(--ink-soft)]">
          We opened your email app with your message filled in. Your message is only sent once you press send there. If nothing opened, write to us at{" "}
          <a className="link-underline font-medium text-[var(--blue-600)]" href="mailto:hello@bigbeliefsolutions.com">hello@bigbeliefsolutions.com</a>.
        </p>
        <button type="button" className="btn btn-secondary mt-6" onClick={() => setState("idle")}>
          Back to the form
        </button>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div role="status" className="card p-8">
        <h3 className="h3">Thank you. Your message is in.</h3>
        <p className="mt-3 text-[var(--ink-soft)]">We will read it and reply by email.</p>
        <button type="button" className="btn btn-secondary mt-6" onClick={() => setState("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-8" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="h3">Send us a message</h2>
      <p className="mt-1.5 text-sm text-[var(--ink-soft)]">Fields marked * are required.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Name *</label>
          <input id={`${id}-name`} name="name" autoComplete="name" required className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-e` : undefined} />
          {errors.name && <p id={`${id}-name-e`} className="mt-1 text-sm text-[var(--bad)]">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-company`} className={label}>Company</label>
          <input id={`${id}-company`} name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>Email *</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" inputMode="email" required className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-e` : undefined} />
          {errors.email && <p id={`${id}-email-e`} className="mt-1 text-sm text-[var(--bad)]">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-topic`} className={label}>What can we help with?</label>
        <select id={`${id}-topic`} name="topic" defaultValue={defaultTopic ?? ""} className={field}>
          <option value="">Select an option</option>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-message`} className={label}>What are you looking to build or improve? *</label>
        <textarea id={`${id}-message`} name="message" rows={5} required className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? `${id}-message-e` : undefined} />
        {errors.message && <p id={`${id}-message-e`} className="mt-1 text-sm text-[var(--bad)]">{errors.message}</p>}
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : <>Start a Conversation <Arrow /></>}
        </button>
        <p role="alert" className="text-sm text-[var(--bad)]">
          {state === "error" && "Something went wrong. Please email us directly instead."}
        </p>
      </div>
    </form>
  );
}
