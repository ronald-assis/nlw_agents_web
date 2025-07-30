import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomsRequest } from '@/http/types/create-room-request.ts'
import type { CreateRoomsResponse } from '@/http/types/create-room-response.ts'
import { api } from '@/services/api.ts'

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomsRequest) => {
      const response = await api.post('/rooms', data)

      const result: CreateRoomsResponse = response.data

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-rooms'],
      })
    },
  })
}
