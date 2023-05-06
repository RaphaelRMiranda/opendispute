import Box from "@/components/Box";
import { theme } from "@/styles/theme";
import Logo from "./icons/Logo";
import { Button } from "@/components/Buttons";
import List from "./icons/List";
import AddUser from "./icons/AddUser";
import User from "./icons/User";
import Exit from "./icons/Exit";
import Rocket from "./icons/Rocket";

const Menu = () => {
  const deafultWidth = 150;

  return (
    <Box
      position="relative"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      wid="40%"
      maxWid={320}
      minHei="100vh"
      backgroundColor={theme.colors.base.primary}
      padding={20}
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
        >
          Listing
        </Button>
        <Button
          wid={deafultWidth}
          fontSize={theme.fonts.sizes.md}
          marginTop={15}
          icon={<AddUser size={theme.fonts.sizes.md} />}
        >
          Register
        </Button>
        <Button
          wid={deafultWidth}
          fontSize={theme.fonts.sizes.md}
          marginTop={15}
          icon={<User size={theme.fonts.sizes.md} />}
        >
          Users
        </Button>
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
        >
          Logout
        </Button>
      </Box>
      <Box position="absolute" bottom="0" left="0" wid="80%">
        <Rocket size="100%" />
      </Box>
    </Box>
  );
};

export default Menu;
