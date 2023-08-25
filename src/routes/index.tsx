import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import AdminLayout from "../layouts/adminLayout";
import AdminProduct from "../features/admin/product";
import AddProduct from "../features/admin/product/addProduct";
import EditProduct from "../features/admin/product/editProduct";
import Cart from "../components/Cart";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ProductDetail from "../components/ProductDetail";
import HomePage from "../features/user/homepage";

export const router = createBrowserRouter([
  { path: "/", element: <BaseLayout />, children: [
    {index: true, element: <HomePage />},
    {path: "cart", element: <Cart />},
    {path: "signin", element: <SignIn />},
    {path: "signup", element: <SignUp />},
    {path: "product/:id", element: <ProductDetail />}
    
] },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <div>Dashboarh</div> },
      { path: "product", element: <AdminProduct /> },
      { path: "product/add", element: <AddProduct /> },
      { path: "product/:id/edit", element: <EditProduct /> },
    ],
  },
]);
