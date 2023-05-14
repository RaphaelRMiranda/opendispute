import Box from "@/components/Box";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { TLayout } from "./types";
import { theme } from "@/styles/theme";
import { useUser } from "@/context/User";
import Login from "@/views/Login";

const Layout = ({ children }: TLayout) => {
  const { user } = useUser();

  return user && user._id ? (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      wid="100%"
      hei="100%"
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
  ) : (
    <Login />
  );
};

export default Layout;
