import PropTypes from "prop-types";

function Post({ postInfo }) {
  const { title, body } = postInfo;

  return (
    <div className="border rounded-lg shadow-lg p-4 cursor-pointer">
      <p><span className="font-semibold">Title :</span> {title}</p>
      <p><span className="font-semibold">Body : </span>{body}</p>
    </div>
  );
}

Post.propTypes = {
  postInfo: PropTypes.object.isRequired,
};

export default Post;
