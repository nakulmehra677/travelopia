import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import FlightDetails from "../pages/flight-details";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      <div className="container">
        <Home />
      </div>
    ),
  },
  {
    path: "/flight-details/:id",
    element: (
      <div className="container">
        <FlightDetails />
      </div>
    ),
  },
]);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
