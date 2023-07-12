import Box from "@/components/Box";
import { TItem } from "./types";
import Divisor from "../Divisor";

const Item = ({ children, w }: TItem) => {
  return (
    <Box
      wid={w || ["100%", "100%", "15%"]}
      justifyContent="space-between"
      alignItems="center"
      marginRight={[0, 0, 10]}
      marginBottom={[5, 5, 0]}
    >
      <Box
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {children}
      </Box>
      <Box display={["none", "none", "flex"]}>
        <Divisor />
      </Box>
    </Box>
  );
};

export default Item;
