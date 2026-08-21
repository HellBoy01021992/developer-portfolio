import { motion } from 'framer-motion'
import { useAwards } from '../hooks/useAwards'
import { useCertifications } from '../hooks/useCertifications'
import { useEducation } from '../hooks/useEducation'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const getYear = (date?: string) => date?.slice(0, 4)

export const CredentialsSection = () => {
  const educationQuery = useEducation()
  const certificationsQuery = useCertifications()
  const awardsQuery = useAwards()

  const isLoading =
    educationQuery.isLoading || certificationsQuery.isLoading || awardsQuery.isLoading
  const error = educationQuery.error || certificationsQuery.error || awardsQuery.error

  if (isLoading) {
    return (
      <section id="credentials" className="section-spacing border-t border-border-color pt-section">
        <Container>
          <p className="body-text">Loading credentials...</p>
        </Container>
      </section>
    )
  }

  if (error) {
    return (
      <section id="credentials" className="section-spacing border-t border-border-color pt-section">
        <Container>
          <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-300">
            <p className="font-semibold">Error loading credentials</p>
            <p className="text-sm mt-1">
              {error instanceof Error ? error.message : 'An error occurred'}
            </p>
          </div>
        </Container>
      </section>
    )
  }

  const education = educationQuery.data || []
  const certifications = certificationsQuery.data || []
  const awards = awardsQuery.data || []

  return (
    <section id="credentials" className="section-spacing border-t border-border-color pt-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <SectionHeading eyebrow="Credentials">Education &amp; Recognition</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <motion.section className="lg:col-span-1" variants={sectionVariants}>
              <h3 className="eyebrow mb-5">Education</h3>
              <div className="space-y-6">
                {education.map((entry) => (
                  <article key={`${entry.degree}-${entry.institution}`}>
                    <h4 className="text-xl md:text-2xl font-semibold text-text-primary">
                      {entry.degree}
                    </h4>
                    <p className="text-base text-accent mt-2">{entry.institution}</p>
                    {entry.location && (
                      <p className="body-text-sm mt-1">{entry.location}</p>
                    )}
                    {entry.start_year && entry.end_year && (
                      <p className="text-sm text-text-secondary mt-3">
                        {entry.start_year} — {entry.end_year}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section className="lg:col-span-1" variants={sectionVariants}>
              <h3 className="eyebrow mb-5">Certifications</h3>
              <ul className="divide-y divide-border-color border-y border-border-color">
                {certifications.map((certification) => (
                  <li key={certification.title} className="py-4 text-text-primary">
                    {certification.title}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section className="lg:col-span-1" variants={sectionVariants}>
              <h3 className="eyebrow mb-5">Recognition</h3>
              <ol className="border-l border-border-color pl-5 space-y-6">
                {awards.map((award) => (
                  <li key={`${award.title}-${award.date || 'undated'}`} className="relative">
                    <span className="absolute -left-[1.6rem] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    {getYear(award.date) && (
                      <p className="text-sm font-semibold text-accent">{getYear(award.date)}</p>
                    )}
                    <h4 className="text-base font-semibold text-text-primary mt-1">
                      {award.title}
                    </h4>
                    {award.issuer && <p className="body-text-sm mt-1">{award.issuer}</p>}
                  </li>
                ))}
              </ol>
            </motion.section>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}