import { useState } from "react";
import { useAppSelector } from "./app/hooks";
import Form from "./components/Form";
import UserItem from "./components/UserItem";
import { useGetUsersQuery } from "./app/github.service";
import { UserProps } from "./schemas/user";

function App() {
  const [username, setUsername] = useState<string>("");
  const userInput: string = useAppSelector((state) => state.users.userInput);
  const { isLoading, data, isError, isSuccess } = useGetUsersQuery(username, {
    skip: !username,
  });
  const users: UserProps[] | null | undefined = data?.items;
  return (
    <div className="container mx-auto p-4 mt-2">
      <Form onSubmit={setUsername} />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {users !== undefined ? (
        users?.length > 0 ? (
          <div className="text-gray-800 mt-2">Showing users for "{userInput}"</div>
        ) : (
          <div className="mt-2">Users not found</div>
        )
      ) : (
        ""
      )}
      <div className="grid gap-4 mt-2">
        {!isLoading && isSuccess && 
          users &&
          users?.length > 0 &&
          users.map((user) => <UserItem key={user.id} username={user.login} />)}
      </div>
    </div>
  );
}

export default App;
