import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./components/layout/AppLayout";
import ShoppingCart from "./components/cart/ShoppingCart";
import NotFoundPage from "./ui/NotFoundPage";

import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Homepage from "./pages/Homepage";
import Account from "./pages/Account";

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
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="settings" element={<Account />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-right"
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
            backgroundColor: "rgb(22 163 74)",
            color: "rgb(241 245 249)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
