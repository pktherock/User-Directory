import PropTypes from "prop-types";

import { UserProvider } from "./UserContext";
import { useFetch } from "../../hooks";
function UserContextProvider({ children }) {
  // Fetch all users
  const [loading, users, error] = useFetch(
    " https://jsonplaceholder.typicode.com/users"
  );

  // Provide all keys and values
  return (
    <UserProvider value={{ loading, users, error }}>{children}</UserProvider>
  );
}

// Define type of props
UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
