import { RouterProvider } from "react-router-dom";

import appRoutes from "./app.routes";
import { usePost } from "./contexts";
import { useUser } from "./contexts";
import "./App.css";

function App() {
  // Get all loading state from all contexts
  const { loading: postLoading, error: postError } = usePost();
  const { loading: userLoading, error: userError } = useUser();

  // make one loading variable
  const loading = postLoading || userLoading;
  const error = postError || userError;

  // loading so, show loading message
  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-2xl text-red-400">Loading...</p>
      </div>
    );
  }

  // Error so, show error message
  if (error) {
    return <h1 className="text-center text-2xl">Error while fetching data</h1>;
  }

  return <RouterProvider router={appRoutes} />;
}

export default App;
