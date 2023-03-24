import { useState } from "react";
import RepoList from "./RepoList";

interface UserItemProps {
  username: string;
}

const UserItem = ({ username }: UserItemProps) => {
  const [isShow, setIsShow] = useState(false);
  
  return (
    <>
      <div
        className="bg-gray-200 p-2 md:p-4 relative cursor-pointer"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {username}
        <span className="absolute top-3 md:top-5 right-3 md:right-5">
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </div>
      {isShow && (
        <div className="bg-white pl-4 py-2">
          <RepoList username={username} />
        </div>
      )}
    </>
  );
};

export default UserItem;
