import { IssueLevel } from "@api/issue";
import type { Issue } from "@api/issue";
import { ProjectLanguage } from "@api/project";
import { Badge, BadgeColor } from "@components/Badge";
import { space } from "@styles/theme";
import capitalize from "lodash/capitalize";
import styled from "styled-components";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

const LanguageIcon = styled.img`
  margin-right: ${space(3)};
`;

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level } = issue;
  const numEvents = 100;
  const numUsers = 80;
  return (
    <div>
      <div>
        <div>
          <LanguageIcon
            src={`/icons/${projectLanguage}.svg`}
            alt={projectLanguage}
          />
          <div>
            <div>
              <span>{name}</span>
              {message}
            </div>
            <div>{stack.split("\n")[1]}</div>
          </div>
        </div>
        <div>
          <Badge color={levelColors[level]}>{capitalize(level)} </Badge>
        </div>
        <div>{numEvents}</div>
        <div>{numUsers}</div>
      </div>
    </div>
  );
}
