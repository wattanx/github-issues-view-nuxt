import DOMPurify from 'dompurify';
import { toHtml } from '../markdown';
import { IHttpClient } from '~/framework';
import { GitHubIssueType, IssueType } from '~/types';

export const getIssue = async (client: IHttpClient, issueNumber: string) => {
  const res = await client.get<GitHubIssueType>(
    `https://api.github.com/repos/facebook/react/issues/${issueNumber}`,
  );

  if (!res.data.title) {
    const error = new Error('There is no data.');
    throw error;
  }

  const html = DOMPurify().sanitize(toHtml(res.data.body));
  const issues: IssueType = {
    title: res.data.title,
    body: html,
    state: res.data.state,
    issueNumber: res.data.number,
  };
  return issues;
};
