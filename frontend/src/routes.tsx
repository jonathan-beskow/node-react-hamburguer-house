import { createBrowserRouter } from "react-router";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/home/home";
import Layout from "./pages/layout/layout";
import Login from "./pages/login/login";
import Pedidos from "./pages/pedidos/pedidos";
import Register from "./pages/register/register";

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
]);

export default route;
