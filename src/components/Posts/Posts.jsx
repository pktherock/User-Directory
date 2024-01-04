import PropTypes from "prop-types";

import { usePost } from "../../contexts";
import Post from "./Post";

function Posts({ userId }) {
  const { posts } = usePost();

  // Filter all users post based on userId
  const userAllPost = posts.filter((post) => post.userId.toString() === userId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4  md:text-lg">
      {userAllPost.length === 0 && (
        <h1 className="text-2xl text-center">No Post found</h1>
      )}

      {userAllPost.map((post) => (
        <Post key={post.id} postInfo={post} />
      ))}
    </div>
  );
}

Posts.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Posts;
