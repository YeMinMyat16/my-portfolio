import { Github, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  // Update these links if any of your usernames or WhatsApp country code differs.
  const WHATSAPP_LINK = "https://wa.me/601172318448"
  const LINKEDIN_LINK = "https://www.linkedin.com/in/ye-min-myat"
  const GITHUB_LINK = "https://github.com/YeMinMyat16"

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-20 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="animate-fade-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h2>
          <p className="animate-fade-up animate-delay-100 mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Reach out directly through the links below.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up animate-delay-200 glass-card rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Chat with me</div>
              </div>
            </div>
          </Link>

          <Link
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up animate-delay-300 glass-card rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">LinkedIn</div>
                <div className="text-xs text-muted-foreground">Connect professionally</div>
              </div>
            </div>
          </Link>

          <Link
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up animate-delay-400 glass-card rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">GitHub</div>
                <div className="text-xs text-muted-foreground">View my code</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
