import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import "./index.css";
import route from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={route}></RouterProvider>
    </UserProvider>
  </StrictMode>,
);
