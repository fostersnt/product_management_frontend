import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = (rourouter = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]));
