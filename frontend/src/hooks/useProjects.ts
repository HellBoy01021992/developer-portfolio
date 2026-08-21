import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await portfolioApi.getProjects()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
