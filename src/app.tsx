import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateRoom} from "@/pages/create-room.tsx";
import {Room} from "@/pages/room.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoom />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
