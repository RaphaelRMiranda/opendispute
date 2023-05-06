import Box from "@/components/Box";
import { TItem } from "./types";
import Divisor from "../Divisor";

const Item = ({ children }: TItem) => {
  return (
    <Box
      wid="15%"
      justifyContent="space-between"
      alignItems="center"
      marginRight={10}
    >
      <Box
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {children}
      </Box>
      <Divisor />
    </Box>
  );
};

export default Item;
