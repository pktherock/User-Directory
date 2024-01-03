import { useParams } from "react-router-dom";
import { useUser } from "../../contexts";

function UserInfo() {
  const { users } = useUser();
  const { userId } = useParams();

  const user = users.find((user) => user.id.toString() === userId);

  if (!user) {
    return <p className="text-center text-2xl">User not found</p>;
  }

  return <div>UserInfo</div>;
}

export default UserInfo;
