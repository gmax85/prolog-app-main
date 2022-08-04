import type { NextPage } from "next";
import Head from "next/head";
// import styled from "styled-components";
import { SidebarNavigation } from "@components/SidebarNavigation";

// type ContainerProps = {
//   theme: string;
// };

// const Container = styled.div<ContainerProps>`
//   padding: 0 2rem;
//   ${(props) => props.theme === "dark" && "background: black"}
// `;

// const Main = styled.main`
//   min-height: 100vh;
//   padding: 4rem 0;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.h1`
//   margin: 0;
//   line-height: 1.15;
//   font-size: 4rem;
//   text-align: center;

//   a {
//     color: #0070f3;
//     text-decoration: none;
//   }

//   a:hover,
//   a:focus,
//   a:active {
//     text-decoration: underline;
//   }
// `;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ProLog</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SidebarNavigation />
      </main>
    </div>
  );
};

export default Home;
