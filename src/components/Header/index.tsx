import Box from "@/components/Box";
import User from "./User";
import Menu from "./icons/Menu";
import { theme } from "@/styles/theme";
import DrawerMenu from "../Drawer";
import { useDisclosure } from "@chakra-ui/react";

const Header = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box
      wid="100%"
      justifyContent="flex-end"
      alignItems="center"
      padding={10}
      marginBottom={15}
    >
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
      <Box
        display={["flex", "flex", "flex", "none"]}
        paddingLeft={10}
        onClick={onOpen}
      >
        <Menu size={theme.icons.sizes.sm} />
      </Box>
      <User />
    </Box>
  );
};

export default Header;
