import React, { FC, } from "react";
import Head from "next/head";
import { Navbar } from "components/ui/Navbar";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Franco Borgiani" />
        <meta name="description" content="Información sobre el pokemón" />
        <meta name="keywords" content="XXXX, pokemón, pokedex" />
      </Head>

      <Navbar />

      <main 
        style={{
          padding: "0 30px"
        }}
      >{children}</main>
    </>
  );
};
