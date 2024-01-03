import PropTypes from "prop-types";
import { PostProvider } from "./PostContext";
import { useFetch } from "../../hooks";

function PostContextProvider({ children }) {
  const [loading, posts, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <PostProvider value={{ loading, posts, error }}>{children}</PostProvider>
  );
}

PostContextProvider.propTypes = {
  children: PropTypes.node,
};

export default PostContextProvider;
