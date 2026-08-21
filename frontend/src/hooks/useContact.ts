import { useQuery } from '@tanstack/react-query'
import { portfolioApi } from '../services/api'
import { Contact } from '../types'

export const useContact = () => {
  return useQuery<Contact>({
    queryKey: ['contact'],
    queryFn: async () => {
      const response = await portfolioApi.getContact()
      return response.data.data
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}