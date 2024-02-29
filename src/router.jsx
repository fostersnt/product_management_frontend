import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
const Product = React.lazy(() => import("./views/Product"));
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import Home from "./views/Home";

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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
