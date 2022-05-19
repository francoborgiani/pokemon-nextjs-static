import "styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "themes";
import { NextPage } from "next/types";
import { ReactElement,ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <NextUIProvider theme={ darkTheme }>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  );
}

export default MyApp;
