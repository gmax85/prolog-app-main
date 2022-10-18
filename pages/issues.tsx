import type { NextPage } from "next";
import { PageContainer } from "@features/ui/page-container/page-container";
import { IssueList } from "@features/issues/components/IssuesList/Issue-List";

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;
