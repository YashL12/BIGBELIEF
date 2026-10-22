"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function CopyEmail({ email, dark = true }: { email: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className={`link-underline text-[0.95rem] font-medium ${dark ? "text-white" : "text-[var(--navy-900)]"}`}
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium transition-colors ${
          dark ? "border-white/25 text-[#d6def2] hover:border-white hover:text-white" : "border-[var(--line-strong)] text-[var(--ink-soft)] hover:border-[var(--navy-900)]"
        }`}
        aria-label={`Copy ${email} to clipboard`}
      >
        <Icon name={copied ? "check" : "doc"} size={14} />
        {copied ? "Copied" : "Copy"}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
