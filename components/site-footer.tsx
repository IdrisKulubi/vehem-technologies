import Link from "next/link"

import { footerLegal, nav, site } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[#eef4ff] dark:bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#515f74] uppercase dark:text-muted-foreground">
              {site.legalName}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
              {site.tagline}. Headquartered in Nairobi with global engineering standards.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-[#0d1c2d] uppercase dark:text-foreground">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#515f74] transition-colors hover:text-[#0d1c2d] dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-[#0d1c2d] uppercase dark:text-foreground">
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              {footerLegal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#515f74] transition-colors hover:text-[#0d1c2d] dark:text-muted-foreground dark:hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-[#0d1c2d]/[0.08] pt-8 text-sm text-[#515f74] dark:border-border dark:text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vehem Technologies Limited. All rights reserved.</p>
          <p className="text-xs sm:text-sm">
            <a
              href={`https://${site.domain}`}
              className="underline-offset-4 hover:underline"
            >
              {site.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
