import type { NextPage } from "next";
import { MainLayout } from "utils/components/layout";

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <h1> THIS IS HOME PAGE </h1>
    </MainLayout>
  );
};

export default Home;