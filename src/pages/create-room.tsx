import {useQuery} from "@tanstack/react-query";
import {api} from "@/services/api.ts";
import {Link} from "react-router-dom";

type GetRoomsAPIResponse = {
  id: string;
  name: string;
}[]

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await api.get('/rooms')
      const result: GetRoomsAPIResponse = response.data
      
      return result
    }
  })
  return (
    <div className="flex flex-col gap-1">
      
      { isLoading && <p>Loading...</p> }
      { data?.map(room => (
        <Link to={`/room/${room.id}`} key={room.id}>{room.name}</Link>
      ))}
      
    </div>
  );
}