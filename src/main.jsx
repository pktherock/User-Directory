import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { UserContextProvider, PostContextProvider } from "./contexts";

// Todo: Change back into redux toolkit for better performance
// Provide all contexts at root level to have access in whole app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
