import { useQuery } from '@tanstack/react-query'
import type { GetRoomsResponse } from '@/http/types/get-rooms-response.ts'
import { api } from '@/services/api.ts'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await api.get('/rooms')
      const result: GetRoomsResponse = response.data

      return result
    },
  })
}
