"use client"

import * as React from "react"
import Link from "next/link"
import { List, X } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { headerNav, site } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#0d1c2d]/8 bg-[#f8f9ff]/85 backdrop-blur-xl dark:border-border dark:bg-background/85">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="min-w-0 text-left transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span className="block truncate text-sm font-bold tracking-[0.06em] text-[#0d1c2d] uppercase sm:text-base dark:text-foreground">
            {site.brandWordmark}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {headerNav.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              className="text-[#515f74] hover:text-[#0d1c2d] dark:text-muted-foreground dark:hover:text-foreground"
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button size="sm" className="ml-3 h-9 rounded-md bg-zinc-950 px-5 text-white hover:bg-zinc-900" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <List className="size-5" />}
        </Button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[#0d1c2d]/8 bg-[#eef4ff] dark:border-border dark:bg-muted/40 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#0d1c2d] transition-colors hover:bg-white/80 dark:text-foreground dark:hover:bg-background/80"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#0d1c2d] transition-colors hover:bg-white/80 dark:text-foreground dark:hover:bg-background/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-2 bg-zinc-950 text-white hover:bg-zinc-900" asChild>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
