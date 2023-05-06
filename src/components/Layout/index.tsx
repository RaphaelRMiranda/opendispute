import Box from "@/components/Box";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { TLayout } from "./types";
import { theme } from "@/styles/theme";

const Layout = ({ children }: TLayout) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      wid="100%"
      minHei="100vh"
      backgroundColor={theme.colors.base.white}
    >
      <Menu />
      <Box
        wid="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Header />
        <Box
          wid="100%"
          // maxWid={1200}
          padding={20}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
