import Box from "@/components/Box";
import { theme } from "@/styles/theme";

const Divisor = () => {
  return (
    <Box
      wid={2}
      hei={40}
      backgroundColor={theme.colors.base.primary}
      borderRadius={50}
      marginLeft={10}
    />
  );
};

export default Divisor;
