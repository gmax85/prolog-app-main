import type { NextPage } from "next";
import { PageContainer } from "@features/ui/page-container/page-container";
import { ProjectList } from "@features/projects/components/project-list";

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectList />
    </PageContainer>
  );
};

export default Home;
