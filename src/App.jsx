import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./components/client/layout/AppLayout";
import ShoppingCart from "./components/client/cart/ShoppingCart";
import NotFoundPage from "./ui/NotFoundPage";

import Shop from "./pages/client/Shop";
import ProductPage from "./pages/client/ProductPage";
import CheckoutPage from "./pages/client/CheckoutPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AllProducts from "./pages/admin/AllProducts";
import AddProducts from "./pages/admin/AddProducts";
import Homepage from "./pages/client/Homepage";
import OrdersPage from "./pages/admin/OrderPage";
import OrderDetails from "./components/admin/order/OrderDetails";
import AsingDeiver from "./components/admin/dashboard/AsingDeiver";
import Dashboard from "./pages/admin/Dashboard";
import Categories from "./pages/admin/Categories";
import AdminProductPage from "./pages/admin/AdminProductPage";

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
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addproduct" element={<AddProducts />} />
            <Route path="categories" element={<Categories />} />
            <Route path="allproduct" element={<AllProducts />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="orders/:orderId" element={<OrderDetails />} />
            <Route path="product/:productId" element={<AdminProductPage />} />
            <Route path="orders/:orderId/driver" element={<AsingDeiver />} />
          </Route>

          <Route path="admin" element={<NotFoundPage />} />
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
