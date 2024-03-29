import { Navigate, createBrowserRouter } from "react-router-dom";
import { UserInfo, Users } from "./components";

// Root Routing configuration
const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="users" />,
  },
  {
    path: "/users",
    children: [
      {
        path: "",
        element: <Users />,
      },
      {
        path: ":userId",
        element: <UserInfo />,
      },
    ],
  },
]);

export default appRoutes;
