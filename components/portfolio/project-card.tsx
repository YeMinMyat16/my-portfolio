import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  year: string
  status: "completed" | "in-progress"
  liveUrl?: string
  githubUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const animationDelay = `animate-delay-${(index % 6) * 100}`
  const hasLinks = Boolean(project.liveUrl || project.githubUrl)

  return (
    <article
      className={`glass-card group overflow-hidden rounded-2xl animate-fade-up ${animationDelay}`}
    >
      {/* Project thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project image`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay with links */}
        {hasLinks && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
                aria-label={`View ${project.title} source code`}
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Project content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="glass-pill rounded-full px-3 py-1 font-mono text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Open ${project.title} live demo`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4 text-xs text-muted-foreground">
          <span>{project.year}</span>
          <span className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "completed" ? "bg-primary" : "bg-yellow-500"
              }`}
            />
            {project.status === "completed" ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>
    </article>
  )
}
