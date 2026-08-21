import { useProjects } from '../hooks/useProjects'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'

export const ProjectsSection = () => {
  const { data: projects, isLoading, error } = useProjects()

  if (isLoading) {
    return (
      <section id="projects" className="section-spacing">
        <p className="body-text">Loading projects...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="section-spacing">
        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-300">
          <p className="font-semibold">Error loading projects</p>
          <p className="text-sm mt-1">
            {error instanceof Error ? error.message : 'An error occurred'}
          </p>
        </div>
      </section>
    )
  }

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section id="projects" className="section-spacing border-t border-border-color pt-section">
      <SectionHeading eyebrow="Work">Projects</SectionHeading>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-bg-secondary rounded-lg p-8 border transition-colors ${
              index === 0
                ? 'border-accent/60 shadow-lg shadow-accent/5'
                : 'border-border-color hover:border-accent/50'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="eyebrow mb-2">{String(index + 1).padStart(2, '0')}</p>
                <h4 className="heading-4 text-text-primary">{project.title}</h4>
                {project.company && (
                  <p className="text-sm md:text-base text-accent font-medium mt-2">
                    {project.company}
                  </p>
                )}
                {project.period && (
                  <p className="text-sm text-text-secondary mt-1">{project.period}</p>
                )}
              </div>
            </div>
            <p className="body-text text-text-secondary mb-6">{project.description}</p>

            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">Features</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="body-text-sm text-text-secondary flex gap-3">
                      <span className="text-accent font-bold flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="accent">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">Highlights</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="body-text-sm text-text-secondary flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
