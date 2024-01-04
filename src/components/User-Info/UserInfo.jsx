import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../contexts";
import Watch from "../Watch/Watch";
import Profile from "./Profile";
import Posts from "../Posts/Posts";

function UserInfo() {
  const { users } = useUser();
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = users?.find((user) => user.id.toString() === userId);

  if (!user) {
    return <p className="text-center text-2xl">User not found</p>;
  }

  return (
    <div className="mt-5 px-6">
      <div className="md:flex md:justify-between">
        <div className="my-2">
          <button
            className="px-3 py-1 md:px-5 bg-gray-400 hover:bg-gray-300 rounded-lg font-semibold md:text-xl"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <Watch />
      </div>

      <h1 className="text-3xl text-center font-semibold mt-2">Profile Page</h1>
      <Profile userInfo={user} />

      <h1 className="text-2xl text-center font-semibold mt-2">All Posts</h1>
      <Posts userId={userId} />
    </div>
  );
}

export default UserInfo;
