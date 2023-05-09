import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { TContext } from "../types";
import { UserInterface, UserProps } from "./types";

const UserContext = createContext<UserProps>({} as UserProps);

export const handleLogin = (
  setUser: Dispatch<SetStateAction<UserInterface>>
) => {};

export const handleLogout = () => {};

export const UserProvider = ({ children }: TContext) => {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
