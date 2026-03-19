import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background gradient orbs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.75 0.15 180) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.15 280) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Profile photo */}
        <div className="animate-fade-up mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 ring-1 ring-border sm:h-36 sm:w-36">
          <div className="relative h-28 w-28 sm:h-36 sm:w-36">
            <Image
              src="/my-portfolio/me.jpeg"
              alt="Ye Min Myat"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 640px) 112px, 144px"
              priority
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full glass-pill px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium text-muted-foreground">Available for work</span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up animate-delay-100 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Computer Science{" "}
          <span className="text-primary">Student</span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up animate-delay-200 mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          I&apos;m a Computer Science student with a strong interest in building efficient and practical
          solutions through technology. I focus on developing my skills in software development, AI,
          and modern systems while gaining hands-on experience through real-world environments.
          <br />
          <br />
          I&apos;m passionate about learning, adapting quickly, and continuously improving to create
          reliable and user-focused applications.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="glass-card inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-foreground"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up animate-delay-400 mt-20 flex justify-center">
          <Link
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to projects"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
