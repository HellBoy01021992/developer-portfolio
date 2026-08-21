import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'
import { Skill } from '../types'

export const useSkills = () => {
  return useQuery<Skill>({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await portfolioApi.getSkills()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}
