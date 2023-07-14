import Box from "@/components/Box";
import { theme } from "@/styles/theme";
import Logo from "./icons/Logo";
import { Button } from "@/components/Buttons";
import List from "./icons/List";
import AddUser from "./icons/AddUser";
import UserIcon from "./icons/UserIcon";
import Exit from "./icons/Exit";
import { useRouter } from "next/router";
import { handleLogout, useUser } from "@/context/User";
import { User } from "@/views/Register/types";
import Settings from "./icons/Settings";

const Menu = () => {
  const { user, setUser, setToken, setObject } = useUser();

  const router = useRouter();

  const deafultWidth = 150;

  const havePermission = (role: string) => {
    switch (role) {
      case "ceo":
        return true;
      case "dev":
        return true;
      case "admin":
        return true;
      default:
        return false;
    }
  };

  return (
    <Box
      display={["none", "none", "none", "flex"]}
      position="relative"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      wid="40%"
      maxWid={320}
      // hei="100%"
      backgroundColor={theme.colors.base.primary}
      padding={20}
      borderRadius={8}
      marginTop={10}
    >
      <Logo size={theme.icons.sizes.xxl} />
      <Box
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        wid="100%"
      >
        <Button
          wid={deafultWidth}
          fontSize={theme.fonts.sizes.md}
          marginTop={50}
          icon={<List size={theme.fonts.sizes.md} />}
          onClick={() => router.push("/listing")}
        >
          Listing
        </Button>
        {havePermission(user.role) && (
          <Button
            wid={deafultWidth}
            fontSize={theme.fonts.sizes.md}
            marginTop={15}
            icon={<AddUser size={theme.fonts.sizes.md} />}
            onClick={() => {
              router.push("/register");
              setObject({} as User);
            }}
          >
            Register
          </Button>
        )}
        {havePermission(user.role) && (
          <Button
            wid={deafultWidth}
            fontSize={theme.fonts.sizes.md}
            marginTop={15}
            icon={<UserIcon size={theme.fonts.sizes.md} />}
            onClick={() => router.push("/users")}
          >
            Users
          </Button>
        )}
        {havePermission(user.role) && (
          <Button
            wid={deafultWidth}
            fontSize={theme.fonts.sizes.md}
            marginTop={15}
            icon={<Settings size={theme.fonts.sizes.md} />}
            onClick={() => router.push("/settings")}
          >
            Settings
          </Button>
        )}
        <Box
          wid="100%"
          hei={1}
          marginTop={50}
          backgroundColor={theme.colors.base.gray[300]}
        />
        <Button
          wid={deafultWidth}
          fontSize={theme.fonts.sizes.md}
          marginTop={15}
          icon={<Exit size={theme.fonts.sizes.md} />}
          onClick={() => handleLogout(setUser, setToken, router)}
        >
          Logout
        </Button>
      </Box>
      {/* <Box position="absolute" bottom="0" left="0" wid="80%">
        <Rocket size="100%" />
      </Box> */}
    </Box>
  );
};

export default Menu;
