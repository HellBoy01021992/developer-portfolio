import { motion } from 'framer-motion'
import { useSkills } from '../hooks/useSkills'
import { Badge } from '../components/ui/Badge'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const capabilityGroups = [
  { key: 'backend', label: 'Backend Engineering', emphasis: true },
  { key: 'platforms_and_architecture', label: 'Platform & Architecture', emphasis: true },
  { key: 'integration_and_identity', label: 'Integration & Identity', emphasis: true },
  { key: 'frontend', label: 'Frontend Development', emphasis: false },
  { key: 'databases_and_caching', label: 'Data & Infrastructure', emphasis: false },
  { key: 'ai_and_developer_productivity', label: 'AI & Developer Productivity', emphasis: false },
  { key: 'tools_and_leadership', label: 'Leadership & Engineering Practice', emphasis: false },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const SkillsSection = () => {
  const { data: skills, isLoading, error } = useSkills()

  if (isLoading) {
    return (
      <section id="skills" className="section-spacing border-t border-border-color pt-section">
        <div className="container-max">
          <p className="body-text">Loading engineering toolkit...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="skills" className="section-spacing border-t border-border-color pt-section">
        <div className="container-max">
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-300">
            <p className="font-semibold">Error loading skills</p>
            <p className="text-sm mt-1">
              {error instanceof Error ? error.message : 'An error occurred'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (!skills) return null

  return (
    <section id="skills" className="section-spacing border-t border-border-color pt-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <SectionHeading eyebrow="Expertise">Engineering Toolkit</SectionHeading>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {capabilityGroups.map((group) => {
              const technologies = skills[group.key] || []

              if (technologies.length === 0) return null

              return (
                <motion.article
                  key={group.key}
                  className={`border rounded-lg p-6 bg-bg-secondary/50 ${
                    group.emphasis
                      ? 'border-accent/40 md:p-7'
                      : 'border-border-color'
                  }`}
                  variants={itemVariants}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                      {group.label}
                    </h3>
                    {group.emphasis && (
                      <span className="text-xs uppercase tracking-wide text-accent flex-shrink-0">
                        Core
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <Badge key={technology} variant="default">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}