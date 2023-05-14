import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import Api from "@/services/Api";
import { TContext } from "../types";
import { UserAuthInterface, UserData, UserInterface, UserProps } from "./types";
import { NextRouter } from "next/router";

const UserContext = createContext<UserProps>({} as UserProps);

export const handleLogin = async (
  data: UserData,
  setUser: Dispatch<SetStateAction<UserInterface>>,
  setToken: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string>>,
  isLoading: Dispatch<SetStateAction<boolean>>
) => {
  isLoading(true);
  return await Api.post<UserAuthInterface>("/auth", {
    ...data,
  })
    .then((response) => {
      setUser(response.data.user);
      setToken(response.data.token);

      isLoading(false);
    })
    .catch((error) => {
      // console.log(error);
      setError(error.response.data.message);
      isLoading(false);
    });
};

export const handleLogout = (
  setUser: Dispatch<SetStateAction<UserInterface>>,
  setToken: Dispatch<SetStateAction<string>>,
  router: NextRouter
) => {
  setUser({} as UserInterface);
  setToken("");
  router.push("/");
};

export const UserProvider = ({ children }: TContext) => {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const [token, setToken] = useState<string>("" as string);
  const [error, setError] = useState<string>("" as string);

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, error, setError }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
