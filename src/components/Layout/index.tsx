import Box from "@/components/Box";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { TLayout } from "./types";
import { theme } from "@/styles/theme";
import { useUser } from "@/context/User";
import Login from "@/views/Login";
import { useEffect, useState } from "react";
import usePersistState from "@/utils/PersistState";
import ApiWrapper from "@/services/Api";

const Layout = ({ children }: TLayout) => {
  const { user } = useUser();

  const [isLoading, setLoading] = useState<boolean>(true);

  const [persistedUser, setPersistedUser] = usePersistState(
    user,
    "@dispute/user"
  );

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
      <ApiWrapper />
      {/* <Menu /> */}
      <Box
        wid="100%"
        maxWid={1200}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Header />
        <Box
          wid="100%"
          // maxWid={1200}
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
