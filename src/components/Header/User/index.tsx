import Box from "@/components/Box";
import { Button } from "@/components/Buttons";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import Add from "../icons/Add";

const User = () => {
  return (
    <Box wid="40%" justifyContent="flex-end" alignItems="center">
      <Button
        wid={150}
        fontSize={theme.fonts.sizes.md}
        icon={<Add size={theme.fonts.sizes.md} />}
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
        wid="20%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginLeft={10}
      >
        <Text
          fontSize={theme.fonts.sizes.sm}
          weight={500}
          color={theme.colors.base.secondary}
        >
          Raphael M.
        </Text>
        <Text
          fontSize={theme.fonts.sizes.sm}
          color={theme.colors.base.gray[300]}
        >
          CEO | Administrator
        </Text>
      </Box>
    </Box>
  );
};

export default User;
