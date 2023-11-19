import { createBrowserRouter } from "react-router-dom";
import { Home, Login } from "../screens";
import { PrivateRoute } from "../components/private/private.component";

export interface IRouteProp {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
}

export const routes: IRouteProp[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    isPrivate: true,
  },
];

export const router = createBrowserRouter(
  routes.map(({ path, isPrivate, element: el }) => {
    const element = isPrivate ? <PrivateRoute children={el} /> : el;
    return {
      path,
      element,
    };
  })
);
