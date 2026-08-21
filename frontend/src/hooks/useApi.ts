import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { apiClient } from '../services/api'

interface UseApiOptions {
  enabled?: boolean;
}

export const useApi = <T,>(
  key: string[],
  endpoint: string,
  options?: UseApiOptions
) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await apiClient.get<{ data: T }>(endpoint)
      return response.data.data
    },
    enabled: options?.enabled !== false,
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useApiError = (error: AxiosError | null) => {
  if (!error) return null
  return error.response?.data || error.message
}
