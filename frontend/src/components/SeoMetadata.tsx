import { useEffect } from 'react'
import { useSocialLinks } from '../hooks/useSocialLinks'

const siteUrl = import.meta.env.VITE_SITE_URL?.trim()
const pageTitle = 'Subhradip Roy — Senior Software Engineer'

export const SeoMetadata = () => {
  const { data: socialLinks } = useSocialLinks()

  useEffect(() => {
    document.title = pageTitle

    const managedElements = [
      document.head.querySelector('link[rel="canonical"]'),
      document.head.querySelector('meta[property="og:url"]'),
      document.head.querySelector('script[data-person-json-ld]'),
    ]
    managedElements.forEach((element) => element?.remove())

    if (siteUrl) {
      const canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = siteUrl
      document.head.appendChild(canonical)

      const openGraphUrl = document.createElement('meta')
      openGraphUrl.setAttribute('property', 'og:url')
      openGraphUrl.content = siteUrl
      document.head.appendChild(openGraphUrl)
    }

    const person: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Subhradip Roy',
      jobTitle: 'Senior Software Engineer',
    }

    if (siteUrl) person.url = siteUrl
    if (socialLinks?.linkedin) person.sameAs = [socialLinks.linkedin]

    const structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.personJsonLd = 'true'
    structuredData.textContent = JSON.stringify(person)
    document.head.appendChild(structuredData)

    return () => {
      document.head.querySelector('link[rel="canonical"]')?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
      document.head.querySelector('script[data-person-json-ld]')?.remove()
    }
  }, [socialLinks?.linkedin])

  return null
}