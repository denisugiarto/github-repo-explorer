import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProps } from "../schemas/user";

interface ResultApi {
  incomplete_results: boolean;
  items: UserProps[];
  total_count: number;
}

interface repoItemsResult {
  name: string;
  description: string;
  stargazers_count: number;
}

export const githubApi = createApi({
  reducerPath: "githubApi",
  tagTypes: ["Users"],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.github.com/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<ResultApi, string>({
      query: (username) => ({ url: `search/users?q=${username}&per_page=5` }),
      providesTags() {
        return [{ type: "Users", id: "LIST" }];
      },
    }),
    getUserRepo: build.query<repoItemsResult[], string>({
      query: (user) => ({ url: `users/${user}/repos` }),
      providesTags() {
        return [{ type: "Users", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserRepoQuery } = githubApi;
