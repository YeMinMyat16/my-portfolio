const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["React", "Express.js", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Data & ML",
    skills: [
      "Machine Learning",
      "Data Mining",
      "DBSCAN",
      "Market Basket Analysis",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Power BI", "Tableau", "Linux"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="animate-fade-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills
          </h2>
          <p className="animate-fade-up animate-delay-100 mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A snapshot of the technologies I use to build reliable, efficient, and user-focused applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass-card rounded-2xl p-6 animate-fade-up animate-delay-${categoryIndex * 100}`}
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="glass-pill rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
