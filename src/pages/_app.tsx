import Context from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Context>
          <Component {...pageProps} />
        </Context>
      </ChakraProvider>
    </ThemeProvider>
  );
}
