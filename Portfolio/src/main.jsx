// Entry point for React application, setting up routing and rendering the main component
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import changeTabText from "./utils/changeTabText.js";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { Provider } from "react-redux";
import STORE from "./redux/store.js";
import { setTabIndex } from "./redux/tabSlice.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { fetchAllCertifications, fetchAllProjects } from "./utils/fetchData.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

// Create a browser router with routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: () => {
          changeTabText("Home");
          return STORE.dispatch(setTabIndex(0));
        },
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        loader: async () => {
          changeTabText("Portfolio");
          await queryClient.prefetchQuery({
            queryKey: ["projects"],
            queryFn: async () => await fetchAllProjects(),
          });
          return STORE.dispatch(setTabIndex(1));
        },
      },

      {
        path: "about",
        element: <About />,
        loader: async () => {
          changeTabText("About");

          await queryClient.prefetchQuery({
            queryKey: ["certifications"],
            queryFn: async () => await fetchAllCertifications(),
          });

          return STORE.dispatch(setTabIndex(2));
        },
      },

      {
        path: "contact",
        element: <Contact />,
        loader: () => {
          changeTabText("Contact");
          return STORE.dispatch(setTabIndex(3));
        },
      },
    ],
  },
]);

// Render the application root component within React StrictMode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={STORE}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
