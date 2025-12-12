import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLoyaut from "../loyauts/MainLoyaut";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLoyaut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
