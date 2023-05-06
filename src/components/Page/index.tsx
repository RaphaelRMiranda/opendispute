import Box from "@/components/Box";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import { TPage } from "./types";

const Page = ({ title, description, children }: TPage) => {
  return (
    <Box
      wid="100%"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      backgroundColor={theme.colors.base.primary}
      borderRadius={6}
      padding={15}
    >
      <Text
        fontSize={theme.fonts.sizes.md}
        color={theme.colors.base.secondary}
        weight={500}
      >
        {title}
      </Text>
      <Text
        fontSize={theme.fonts.sizes.sm}
        color={theme.colors.base.gray[300]}
        marginBottom={15}
      >
        {description}
      </Text>
      {children}
    </Box>
  );
};

export default Page;
