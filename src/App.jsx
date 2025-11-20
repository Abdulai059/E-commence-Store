import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./components/layout/AppLayout";
import { BrowserRouter, Routes } from "react-router-dom";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* <BrowserRouter>
        <Routes>
          <Route>
           
          </Route>
        </Routes>
      </BrowserRouter> */}

      <AppLayout />
    </QueryClientProvider>
  );
}

export default App;
