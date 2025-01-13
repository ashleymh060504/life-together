import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot, ReactDOM } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
