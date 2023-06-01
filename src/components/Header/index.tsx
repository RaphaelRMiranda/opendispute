import Box from "@/components/Box";
import User from "./User";
import { useUser } from "@/context/User";
import UserSkeleton from "./User/skeleton";

const Header = () => {
  const { user } = useUser();

  return (
    <Box
      wid="100%"
      justifyContent="flex-end"
      alignItems="center"
      padding={10}
      marginBottom={15}
    >
      {user && user._id ? <User /> : <UserSkeleton />}
    </Box>
  );
};

export default Header;
