import { createContext, useContext } from "react";

// User Context
export const UserContext = createContext({
  users: [],
  loading: false,
  error: null,
});

// User Provider
export const UserProvider = UserContext.Provider;

// Custom useUser hook to have access of all context key
const useUser = () => useContext(UserContext);

export default useUser;
