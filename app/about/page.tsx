import type { Metadata } from "next"

import { SiteChrome } from "@/components/site-chrome"
import { site } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About",
  description: `Mission and leadership at ${site.legalName}.`,
}

export default function AboutPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.14em] text-[#515f74] uppercase dark:text-muted-foreground">
          About us
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0d1c2d] dark:text-foreground">
          Who we are
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-[#515f74] dark:text-muted-foreground">
          <p>
            <strong className="font-semibold text-[#0d1c2d] dark:text-foreground">{site.legalName}</strong> builds
            reliable software and applied AI for teams that need serious engineering—not slide decks. We focus on clear
            architecture, measurable outcomes, and long-term maintainability.
          </p>
          <p>
            Our mission is to strengthen how organizations design, ship, and operate digital products, with particular
            attention to intelligent systems that integrate safely into real workflows.
          </p>
          <p>
            From Nairobi, we combine regional understanding with the same technical bar you would expect from a global
            product engineering partner.
          </p>
        </div>

        <div className="mt-16 rounded-xl bg-white/90 p-8 dark:bg-card/60 sm:p-10">
          <h2 className="text-sm font-semibold tracking-wide text-[#0d1c2d] uppercase dark:text-foreground">
            Leadership
          </h2>
          <p className="mt-4 text-lg font-semibold text-[#0d1c2d] dark:text-foreground">{site.founder.name}</p>
          <p className="text-sm text-[#515f74] dark:text-muted-foreground">{site.founder.role}</p>
          <p className="mt-6 text-base leading-relaxed text-[#515f74] dark:text-muted-foreground">
            {site.founder.name} leads strategy and engineering direction for {site.shortName}, guiding how the company
            invests in AI platforms, product delivery, and partnerships. This profile is provided so partners and
            reviewers can understand the people behind the work—not just the brand.
          </p>
        </div>
      </div>
    </SiteChrome>
  )
}
