import { useIssues } from "@api/issue";
import { ProjectLanguage, useProjects } from "@api/project";
import styled from "styled-components";
import { IssueRow } from "./IssuesRow";
import { color, space, textFont } from "@styles/theme";

const Table = styled.table`
  width: 100%;
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
  border-collapse: collapse;
`;
const TableHead = styled.thead`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const HeaderCell = styled.th`
  text-align: left;
  padding: ${space(3, 6)};
  color: ${color("gray", 500)} ${textFont("xs", "medium")};
`;

export function IssueList() {
  const projects = useProjects();
  const issues = useIssues();

  if (projects.isLoading || issues.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects {projects.error.message}</div>;
  }

  if (issues.isError) {
    console.error(issues.error);
    return <div>Error loading projects {issues.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );

  return (
    <Table>
      <TableHead>
        <HeaderCell>Issue</HeaderCell>
        <HeaderCell>Level</HeaderCell>
        <HeaderCell>Events</HeaderCell>
        <HeaderCell>Users</HeaderCell>
      </TableHead>
      <tbody>
        {(issues.data || []).map((issue) => (
          <IssueRow
            key={issue.id}
            issue={issue}
            projectLanguage={projectIdToLanguage[issue.projectId]}
          />
        ))}
      </tbody>
    </Table>
  );
}
