import { DocumentProvider } from "./Document";
import { UserProvider } from "./User";
import { TContext } from "./types";

const Context = ({ children }: TContext) => {
  return (
    <UserProvider>
      <DocumentProvider>{children}</DocumentProvider>
    </UserProvider>
  );
};

export default Context;
