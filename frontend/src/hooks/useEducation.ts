import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'
import { Education } from '../types'

export const useEducation = () => {
  return useQuery<Education[]>({
    queryKey: ['education'],
    queryFn: async () => {
      const response = await portfolioApi.getEducation()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}