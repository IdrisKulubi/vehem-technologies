import type { Metadata } from "next"
import Link from "next/link"

import { SiteChrome } from "@/components/site-chrome"
import { site } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of ${site.domain} and related services from ${site.legalName}.`,
}

export default function TermsPage() {
  return (
    <SiteChrome>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0d1c2d] dark:text-foreground">Terms of Service</h1>
        <p className="mt-4 text-sm text-[#515f74] dark:text-muted-foreground">Last updated: March 23, 2026</p>
        <p className="mt-8 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
          These terms govern your access to and use of the website at{" "}
          <a href={`https://${site.domain}`} className="underline-offset-4 hover:underline">
            {site.domain}
          </a>{" "}
          operated by <strong className="text-[#0d1c2d] dark:text-foreground">{site.legalName}</strong>. By using the
          site, you agree to these terms.
        </p>

        <section className="mt-12 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Use of the site</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            You may use the site for lawful purposes only. You agree not to attempt to disrupt, scrape, or probe the
            site in ways that could impair security or availability, or to misrepresent your affiliation with us.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Intellectual property</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            Content on this site (including text, graphics, and branding) is owned by {site.shortName} or its licensors
            and is protected by applicable intellectual property laws unless otherwise noted. No rights are granted
            except the limited right to view the site for personal or internal business reference.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Products and services</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            Descriptions of products on this site are informational. Separate agreements govern any commercial
            engagement, licensing, or delivery of software and AI services. Nothing on this site guarantees
            availability, performance, or fitness for a particular purpose unless expressly stated in a signed contract.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Disclaimer</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            The site is provided &quot;as is&quot; to the extent permitted by law. We disclaim warranties not expressly
            stated here and are not liable for indirect or consequential damages arising from your use of the site,
            except where such limitations are not permitted by applicable law.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Changes</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            We may update these terms from time to time. Continued use after changes constitutes acceptance of the
            revised terms. Material changes will be reflected by updating the date above.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Contact</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            For legal or contractual questions, contact us via{" "}
            <Link href="/contact" className="underline-offset-4 hover:underline">
              Contact
            </Link>{" "}
            or{" "}
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </section>
      </article>
    </SiteChrome>
  )
}
