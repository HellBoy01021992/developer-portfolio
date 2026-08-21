import { useSkills } from '../hooks/useSkills'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { motion } from 'framer-motion'

// Map skill categories to capability areas with custom labels
const capabilityMapping = {
  backend: { label: 'Backend Engineering', order: 1 },
  frontend: { label: 'Frontend Development', order: 2 },
  enterprise_and_integration: { label: 'Platform & Integration', order: 3 },
  infrastructure_and_tools: { label: 'Infrastructure & Data', order: 4 },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const AboutSection = () => {
  const { data: skills, isLoading, error } = useSkills()

  if (isLoading) {
    return (
      <section id="about" className="section-spacing border-t border-border-color pt-section">
        <div className="container-max text-center">
          <p className="body-text">Loading capabilities...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="about" className="section-spacing border-t border-border-color pt-section">
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

  // Build capability areas from API data
  const capabilities = Object.entries(capabilityMapping)
    .map(([key, config]) => ({
      id: key,
      label: config.label,
      order: config.order,
      technologies: skills[key] || [],
    }))
    .filter((cap) => cap.technologies.length > 0)
    .sort((a, b) => a.order - b.order)

  return (
    <section id="about" className="section-spacing border-t border-border-color pt-section">
      <motion.div
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionHeading eyebrow="Expertise">About My Work</SectionHeading>

        <motion.p variants={itemVariants} className="body-text text-text-secondary max-w-2xl mb-12">
          I specialize in building robust backend systems, designing scalable APIs, and integrating
          enterprise platforms. With expertise in PHP, Laravel, Node.js, and full-stack technologies,
          I focus on solving complex technical challenges and architecting solutions for modern
          development workflows.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.id}
              className="border border-border-color rounded-lg p-6 bg-bg-secondary/50"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">{capability.label}</h3>
              <div className="flex flex-wrap gap-2">
                {capability.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
