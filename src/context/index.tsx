import { UserProvider } from "./User";
import { TContext } from "./types";

const Context = ({ children }: TContext) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Context;
