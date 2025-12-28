import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AddProducts from "./pages/AddProducts";
import AllProducts from "./pages/AllProducts";
import Categories from "./pages/Categories";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/AdminProductPage";
import OrderDetails from "./components/order/OrderDetails";
import AsingDeiver from "./components/dashboard/AsingDeiver";
import NotFoundPage from "./components/ui/NotFoundPage";
import { AuthProvider } from "./contexts/AuthContext";
import { store } from "./redux/store";

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
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AdminLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="addproduct" element={<AddProducts />} />
                <Route path="categories" element={<Categories />} />
                <Route path="allproduct" element={<AllProducts />} />
                <Route path="orders" element={<OrderPage />} />
                <Route path="orders/:orderId" element={<OrderDetails />} />
                <Route path="product/:productId" element={<ProductPage />} />
                <Route path="orders/:orderId/driver" element={<AsingDeiver />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Provider>

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

