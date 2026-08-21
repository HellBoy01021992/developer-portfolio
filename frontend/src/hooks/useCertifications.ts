import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'
import { Certification } from '../types'

export const useCertifications = () => {
  return useQuery<Certification[]>({
    queryKey: ['certifications'],
    queryFn: async () => {
      const response = await portfolioApi.getCertifications()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}