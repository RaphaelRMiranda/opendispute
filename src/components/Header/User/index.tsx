import Box from "@/components/Box";
import { Button } from "@/components/Buttons";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import Add from "../icons/Add";
import { useRouter } from "next/router";
import { useUser } from "@/context/User";
import Role from "./utils/Role";

const User = () => {
  const { user } = useUser();

  const router = useRouter();

  return (
    <Box wid="40%" justifyContent="flex-end" alignItems="center">
      <Button
        wid={150}
        fontSize={theme.fonts.sizes.md}
        icon={<Add size={theme.fonts.sizes.md} />}
        onClick={() => router.push("/create")}
      >
        Create Letter
      </Button>
      <Box
        wid={2}
        hei={30}
        borderRadius={50}
        backgroundColor={theme.colors.base.primary}
        marginLeft={10}
        marginRight={10}
      />
      <Box
        wid={32}
        hei={32}
        backgroundColor={theme.colors.base.primary}
        borderRadius={50}
      />
      <Box
        minWid="17%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginLeft={10}
        paddingRight={10}
      >
        <Text
          fontSize={theme.fonts.sizes.sm}
          weight={500}
          color={theme.colors.base.secondary}
        >
          {user.firstName} {user.lastName.charAt(0)}.
        </Text>
        <Text
          fontSize={theme.fonts.sizes.sm}
          color={theme.colors.base.secondary}
        >
          {Role(user.role)}
        </Text>
      </Box>
    </Box>
  );
};

export default User;
