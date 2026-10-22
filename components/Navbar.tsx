"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";
import { Arrow, Icon } from "./Icon";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll, trap Escape, return focus
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
      if (e.key === "Tab" && drawer.current) {
        const f = drawer.current.querySelectorAll<HTMLElement>("a,button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    drawer.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-[var(--line)] bg-white/90 backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-bb flex h-16 items-center justify-between gap-6 md:h-[68px]">
        <Link href="/" aria-label="BigBelief Solutions, home" className="shrink-0">
          <Image src="/logo.webp" alt="BigBelief Solutions" width={140} height={40} priority className="h-9 w-auto md:h-10" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-md px-3.5 py-2 text-[0.92rem] font-medium transition-colors after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded after:bg-[var(--blue-500)] after:transition-transform ${
                    isActive(item.href)
                      ? "text-[var(--navy-900)] after:scale-x-100"
                      : "text-[var(--ink-soft)] hover:text-[var(--navy-900)] after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <Link href="/contact" className="btn btn-primary btn-sm whitespace-nowrap">
              Start a Conversation <Arrow />
            </Link>
          </span>
          <button
            ref={menuBtn}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line-strong)] text-[var(--navy-900)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile drawer: sibling of the header, because backdrop-filter on the
          header would otherwise become the containing block for position:fixed */}
      <div
        id="mobile-menu"
        ref={drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-bb flex min-h-full flex-col py-6">
          <ul className="divide-y divide-[var(--line)]">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-center justify-between py-5 text-[1.6rem] font-semibold tracking-tight text-[var(--navy-900)]"
                  style={{ animation: open ? `none` : undefined, transitionDelay: `${i * 30}ms` }}
                >
                  {item.label}
                  <Icon name="arrow" className="text-[var(--blue-500)]" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link href="/contact" className="btn btn-primary w-full justify-center">
              Start a Conversation <Arrow />
            </Link>
            <p className="mt-5 text-center text-sm text-[var(--ink-mute)]">Technology that solves real business problems.</p>
          </div>
        </nav>
      </div>
    </>
  );
}
