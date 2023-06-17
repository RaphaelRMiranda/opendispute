import Box from "@/components/Box";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { TLayout } from "./types";
import { theme } from "@/styles/theme";
import { useUser } from "@/context/User";
import Login from "@/views/Login";
import { useEffect, useState } from "react";
import usePersistState from "@/utils/PersistState";
import { useRouter } from "next/router";

const Layout = ({ children }: TLayout) => {
  const { user, setUser, setToken } = useUser();

  const router = useRouter();

  const [isLoading, setLoading] = useState<boolean>(true);

  const [persistedUser, setPersistedUser] = usePersistState(
    user,
    "@dispute/user"
  );

  const insideLogout = () => {
    router.reload();
    localStorage.removeItem("@dispute/user");
    localStorage.removeItem("@dispute/token");
    setToken("");
  };

  useEffect(() => {
    setLoading(true);
    if (user && user._id) {
      setPersistedUser(user);
      setLoading(false);
    } else setLoading(false);
  }, [setPersistedUser, user]);

  if (isLoading) {
    return null;
  }

  return persistedUser && persistedUser._id ? (
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
