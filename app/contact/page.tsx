import type { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
import { IconClock, IconEnvelope, IconMapPin, IconPhone } from "@/components/icons-inline"
import { SiteChrome } from "@/components/site-chrome"
import { site } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.legalName}: address, hours, email, phone, and inquiry form.`,
}

const mapQuery = encodeURIComponent(
  "Nyayo View Suites, Kisauni Road, Nairobi West, Nairobi, Kenya"
)
const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&hl=en&z=15&output=embed`

export default function ContactPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.14em] text-[#515f74] uppercase dark:text-muted-foreground">
          Contact us
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0d1c2d] dark:text-foreground">
          Reach the team
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#515f74] dark:text-muted-foreground">
          Use the form to open a structured email to {site.email}, or contact us directly using the details below. Our
          headquarters address matches company registration records.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <IconMapPin className="mt-0.5 size-6 shrink-0 text-[#0d1c2d] dark:text-foreground" />
              <div>
                <h2 className="text-sm font-semibold text-[#0d1c2d] dark:text-foreground">Address</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#515f74] dark:text-muted-foreground">
                  {site.legalName}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.country}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <IconEnvelope className="mt-0.5 size-6 shrink-0 text-[#0d1c2d] dark:text-foreground" />
              <div>
                <h2 className="text-sm font-semibold text-[#0d1c2d] dark:text-foreground">Email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block text-sm text-[#515f74] underline-offset-4 hover:underline dark:text-muted-foreground"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <IconPhone className="mt-0.5 size-6 shrink-0 text-[#0d1c2d] dark:text-foreground" />
              <div>
                <h2 className="text-sm font-semibold text-[#0d1c2d] dark:text-foreground">Telephone</h2>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="mt-2 inline-block text-sm text-[#515f74] underline-offset-4 hover:underline dark:text-muted-foreground"
                >
                  {site.phone.display}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <IconClock className="mt-0.5 size-6 shrink-0 text-[#0d1c2d] dark:text-foreground" />
              <div>
                <h2 className="text-sm font-semibold text-[#0d1c2d] dark:text-foreground">Business hours</h2>
                <p className="mt-2 text-sm text-[#515f74] dark:text-muted-foreground">{site.hours}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-[0_24px_48px_-28px_rgba(13,28,45,0.25)] dark:bg-card">
              <iframe
                title="Map: Nyayo View Suites, Kisauni Road, Nairobi West"
                src={mapEmbedSrc}
                className="aspect-[4/3] h-auto min-h-[240px] w-full border-0 sm:min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#0d1c2d] dark:text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-[#515f74] dark:text-muted-foreground">
              Submitting opens your email client with your message pre-filled to {site.email}.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  )
}
