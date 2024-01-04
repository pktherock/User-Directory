import PropTypes from "prop-types";

import { PostProvider } from "./PostContext";
import { useFetch } from "../../hooks";

function PostContextProvider({ children }) {
  // Fetch all posts
  const [loading, posts, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Provide all keys and values
  return (
    <PostProvider value={{ loading, posts, error }}>{children}</PostProvider>
  );
}

// Define type of props
PostContextProvider.propTypes = {
  children: PropTypes.node,
};

export default PostContextProvider;
