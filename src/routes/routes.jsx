import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { ROUTER_PATHS } from "./routesPath";
import { Main } from "../pages/Main";
import { ProductDetails } from "../pages/ProductDetails";
import { Catalog } from "../pages/Catalog";
import { Cart } from "../pages/Cart";
import { ProfilePage } from "../pages/ProfilePage";
import { Auth } from "../pages/Auth";
import AuthLayout from "../layouts/AuthLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.product,
        element: <ProductDetails />,
      },
      {
        path: ROUTER_PATHS.catalog,
        element: <Catalog />,
      },
      {
        path: ROUTER_PATHS.cart,
        element: <Cart />,
      },
      {
        path: ROUTER_PATHS.auth,
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Auth />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "*",
        element: <p>Страница не найдена 404.</p>,
      },
    ],
  },
]);
