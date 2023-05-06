import Box from "@/components/Box";
import { theme } from "@/styles/theme";
import Text from "@/components/Text";
import Item from "./Item";
import Download from "./icons/Download";
import Edit from "./icons/Edit";
import { TCard } from "./types";

const Card = ({ children }: TCard) => {
  return (
    <Box
      position="relative"
      wid="100%"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={6}
      backgroundColor={theme.colors.base.white}
      padding={20}
      boxShadow="0 2px 15px 0 rgba(0 0 0 / 5%)"
      marginBottom={15}
    >
      {children}
    </Box>
  );
};

export default Card;
