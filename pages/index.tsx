import type { NextPage } from "next";
import { PageContainer } from "@features/ui/PageContainer";
import { ProjectList } from "@features/projects/components/ProjectList";

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
