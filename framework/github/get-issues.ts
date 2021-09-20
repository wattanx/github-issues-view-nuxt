import { IHttpClient } from '../HttpClient/IHttpClient';
import { getPageInfo } from './GitHubUtils';
import { GitHubIssueType, IssueType } from '~/types';

export type GetIssuesReturnType = {
  issues: IssueType[];
  prevPage: number;
  currentPage: number;
  nextPage: number;
  lastPage: number;
};

export const getIssues = async (
  client: IHttpClient,
  pageNumber: string,
  perPage: string,
): Promise<GetIssuesReturnType> => {
  const res = await client.get<GitHubIssueType[]>(
    `https://api.github.com/repos/facebook/react/issues?page=${pageNumber}&per_page=${perPage}`,
  );

  if (res.data.length === 0) {
    const error = new Error('There is no data.');
    throw error;
  }

  const issues: IssueType[] = res.data.map((x) => {
    return {
      title: x.title,
      body: x.body,
      issueNumber: x.number,
      state: x.state,
    };
  });
  const pageInfo = getPageInfo(res.headers);
  return {
    issues,
    prevPage: parseInt(pageNumber) - 1,
    currentPage: parseInt(pageNumber),
    nextPage: parseInt(pageNumber) + 1,
    lastPage: parseInt(pageInfo.last),
  };
};
