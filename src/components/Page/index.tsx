import Box from "@/components/Box";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import { TPage } from "./types";

const Page = ({ title, description, children, filter, filterSize }: TPage) => {
  return (
    <Box
      wid="100%"
      flexDirection="column"
      alignItems="flex-start"
      backgroundColor={theme.colors.base.primary}
      borderRadius={[0, 0, 6]}
      padding={15}
    >
      {title && description && children && (
        <Box
          wid="100%"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box
            wid={[
              "100%",
              "100%",
              "100%",
              `${filterSize && 100 - filterSize}%` || "unset",
            ]}
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
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
          </Box>
          {filter && (
            <Box wid={["100%", "100%", "100%", `${filterSize}%` || "50%"]}>
              {filter}
            </Box>
          )}
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Page;
