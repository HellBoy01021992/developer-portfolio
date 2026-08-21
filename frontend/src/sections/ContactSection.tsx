import { motion } from 'framer-motion'
import { useContact } from '../hooks/useContact'
import { useSocialLinks } from '../hooks/useSocialLinks'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export const ContactSection = () => {
  const { data: contact, isLoading: contactLoading, error: contactError } = useContact()
  const { data: socialLinks, isLoading: socialLinksLoading, error: socialLinksError } = useSocialLinks()

  return (
    <section id="contact" className="section-spacing border-t border-border-color pt-section">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={contentVariants}>
            <SectionHeading eyebrow="Contact">Let&apos;s Connect</SectionHeading>
            <p className="body-text text-text-secondary max-w-xl">
              Interested in discussing engineering opportunities, backend systems, platform
              engineering, or enterprise integrations?
            </p>
          </motion.div>

          <motion.div variants={contentVariants} className="lg:justify-self-end w-full lg:max-w-sm">
            <div className="border-l-2 border-accent pl-6">
              {contactLoading && (
                <p className="body-text-sm">Loading contact details...</p>
              )}

              {!contactLoading && contactError && (
                <p className="body-text-sm">Contact details are temporarily unavailable.</p>
              )}

              {!contactLoading && !contactError && contact && (
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-text-secondary uppercase tracking-wide text-xs">Email</dt>
                    <dd className="mt-1">
                      <a className="link-primary focus-ring" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-secondary uppercase tracking-wide text-xs">Phone</dt>
                    <dd className="mt-1">
                      <a className="link-primary focus-ring" href={`tel:+91${contact.phone}`}>
                        +91 {contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-secondary uppercase tracking-wide text-xs">Location</dt>
                    <dd className="text-text-primary font-medium mt-1">{contact.location}</dd>
                  </div>
                </dl>
              )}

              {socialLinksLoading && (
                <p className="body-text-sm mt-8">Loading professional links...</p>
              )}

              {!socialLinksLoading && socialLinksError && (
                <p className="body-text-sm mt-8">Professional links are temporarily unavailable.</p>
              )}

              {!socialLinksLoading && !socialLinksError && socialLinks?.linkedin && (
                <Button
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="mt-8"
                >
                  LinkedIn <span aria-hidden="true" className="ml-2">→</span>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}