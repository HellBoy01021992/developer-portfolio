import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'
import { SocialLinks } from '../types'

export const useSocialLinks = () => {
  return useQuery<SocialLinks>({
    queryKey: ['social-links'],
    queryFn: async () => {
      const response = await portfolioApi.getSocialLinks()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}