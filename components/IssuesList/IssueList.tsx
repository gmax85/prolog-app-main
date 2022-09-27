import { useIssues } from "@api/issue";
import { ProjectLanguage, useProjects } from "@api/project";
import styled from "styled-components";
import { IssueRow } from "./IssuesRow";
import { color, space, textFont } from "@styles/theme";
import { useState } from "react";

const Container = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  text-align: left;
  padding: ${space(3, 6)};
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

export function IssueList() {
  const [page, setPage] = useState(1);
  const projects = useProjects();
  const issuesPage = useIssues(page);

  if (projects.isLoading || issuesPage.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );

  const { items, meta } = issuesPage.data || {};

  return (
    <Container>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Issue</HeaderCell>
            <HeaderCell>Level</HeaderCell>
            <HeaderCell>Events</HeaderCell>
            <HeaderCell>Users</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {(items || []).map((issue) => (
            <IssueRow
              key={issue.id}
              issue={issue}
              projectLanguage={projectIdToLanguage[issue.projectId]}
            />
          ))}
        </tbody>
      </Table>
      <div>
        <div>
          <button
            onClick={() => setPage((page) => page + 1)}
            disabled={page === meta?.totalPages}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((page) => page - 1)}
            disabled={page === 1}
          >
            Next
          </button>
        </div>

        <div>
          Page {meta?.currentPge} of {meta?.totalPages}
        </div>
      </div>
    </Container>
  );
}
