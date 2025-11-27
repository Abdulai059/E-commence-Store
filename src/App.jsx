import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./components/layout/AppLayout";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./ui/NotFoundPage";
import Shop from "./pages/Shop";
import ShoppingCart from "./components/cart/ShoppingCart";

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

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<ShoppingCart />} />
          </Route>

           <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>

      <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1500,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
    </QueryClientProvider>
  );
}

export default App;
