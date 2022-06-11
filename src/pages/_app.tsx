import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ContinentsProvider from "../contexts/Continents/provider";
import { theme } from "../styles/theme";

import "./../styles/slider.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentsProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ContinentsProvider>
  );
}

export default MyApp;
