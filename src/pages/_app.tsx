import Context from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  const chTheme = extendTheme({
    config: {
      initialColorMode: "light",
      default: "light",
      useSystemColorMode: false,
    },
  });

  useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={chTheme}>
        <Context>
          <Component {...pageProps} />
        </Context>
      </ChakraProvider>
    </ThemeProvider>
  );
}
