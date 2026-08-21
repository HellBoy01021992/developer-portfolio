import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await portfolioApi.getProfile()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
