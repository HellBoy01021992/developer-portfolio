import { useState } from 'react'
import { useExperience } from '../hooks/useExperience'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { ImpactMetric } from '../components/ui/ImpactMetric'
import { motion } from 'framer-motion'
import { Experience } from '../types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const timelineMarkerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: 'backOut' },
  },
}

const TimelineEntry = ({
  experience,
  isCurrent,
  isLast,
}: {
  experience: Experience
  isCurrent: boolean
  isLast: boolean
}) => {
  const [expanded, setExpanded] = useState(false)

  const startDate = experience.start_date
    ? new Date(experience.start_date)
    : null
  const endDate = experience.end_date
    ? new Date(experience.end_date)
    : null

  const startYear = startDate?.getFullYear()
  const endYear = endDate?.getFullYear()

  const dateLabel = isCurrent
    ? `${startYear} — PRESENT`
    : `${startYear}${endYear && startYear !== endYear ? ` — ${endYear}` : ''}`

  const selectedTechs = experience.technologies?.slice(0, 6) || []
  const highlights = experience.highlights || []
  const visibleHighlights = expanded ? highlights : highlights.slice(0, 4)

  return (
    <motion.div
      variants={itemVariants}
      className="relative pb-12 md:pb-16"
    >
      <div className="flex gap-6 md:gap-8">
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            variants={timelineMarkerVariants}
            className={`w-4 h-4 rounded-full border-2 ${
              isCurrent
                ? 'border-accent bg-accent'
                : 'border-text-secondary bg-bg-secondary'
            }`}
          />

          {!isLast && (
            <div
              className={`w-0.5 h-12 md:h-16 mt-2 ${
                isCurrent ? 'bg-accent/50' : 'bg-border-color'
              }`}
            />
          )}
        </div>

        <div className="flex-1 pt-1">
          <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
            {dateLabel}
          </div>

          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
              {experience.position}
            </h3>

            <p className="text-lg text-accent font-medium">
              {experience.company}
            </p>

            {isCurrent && (
              <Badge variant="success" className="mt-3">
                Current Role
              </Badge>
            )}
          </div>

          {experience.company.includes('Xiaomi') && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
                Impact
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <ImpactMetric
                  value="40%"
                  label="API Response Time"
                  description="↓ reduction"
                />
                <ImpactMetric
                  value="20%"
                  label="App Downloads"
                  description="↑ increase"
                />
                <ImpactMetric
                  value="20%"
                  label="WMS Workload"
                  description="↓ reduction"
                />
                <ImpactMetric
                  value="8"
                  label="Engineers"
                  description="Led team"
                />
              </div>
            </div>
          )}

          {experience.company.includes('Gozo') && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
                Impact
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <ImpactMetric
                  value="1,200 → 2,200+"
                  label="Daily Bookings"
                />
                <ImpactMetric
                  value="80%+"
                  label="Booking Growth"
                />
                <ImpactMetric
                  value="25%"
                  label="Cost Reduction"
                  description="↓"
                />
                <ImpactMetric
                  value="50%"
                  label="Satisfaction"
                  description="↑ improvement"
                />
              </div>
            </div>
          )}

          {experience.company.includes('Epitech') && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
                Impact
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <ImpactMetric
                  value="₹1 Cr"
                  label="Annual Revenue"
                  description="contributed"
                />
                <ImpactMetric
                  value="25"
                  label="Dealers"
                  description="supported"
                />
                <ImpactMetric
                  value="12"
                  label="Pilot Dealers"
                  description="onboarded"
                />
              </div>
            </div>
          )}

          {highlights.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
                Key Contributions
              </p>

              <ul className="space-y-2">
                {visibleHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-body-text-sm text-text-secondary flex gap-3"
                  >
                    <span className="text-accent font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {highlights.length > 4 && (
                <button
                  type="button"
                  onClick={() => setExpanded((current) => !current)}
                  className="mt-4 text-sm font-semibold text-accent hover:underline"
                >
                  {expanded
                    ? 'Show less'
                    : `Show ${highlights.length - 4} more contributions`}
                </button>
              )}
            </div>
          )}

          {selectedTechs.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-2">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedTechs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="default"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export const ExperienceSection = () => {
  const { data: experiences, isLoading, error } = useExperience()

  if (isLoading) {
    return (
      <section
        id="experience"
        className="section-spacing border-t border-border-color pt-section"
      >
        <div className="container-max text-center">
          <p className="body-text">Loading career timeline...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section
        id="experience"
        className="section-spacing border-t border-border-color pt-section"
      >
        <div className="container-max">
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-300">
            <p className="font-semibold">Error loading experience</p>
            <p className="text-sm mt-1">
              {error instanceof Error ? error.message : 'An error occurred'}
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (!experiences || experiences.length === 0) {
    return null
  }

  const sorted = [...experiences].sort((a, b) => {
    const dateA = a.start_date ? new Date(a.start_date).getTime() : 0
    const dateB = b.start_date ? new Date(b.start_date).getTime() : 0
    return dateB - dateA
  })

  return (
    <section
      id="experience"
      className="section-spacing border-t border-border-color pt-section"
    >
      <motion.div
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionHeading eyebrow="Career Path">
          Experience & Impact
        </SectionHeading>

        <motion.ol
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sorted.map((experience, index) => (
            <TimelineEntry
              key={`${experience.company}-${experience.position}`}
              experience={experience}
              isCurrent={experience.current === true}
              isLast={index === sorted.length - 1}
            />
          ))}
        </motion.ol>
      </motion.div>
    </section>
  )
}