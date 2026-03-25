import { ProjectCard, type Project } from "./project-card"

const projects: Project[] = [
  {
    id: "community",
    title: "CommunityPulse Reporting System",
    description:
      "Led backend development and team coordination for a 5-member project, implementing secure user authentication and SQL-based complaint management. Worked on system architecture integration end-to-end, then delivered reliable documentation and end-to-end system testing. The result is a dependable, user-friendly community issue reporting platform.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    tags: ["SQL", "Secure Authentication", "Backend Development", "Complaint Management"],
    year: "2025",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/YeMinMyat16-CommunityPulse-Reporting-System",
  },
  {
    id: "fraud",
    title: "Financial Fraud Detection & Personalization System",
    description:
      "Built a fraud-detection pipeline using DBSCAN clustering and anomaly-detection models to analyze ~480k transactions and identify high-risk patterns. Developed and evaluated a hybrid recommender system using Market Basket Analysis and association rules to capture fraud-related behavior signals. Measured performance using ROC-AUC and F1-scores to address evolving fraud behaviors.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
    tags: ["DBSCAN", "Anomaly Detection", "ROC-AUC", "F1-score", "Market Basket Analysis"],
    year: "2025",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/fraud-detection-and-personalization",
  },
  {
    id: "postgrad",
    title: "Postgraduate Progress Tracking System",
    description:
      "Built a modular React frontend with role-based dashboards (Admin, Supervisor, Student) to streamline academic submission workflows. Developed scalable Express.js APIs with optimized MySQL schemas for secure authentication and supervision management. Containerized the full stack using Docker for production-ready deployment.",
    image:
      "/my-portfolio/Post Grad.jpeg?v=2",
    tags: ["React", "Role-Based Dashboards", "Express.js", "MySQL", "Docker"],
    year: "2025",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/pg-progress",
  },
  {
    id: "smart-garden",
    title: "Smart Garden & Robot Monitoring System",
    description:
      "Developed an ESP32-based IoT system to monitor temperature, humidity, soil moisture, and motion. Implemented automated pump control using threshold-based decision logic to support consistent plant care. Integrated cloud dashboards using Blynk and ThingSpeak for real-time visualization, alerts, and remote monitoring, validated through Wokwi simulation.",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=500&fit=crop",
    tags: ["ESP32", "Blynk", "ThingSpeak", "IoT", "Automated Pump Control"],
    year: "2026",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/smart-garden-esp32",
  },
  {
    id: "fitgen",
    title: "FitGen - AI-Powered Wardrobe Stylist",
    description:
      "A modern wardrobe management application that uses AI to help you generate the perfect outfit from your closet. Designed with a sleek, emerald-accented UI, it features dynamic closet management and smart styling recommendations for the modern lifestyle.",
    image:
      "/my-portfolio/images/projects/fitgen.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "AI Stylist"],
    year: "2026",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/FitGen",
    liveUrl: "https://YeMinMyat16.github.io/FitGen/",
  },
  {
    id: "dodge-survive",
    title: "Dodge-Survive",
    description:
      "An adrenaline-pumping, fast-paced arcade game where you play as a bold character dodging a relentless swarm of enemies. Features a robust ability system including Dash, Shield, and Slow-Mo, with dynamic difficulty that scales as you survive longer.",
    image:
      "/my-portfolio/images/projects/dodge_survive.png",
    tags: ["JavaScript", "HTML5 Canvas", "Game Development", "CSS Animations"],
    year: "2026",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/Dodge-Survive",
    liveUrl: "https://YeMinMyat16.github.io/Dodge-Survive/",
  },
  {
    id: "movie-search",
    title: "CineStream - Movie Search App",
    description:
      "A fast and responsive movie search application using the OMDb API. Users can discover movies and TV series, view detailed information, and instantly visit IMDB pages. Built with a modern cinematic theme and beautiful animations.",
    image:
      "/my-portfolio/images/projects/cinestream.png",
    tags: ["React", "Vite", "Tailwind CSS", "OMDb API", "Framer Motion"],
    year: "2026",
    status: "completed",
    githubUrl: "https://github.com/YeMinMyat16/movie-search-app",
    liveUrl: "https://YeMinMyat16.github.io/movie-search-app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="animate-fade-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="animate-fade-up animate-delay-100 mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A collection of projects that highlight my end-to-end engineering skills, evaluation, and impact.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
