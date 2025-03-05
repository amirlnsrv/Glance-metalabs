import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { ROUTER_PATHS } from "./routesPath";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <p>Home</p>,
      },
    ],
  },
]);
