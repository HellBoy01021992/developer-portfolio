import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'
import { Award } from '../types'

export const useAwards = () => {
  return useQuery<Award[]>({
    queryKey: ['awards'],
    queryFn: async () => {
      const response = await portfolioApi.getAwards()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}