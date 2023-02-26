import type { NextPage } from "next";
import { Header } from "utils/components/header";
import { MainLayout } from "utils/components/Layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1> THIS IS HOME PAGE </h1>
    </MainLayout>
  );
};

export default Home;