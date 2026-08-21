import { useContact } from '../hooks/useContact'
import { useProfile } from '../hooks/useProfile'
import { useSocialLinks } from '../hooks/useSocialLinks'

export const Footer = () => {
  const { data: profile } = useProfile()
  const { data: contact } = useContact()
  const { data: socialLinks } = useSocialLinks()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-color mt-section-lg">
      <div className="container-max py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-lg font-semibold text-text-primary">
              {profile?.name || 'Developer Portfolio'}
            </p>
            {profile && (
              <p className="body-text-sm mt-2">
                {profile.headline} · {contact?.location || profile.location}
              </p>
            )}
          </div>

          <div className="flex flex-col md:items-end gap-5">
            <nav aria-label="Professional links">
              <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
                {socialLinks?.linkedin && (
                  <li>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-primary focus-ring"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {contact?.email && (
                  <li>
                    <a href={`mailto:${contact.email}`} className="link-primary focus-ring">
                      Email
                    </a>
                  </li>
                )}
                {contact?.phone && (
                  <li>
                    <a
                      href={`tel:+91${contact.phone.replace(/\D/g, '')}`}
                      className="link-primary focus-ring"
                    >
                      Phone
                    </a>
                  </li>
                )}
              </ul>
            </nav>
            <p className="body-text-sm md:text-right">
              &copy; {currentYear} {profile?.name || 'Developer Portfolio'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
