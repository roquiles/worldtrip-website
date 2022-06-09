import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ContinentsProvider from "../contexts/Continents/provider";
import { theme } from "../styles/theme";

import "./../styles/slider.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentsProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContinentsProvider>
  );
}

export default MyApp;
