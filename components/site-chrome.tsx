import type { ReactNode } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-[#f8f9ff] text-[#0d1c2d] dark:bg-background dark:text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
