import { FormEvent, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setUserInput } from "../app/usersSlice";
import Button from "./Button";
import Input from "./Input";

interface UsersResponseProps {
  onSubmit: (username: string) => void;
}

const Form = ({ onSubmit }: UsersResponseProps) => {
  const [username, setUsername] = useState<string>("");
  const dispatch = useAppDispatch();
  const HandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username);
    dispatch(setUserInput(username));
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <Input
          name="username"
          placeholder="Enter username"
          type="search"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </>
  );
};

export default Form;
