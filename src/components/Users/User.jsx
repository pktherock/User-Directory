import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { usePost } from "../../contexts";

function User({ userInfo }) {
  const { name, id } = userInfo;

  // get all posts from post context
  const { posts } = usePost();
  const navigate = useNavigate();

  // count total user posts based on userId
  const totalPost = posts.filter((post) => post.userId === id).length;

  return (
    <div
      className="sm:flex sm:justify-between p-5 border-2 rounded-lg mb-4 shadow-md bg-blue-100 text-xl cursor-pointer"
      onClick={() => navigate(`${id}`)}
    >
      <p>
        <span className="font-medium">Name:</span> {name}
      </p>
      <p>
        <span className="font-medium">Posts:</span> {totalPost}
      </p>
    </div>
  );
}

User.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default User;
