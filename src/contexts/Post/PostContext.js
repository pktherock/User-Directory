import { createContext, useContext } from "react";

// Post Context
export const PostContext = createContext({
  posts: [],
  loading: false,
  error: null,
});

// Post Provider
export const PostProvider = PostContext.Provider;

// Custom usePost hook to have access of all context key
const usePost = () => useContext(PostContext);

export default usePost;
