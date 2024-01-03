import { useUser } from "../../contexts";
import User from "./User";

function Users() {
  const { users } = useUser();

  return (
    <div className="px-5">
      <h1 className="text-center text-3xl font-semibold my-4">User Directory</h1>
      {users.map((user) => (
        <User key={user.id} userInfo={user} />
      ))}
    </div>
  );
}

export default Users;
