import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import Login from "../components/views/Login";
const Product = React.lazy(() => import("../components/views/Product"));
const Cart = React.lazy(() => import("../components/views/Cart"));
const NotFound = React.lazy(() => import("../components/views/NotFound"));
const Home = React.lazy(() => import("../components/views/Home"));
// const Product = React.lazy(() => import("./views/Product"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
