import { DocumentProvider } from "./Document";
import { SettingsProvider } from "./Settings";
import { TypesProvider } from "./TypesContext";
import { UserProvider } from "./User";
import { TContext } from "./types";

const Context = ({ children }: TContext) => {
  return (
    <UserProvider>
      <SettingsProvider>
        <TypesProvider>
          <DocumentProvider>{children}</DocumentProvider>
        </TypesProvider>
      </SettingsProvider>
    </UserProvider>
  );
};

export default Context;
