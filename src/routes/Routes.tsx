import { createBrowserRouter } from "react-router-dom";
import { Home } from "../screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
