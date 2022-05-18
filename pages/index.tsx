import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { ReactElement } from "react";

const HomePage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button color="secondary">NextUI Button</Button>
    </>
  );
};
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
