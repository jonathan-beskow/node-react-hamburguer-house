import { createBrowserRouter } from "react-router";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";


const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default route;