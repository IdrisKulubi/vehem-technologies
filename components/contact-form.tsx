"use client"

import * as React from "react"
import { ArrowRight } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent("Inquiry from vehemtechnologies.com")
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-xl bg-white/90 p-6 shadow-[0_40px_80px_-40px_rgba(13,28,45,0.15)] dark:bg-card/90 dark:shadow-none sm:p-8"
    >
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-xs font-semibold tracking-wide uppercase">
          Full name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className="w-full border-0 border-b-2 border-[#c6c6cd] bg-[#eef4ff]/60 px-0 py-3 text-sm outline-none transition-colors focus:border-[#0d1c2d] dark:border-input dark:bg-transparent dark:focus:border-foreground"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-xs font-semibold tracking-wide uppercase">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border-0 border-b-2 border-[#c6c6cd] bg-[#eef4ff]/60 px-0 py-3 text-sm outline-none transition-colors focus:border-[#0d1c2d] dark:border-input dark:bg-transparent dark:focus:border-foreground"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-xs font-semibold tracking-wide uppercase">
          Brief description
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full resize-y border-0 border-b-2 border-[#c6c6cd] bg-[#eef4ff]/60 px-0 py-3 text-sm outline-none transition-colors focus:border-[#0d1c2d] dark:border-input dark:bg-transparent dark:focus:border-foreground"
        />
      </div>
      <Button
        type="submit"
        className="h-10 gap-2 bg-zinc-950 px-6 text-white hover:bg-zinc-900"
      >
        Send inquiry
        <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
      </Button>
    </form>
  )
}
