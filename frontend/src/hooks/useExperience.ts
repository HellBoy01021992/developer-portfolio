import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'

export const useExperience = () => {
  return useQuery({
    queryKey: ['experience'],
    queryFn: async () => {
      const response = await portfolioApi.getExperience()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
