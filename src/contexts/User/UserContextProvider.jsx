import PropTypes from "prop-types";

import { UserProvider } from "./UserContext";
import { useFetch } from "../../hooks";
function UserContextProvider({ children }) {
  const [loading, users, error] = useFetch(
    " https://jsonplaceholder.typicode.com/users"
  );

  return (
    <UserProvider value={{ loading, users, error }}>{children}</UserProvider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
