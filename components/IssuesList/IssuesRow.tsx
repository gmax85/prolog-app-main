import { IssueLevel } from "@api/issue";
import type { Issue } from "@api/issue";
import { ProjectLanguage } from "@api/project";
import { Badge, BadgeColor, BadgeSize } from "@components/Badge";
import { color, space, textFont } from "@styles/theme";
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

const Row = styled.tr`
  &:nth-child(2n) {
    background: ${color("gray", 50)};
  }
`;

const Cell = styled.td`
  padding: ${space(4, 6)};
  ${textFont("sm", "regular")}
  color: ${color("gray", 500)};
`;

const IssueCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

const LanguageIcon = styled.img`
Width: ${space(10)}
margin-right: ${space(3)};
`;

const ErrorTypeAndMessage = styled.div`
  color: ${color("gray", 900)};
`;

const ErrorType = styled.span`
  ${textFont("sm", "regular")}
`;

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level, numEvents } = issue;
  const firstLineOfStackTrace = stack.split("\n")[1];
  const numEvents = 100;
  const numUsers = 80;
  return (
    <Row>
      <IssueCell>
        <LanguageIcon
          src={`/icons/${projectLanguage}.svg`}
          alt={projectLanguage}
        />
        <div>
          <ErrorTypeAndMessage>
            <ErrorType>{name}:&nbsp;</ErrorType>
            {message}
          </ErrorTypeAndMessage>
          <div>{firstLineOfStackTrace}</div>
        </div>
      </IssueCell>
      <Cell>
        <Badge color={levelColors[level]} size={BadgeSize.sm}>
          {capitalize(level)}{" "}
        </Badge>
      </Cell>
      <Cell>{numEvents}</Cell>
      <Cell>{numEvents}</Cell>
    </Row>
  );
}
