import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, MusicPage } from "./pages/index.js";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import ThemeChange from "./components/ThemeChange.jsx";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/music",
        element: <MusicPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeChange>
        <RouterProvider router={router} />
      </ThemeChange>
    </Provider>
  </PersistGate>
);
