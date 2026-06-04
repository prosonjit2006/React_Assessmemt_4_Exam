import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Wrapper from "../layout/Wrapper";
import Cart from "../pages/Cart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default Router;
