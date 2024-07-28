import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/righteous";
import ErrorPage from "./error-page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Components/Menu.jsx";
import Drink from "./Components/menu_type/Drink.jsx";
import Salad from "./Components/menu_type/Salad.jsx";
import Special from "./Components/menu_type/Special.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "menu",
    element: <Menu />,
    children: [
      {
        path: "salad",
        element: <Salad />,
      },
      {
        path: "special",
        element: <Special />,
      },
      {
        path: "drink",
        element: <Drink />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
