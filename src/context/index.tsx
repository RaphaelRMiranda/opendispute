import { DocumentProvider } from "./Document";
import { SettingsProvider } from "./Settings";
import { UserProvider } from "./User";
import { TContext } from "./types";

const Context = ({ children }: TContext) => {
  return (
    <UserProvider>
      <SettingsProvider>
        <DocumentProvider>{children}</DocumentProvider>
      </SettingsProvider>
    </UserProvider>
  );
};

export default Context;
