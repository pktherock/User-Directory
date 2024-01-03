import { createContext, useContext } from "react";

export const PostContext = createContext({
  posts: [],
  loading: false,
  error: null
});

export const PostProvider = PostContext.Provider;

const usePost = () => useContext(PostContext);

export default usePost;
