import Box from "@/components/Box";
import UserComponent from "./User";
import Logo from "../Menu/icons/Logo";
import { theme } from "@/styles/theme";
import MenuIcon from "./icons/Menu";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import List from "../Menu/icons/List";
import { handleLogout, useUser } from "@/context/User";
import AddUser from "../Menu/icons/AddUser";
import UserIcon from "../Menu/icons/UserIcon";
import Settings from "../Menu/icons/Settings";
import Exit from "../Menu/icons/Exit";
import { useRouter } from "next/router";
import { User } from "@/views/Register/types";

const Header = () => {
  const { user, setObject, setUser, setToken } = useUser();

  const router = useRouter();

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
      wid="100%"
      justifyContent="space-between"
      alignItems="center"
      padding={10}
      marginBottom={15}
    >
      <Box display={["none", "none", "flex"]}>
        <Logo size={theme.icons.sizes.xxl} />
      </Box>
      <UserComponent />

      <Menu aria-label="Menu" placement="bottom-end">
        <MenuButton
          as={IconButton}
          aria-label="Edit"
          icon={<MenuIcon size={theme.icons.sizes.sm} />}
          backgroundColor="transparent"
          zIndex={2}
          ml={3}
          _hover={{ backgroundColor: theme.colors.base.primary }}
          p={2}
        />
        <MenuList
          bg={theme.colors.base.white}
          borderRadius={8}
          boxShadow={`0 4px 12px 0 rgba(0 0 0 / 17%)`}
          p={5}
          border="none"
        >
          <MenuItem
            icon={<List size={theme.fonts.sizes.md} />}
            iconSpacing={3}
            bg="transparent"
            mb={3}
            onClick={() => router.push("/listing")}
          >
            <Text
              fontSize={theme.fonts.sizes.md}
              fontWeight="medium"
              color={theme.colors.base.black}
            >
              Listing
            </Text>
          </MenuItem>
          {havePermission(user.role) && (
            <MenuItem
              icon={<AddUser size={theme.fonts.sizes.md} />}
              iconSpacing={3}
              bg="transparent"
              mb={3}
              onClick={() => {
                router.push("/register");
                setObject({} as User);
              }}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                fontWeight="medium"
                color={theme.colors.base.black}
              >
                Register
              </Text>
            </MenuItem>
          )}
          {havePermission(user.role) && (
            <MenuItem
              icon={<UserIcon size={theme.fonts.sizes.md} />}
              iconSpacing={3}
              bg="transparent"
              mb={3}
              onClick={() => router.push("/users")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                fontWeight="medium"
                color={theme.colors.base.black}
              >
                Users
              </Text>
            </MenuItem>
          )}
          {havePermission(user.role) && (
            <MenuItem
              icon={<Settings size={theme.fonts.sizes.md} />}
              iconSpacing={3}
              bg="transparent"
              mb={3}
              onClick={() => router.push("/settings")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                fontWeight="medium"
                color={theme.colors.base.black}
              >
                Settings
              </Text>
            </MenuItem>
          )}
          <Box
            wid="100%"
            hei="1px"
            backgroundColor={theme.colors.base.gray[100]}
            margin={`10px 0`}
          />
          <MenuItem
            icon={
              <Exit
                size={theme.fonts.sizes.md}
                color={theme.colors.base.red[200]}
              />
            }
            iconSpacing={3}
            bg="transparent"
            onClick={() => handleLogout(setUser, setToken, router)}
          >
            <Text
              fontSize={theme.fonts.sizes.md}
              fontWeight="medium"
              color={theme.colors.base.red[200]}
            >
              Logout
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
