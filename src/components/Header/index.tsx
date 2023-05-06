import Box from "@/components/Box";
import { Button } from "../Buttons";
import User from "./User";

const Header = () => {
  return (
    <Box
      wid="100%"
      justifyContent="flex-end"
      alignItems="center"
      padding={10}
      marginBottom={15}
    >
      <User />
    </Box>
  );
};

export default Header;
