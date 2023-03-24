export interface UserProps {
  id: number;
  login: string;
  repos_url: string;
}

export interface TopAreaProps {
  onSetUsers: (user: UserProps[] | null) => void;
}

export interface UserDataProps {
  user: UserProps;
}
