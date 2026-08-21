import { useProfile } from '../hooks/useProfile'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { motion } from 'framer-motion'

const resumeUrl = '/documents/Subhradip_Roy_Resume.pdf'

const technologies = [
  'PHP',
  'Laravel',
  'Yii2',
  'Node.js',
  'TypeScript',
  'React',
  'Backstage',
  'SnapLogic',
  'Okta',
  'SCIM',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const HeroSection = () => {
  const { data: profile, isLoading, error } = useProfile()

  if (isLoading) {
    return (
      <section id="home" className="section-spacing pt-section border-b border-border-color">
        <div className="container-max text-center">
          <p className="body-text">Loading hero...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="home" className="section-spacing pt-section border-b border-border-color">
        <div className="container-max">
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-300">
            <p className="font-semibold">Error loading profile</p>
            <p className="text-sm mt-1">
              {error instanceof Error ? error.message : 'An error occurred'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (!profile) return null

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section-spacing pt-section border-b border-border-color">
      <motion.div
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p variants={itemVariants} className="eyebrow mb-6">
          Senior Software Engineer
        </motion.p>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="heading-1 mb-4">
          {profile.name}
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="text-2xl font-semibold text-accent mb-8 max-w-2xl"
        >
          {profile.headline}
        </motion.p>

        {/* Summary */}
        <motion.p variants={itemVariants} className="body-text max-w-2xl mb-10 text-text-secondary">
          {profile.professional_summary}
        </motion.p>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wide">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex gap-4 mb-16 flex-wrap">
          <button
            onClick={handleViewProjects}
            className="bg-accent text-bg-primary px-6 py-3 font-medium rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary hover:bg-sky-400 transition-colors"
            aria-label="View Projects - scroll to projects section"
          >
            View Projects
          </button>
          <Button href={resumeUrl} download="Subhradip_Roy_Resume.pdf" size="lg" variant="secondary">
            Download Resume
          </Button>
        </motion.div>

        {/* Credibility Strip */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 pt-12 border-t border-border-color/50 md:grid-cols-3 sm:grid-cols-3 grid-cols-1"
        >
          <div>
            <p className="font-bold text-accent text-lg mb-2">8+ Years</p>
            <p className="body-text-sm text-text-secondary">Development Experience</p>
          </div>
          <div>
            <p className="font-bold text-accent text-lg mb-2">Enterprise Systems</p>
            <p className="body-text-sm text-text-secondary">APIs & Integrations</p>
          </div>
          <div>
            <p className="font-bold text-accent text-lg mb-2">Technical Leadership</p>
            <p className="body-text-sm text-text-secondary">Team & Product</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
