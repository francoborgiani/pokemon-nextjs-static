import React, { Children, FC, ReactElement, ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
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

      {/* <Navbar /> */}

      <main>{children}</main>
    </>
  );
};
