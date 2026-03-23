import type { Metadata } from "next"
import Link from "next/link"

import { IconArrowRight } from "@/components/icons-inline"
import { Button } from "@/components/ui/button"
import { SiteChrome } from "@/components/site-chrome"
import { site } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Products & portfolio",
  description: `Current and upcoming products from ${site.legalName}: TrendScout AI, Strathspace, and Continueml.`,
}

export default function ProductsPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.14em] text-[#515f74] uppercase dark:text-muted-foreground">
          Products / portfolio
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#0d1c2d] dark:text-foreground">
          What we build
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#515f74] dark:text-muted-foreground">
          Active and upcoming initiatives from {site.shortName}. Each line reflects real product work in software and
          AI—not placeholder concepts.
        </p>

        <ul className="mt-16 space-y-16 sm:space-y-24">
          {site.products.map((p) => (
            <li key={p.slug} id={p.slug} className="scroll-mt-24">
              <article className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
                <div>
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-[#515f74] uppercase dark:text-muted-foreground">
                    {p.tag}
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0d1c2d] dark:text-foreground">
                    {p.name}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-[#515f74] dark:text-muted-foreground">
                    {p.description}
                  </p>
                  <Button variant="ghost" className="mt-8 gap-1 px-0 text-[#0d1c2d] hover:bg-transparent dark:text-foreground" asChild>
                    <Link href="/contact">
                      Discuss this initiative
                      <IconArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-xl bg-[#eef4ff] p-10 dark:bg-muted/40">
                  <p className="text-sm font-medium text-[#0d1c2d] dark:text-foreground">Status</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
                    We are actively developing and refining this product line with partners and early users. For access,
                    timelines, or collaboration, reach out through{" "}
                    <Link href="/contact" className="font-medium text-[#0d1c2d] underline-offset-4 hover:underline dark:text-foreground">
                      Contact
                    </Link>
                    .
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </SiteChrome>
  )
}
