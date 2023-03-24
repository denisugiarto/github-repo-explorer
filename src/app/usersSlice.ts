import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../schemas/user";

interface UsersState {
  users: UserProps[];
  userInput: string;
}

const initialState: UsersState = {
  users: [],
  userInput: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload.users;
    },
    setUserInput(state, action: PayloadAction<string>) {
      state.userInput = action.payload;
    },
  },
});

const usersReducer = usersSlice.reducer;
export const { setUsers, setUserInput } = usersSlice.actions;
export default usersReducer;
