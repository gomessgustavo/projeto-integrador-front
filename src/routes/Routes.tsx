import { createBrowserRouter } from "react-router-dom";
import { Home, Adoption } from "../screens";
import { BasePage } from "../components/base-page/base-page.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adocao",
    element: (
      <BasePage component={<Adoption />} title="Adote com consciência!" />
    ),
  },
]);
