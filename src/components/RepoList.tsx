import { useGetUserRepoQuery } from "../app/github.service";
import RepoItem from "./RepoItem";

interface RepoListProps {
  username: string;
}

const RepoList = ({ username }: RepoListProps) => {
  const { data } = useGetUserRepoQuery(username);
  const ReposItem = data;
  return (
    <div className="grid gap-4 mt-4">
      {ReposItem &&
        ReposItem.length > 0 &&
        ReposItem.map((repo) => (
          <RepoItem
            title={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
          />
        ))}
    </div>
  );
};

export default RepoList;
