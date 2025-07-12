import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider.tsx";
import { Navigations } from "./navigations/Navigations.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Navigations}>
      </RouterProvider>
    </Provider>
  </StrictMode>
);
