import { handleLogout, useUser } from "@/context/User";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Box from "../Box";
import Logo from "../Menu/icons/Logo";
import { theme } from "@/styles/theme";
import { Button } from "../Buttons";
import List from "../Menu/icons/List";
import AddUser from "../Menu/icons/AddUser";
import { User } from "@/views/Register/types";
import UserIcon from "../Menu/icons/UserIcon";
import Exit from "../Menu/icons/Exit";
import { DrawerMenuProps } from "./types";

const DrawerMenu = ({ isOpen, onClose }: DrawerMenuProps) => {
  const { user, setUser, setToken, setObject } = useUser();

  const router = useRouter();

  //   const { isOpen, onClose } = useDisclosure();

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
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        {/* <DrawerCloseButton
          size={`${theme.icons.sizes.sm}rem`}
          mt={3}
          mr={3}
          zIndex={2}
        /> */}
        <DrawerBody p={0}>
          <Box
            position="relative"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            wid="100%"
            hei="100%"
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
