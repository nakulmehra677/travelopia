import React from "react";
import ReactDOM from "react-dom/client";

import RouterProvider from "./providers/router-provider";
import ThemeProvider from "./providers/theme-provider";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./providers/error-boundary";
import NetworkProvider from "./providers/network-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ErrorBoundary>
        <NetworkProvider>
          <RouterProvider />
        </NetworkProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
