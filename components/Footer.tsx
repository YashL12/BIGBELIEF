import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { CopyEmail } from "./CopyEmail";

export function Footer() {
  const social = [
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "GitHub", href: site.social.github },
  ].filter((s) => s.href);

  return (
    <footer className="section-dark on-dark">
      <div className="container-bb pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" aria-label="BigBelief Solutions, home" className="inline-block rounded-md bg-white px-3 py-2">
              <Image src="/logo.webp" alt="BigBelief Solutions" width={130} height={38} className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] text-[#b9c6e6]">{site.tagline}</p>
            <div className="mt-6">
              <CopyEmail email={site.email} />
            </div>
            {social.length > 0 && (
              <ul className="mt-5 flex gap-4 text-sm">
                {social.map((s) => (
                  <li key={s.label}>
                    <a className="link-underline text-white" href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8">
            {Object.entries(footerNav).map(([title, links]) => (
              <div key={title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--cyan-300)]">{title}</h2>
                <ul className="mt-4 space-y-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[0.93rem] text-[#d6def2] transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#93a3cc] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BigBelief Solutions. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
