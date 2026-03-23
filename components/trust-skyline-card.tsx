import { cn } from "@/lib/utils"

/** Stylized grayscale skyline + overlay to match Stitch “Foundation of Trust” card. */
export function TrustSkylineCard({
  impactTitle,
  impactBody,
  className,
}: {
  impactTitle: string
  impactBody: string
  className?: string
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-300 shadow-[0_32px_64px_-32px_rgba(13,28,45,0.35)] sm:aspect-[5/6] lg:aspect-[3/4] dark:bg-zinc-800 dark:shadow-none">
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-400 dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-900"
          aria-hidden
        />
        <svg
          className="absolute bottom-0 left-0 h-[58%] w-full text-zinc-500 dark:text-zinc-600"
          viewBox="0 0 480 200"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden
        >
          <rect x="0" y="95" width="28" height="105" fill="currentColor" opacity="0.85" />
          <rect x="32" y="120" width="22" height="80" fill="currentColor" opacity="0.75" />
          <rect x="58" y="70" width="36" height="130" fill="currentColor" opacity="0.9" />
          <rect x="98" y="105" width="26" height="95" fill="currentColor" opacity="0.8" />
          <rect x="128" y="55" width="42" height="145" fill="currentColor" />
          <rect x="174" y="88" width="30" height="112" fill="currentColor" opacity="0.82" />
          <rect x="208" y="100" width="24" height="100" fill="currentColor" opacity="0.78" />
          <rect x="236" y="65" width="38" height="135" fill="currentColor" opacity="0.92" />
          <rect x="278" y="110" width="32" height="90" fill="currentColor" opacity="0.8" />
          <rect x="314" y="85" width="28" height="115" fill="currentColor" opacity="0.85" />
          <rect x="346" y="72" width="40" height="128" fill="currentColor" />
          <rect x="390" y="98" width="26" height="102" fill="currentColor" opacity="0.76" />
          <rect x="420" y="115" width="32" height="85" fill="currentColor" opacity="0.8" />
          <rect x="456" y="125" width="24" height="75" fill="currentColor" opacity="0.7" />
        </svg>
        <p
          className="pointer-events-none absolute bottom-[32%] left-1/2 -translate-x-1/2 font-serif text-4xl italic text-white/35 sm:text-5xl dark:text-white/20"
          aria-hidden
        >
          Nairobi
        </p>
        <div className="absolute right-4 bottom-4 left-4 rounded-md bg-zinc-800/95 px-5 py-5 text-white dark:bg-zinc-950/95">
          <p className="text-[0.65rem] font-bold tracking-[0.2em]">{impactTitle}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{impactBody}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              i === 0 ? "bg-[#0d1c2d] dark:bg-foreground" : "bg-zinc-300 dark:bg-zinc-600"
            )}
          />
        ))}
      </div>
    </div>
  )
}
