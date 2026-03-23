import type { Metadata } from "next"
import Link from "next/link"

import { SiteChrome } from "@/components/site-chrome"
import { site } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles personal data collected through ${site.domain}.`,
}

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-[#0d1c2d] dark:text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#515f74] dark:text-muted-foreground">Last updated: March 23, 2026</p>
        <p className="mt-8 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
          This policy describes how <strong className="text-[#0d1c2d] dark:text-foreground">{site.legalName}</strong> (
          &quot;we&quot;, &quot;us&quot;) processes information when you use{" "}
          <a href={`https://${site.domain}`} className="underline-offset-4 hover:underline">
            {site.domain}
          </a>{" "}
          and related communications. It exists to support transparency for partners, users, and platform reviewers.
        </p>

        <section className="mt-12 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Information we collect</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            We may collect information you voluntarily provide, such as your name, email address, and message content
            when you email us or use contact flows that open your mail client. We may also collect standard technical
            data automatically sent by your browser (for example IP address, approximate region, browser type, and
            pages visited) through hosting and analytics tools we enable.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">How we use information</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            We use contact details to respond to inquiries, operate our website, secure our services, comply with legal
            obligations, and improve how we present our company and products. We do not sell your personal information.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Cookies and similar technologies</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            Our site may use cookies or local storage for essential functionality (for example theme preference where
            applicable) and, if configured, aggregated analytics. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Retention</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            We retain correspondence and related records only as long as needed for the purposes above, including
            legitimate business, legal, or compliance requirements.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Your rights</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict certain
            processing of your personal data. Contact us using the details on our{" "}
            <Link href="/contact" className="underline-offset-4 hover:underline">
              Contact
            </Link>{" "}
            page to make a request.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Contact</h2>
          <p className="text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
            Questions about this policy:{" "}
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
              {site.email}
            </a>
            <br />
            {site.legalName}, {site.address.full}
          </p>
        </section>
      </article>
    </SiteChrome>
  )
}
