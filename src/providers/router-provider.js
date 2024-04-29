import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import React from 'react';

import { Container } from "@mui/material";
import Header from "../components/header";
import FlightDetails from "../pages/flight-details";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      <div>
        <Header />
        <Container>
          <Home />
        </Container>
      </div>
    ),
  },
  {
    path: "/flight-details/:id",
    element: (
      <div>
        <Header />
        <Container
          maxWidth="md"
          style={{
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          <FlightDetails />
        </Container>
      </div>
    ),
  },
]);

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
