import Link from "next/link"

import { IconArrowRight, IconClock, IconMapPin } from "@/components/icons-inline"
import { SiteChrome } from "@/components/site-chrome"
import { TrustSkylineCard } from "@/components/trust-skyline-card"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export default function Page() {
  return (
    <SiteChrome>
      <section className="relative overflow-hidden bg-[#f8f9ff] dark:bg-background">
        {/* Architectural panel — mobile: soft diagonal; desktop: right column */}
        <div
          className="pointer-events-none absolute inset-0 lg:hidden"
          aria-hidden
        >
          <div
            className="absolute top-0 right-0 h-[min(52vh,420px)] w-[min(92vw,520px)] translate-x-[18%] -translate-y-[8%] bg-[#dbe4ef] dark:bg-muted/35"
            style={{
              clipPath: "polygon(38% 0%, 100% 0%, 100% 100%, 0% 92%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid min-h-[min(100svh,56rem)] items-center gap-12 py-16 lg:min-h-[min(100svh-4rem,52rem)] lg:grid-cols-12 lg:gap-6 lg:py-20">
            <div className="relative z-10 lg:col-span-5 xl:col-span-5">
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-[#6b7280] uppercase sm:text-xs dark:text-muted-foreground">
                The Digital Architect
              </p>
              <h1 className="mt-5 text-[2.35rem] font-bold leading-[1.06] tracking-[-0.02em] text-[#0d1c2d] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] dark:text-foreground">
                <span className="block">Engineering the</span>
                <span className="mt-1 block">Future of AI</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[#515f74] sm:text-lg dark:text-muted-foreground">
                {site.heroSubtext}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#6b7280] dark:text-muted-foreground">
                <span className="font-semibold text-[#0d1c2d] dark:text-foreground">{site.legalName}</span>
                {" — "}
                {site.tagline}.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Button
                  size="lg"
                  className="h-11 rounded-md bg-zinc-950 px-8 text-white hover:bg-zinc-900"
                  asChild
                >
                  <Link href="/contact">Partner With Us</Link>
                </Button>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d1c2d] transition-colors hover:text-zinc-700 dark:text-foreground dark:hover:text-foreground/80"
                >
                  Our Portfolio
                  <IconArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="relative hidden min-h-[320px] lg:col-span-7 lg:block xl:min-h-[380px]">
              <div
                className="absolute inset-y-4 left-[8%] right-[-12%] bg-[#dbe4ef] dark:bg-muted/35"
                style={{
                  clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4ff] py-20 dark:bg-muted/25">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#515f74] uppercase dark:text-muted-foreground">
            Case studies
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0d1c2d] sm:text-4xl dark:text-foreground">
            Selected works
          </h2>
          <p className="mt-4 max-w-2xl text-[#515f74] dark:text-muted-foreground">
            High-performance intelligence systems and platforms built for specific domains.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {site.products.map((p) => (
              <li key={p.slug}>
                <article className="flex h-full flex-col rounded-xl bg-white/90 p-8 shadow-[0_24px_48px_-28px_rgba(13,28,45,0.2)] dark:bg-card/80 dark:shadow-none">
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-[#515f74] uppercase dark:text-muted-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-[#0d1c2d] dark:text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
                    {p.description}
                  </p>
                  <Link
                    href={`/products#${p.slug}`}
                    className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-[#0d1c2d] underline-offset-4 hover:underline dark:text-foreground"
                  >
                    View detail
                    <IconArrowRight className="size-4" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f8f9ff] py-20 sm:py-28 dark:bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0d1c2d] sm:text-4xl dark:text-foreground">
                {site.trust.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#515f74] sm:text-lg dark:text-muted-foreground">
                {site.trust.body}
              </p>
              <div className="mt-12 space-y-10">
                <div className="flex gap-4">
                  <IconMapPin className="mt-0.5 size-6 shrink-0 text-[#0d1c2d] dark:text-foreground" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0d1c2d] dark:text-foreground">Corporate Headquarters</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
                      {site.address.line1}, {site.address.line2}
                      <br />
                      {site.address.city}, {site.address.country}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <IconClock className="mt-0.5 size-6 shrink-0 text-[#0d1c2d] dark:text-foreground" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0d1c2d] dark:text-foreground">Operational Hours</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
                      {site.hoursShort}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <TrustSkylineCard impactTitle={site.trust.impactTitle} impactBody={site.trust.impactBody} />
          </div>
        </div>
      </section>

      <section className="bg-[#eef4ff] py-20 dark:bg-muted/25">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0d1c2d] sm:text-3xl dark:text-foreground">
              Start a project
            </h2>
            <p className="mt-4 text-[#515f74] dark:text-muted-foreground">
              Connect with our team to discuss architecture, AI initiatives, or product delivery.
            </p>
            <Button className="mt-8 bg-zinc-950 text-white hover:bg-zinc-900" size="lg" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteChrome>
  )
}
