import { createContext, useContext } from "react";

export const UserContext = createContext({
  users: [],
  loading: false,
  error: null,
});

export const UserProvider = UserContext.Provider;

const useUser = () => useContext(UserContext);

export default useUser;
