import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { TContext } from "../types";
import {
  TUserEdit,
  TUserRegister,
  UserAuthInterface,
  UserData,
  UserDelete,
  UserInterface,
  UserProps,
} from "./types";
import { NextRouter } from "next/router";
import usePersistState from "@/utils/PersistState";
import { TToken } from "@/views/Create/types";
import { TDisputeList } from "../Document/types";
import { Api } from "@/services/Api";
import { User } from "@/views/Register/types";

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
  router.reload();
  localStorage.removeItem("@dispute/user");
  localStorage.removeItem("@dispute/token");
  setUser({} as UserInterface);
  setToken("");
};

export const handleCreateUser = async ({
  token,
  ...data
}: TUserRegister & TToken) => {
  return await Api.post<TUserRegister>(
    "/user/create",
    { ...data },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const handleEditUser = async ({
  token,
  ...data
}: TUserEdit & TToken) => {
  return await Api.patch<TUserRegister>(
    "/user/udapte",
    { ...data },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const getUsers = async ({
  page,
  limit,
  sort,
  since,
  until,
  search,
  token,
}: TDisputeList & TToken) => {
  return await Api.get("/user/list", {
    params: {
      page,
      limit,
      sort,
      since,
      until,
      search,
    },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = async ({ _id, token }: UserDelete & TToken) => {
  return await Api.delete(`/user/delete/${_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const UserProvider = ({ children }: TContext) => {
  const [object, setObject] = useState<User>({} as User);
  const [user, setUser] = usePersistState<UserInterface>(
    {} as UserInterface,
    "@dispute/user"
  );
  const [token, setToken] = usePersistState<string>(
    "" as string,
    "@dispute/token"
  );
  const [error, setError] = useState<string>("" as string);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        error,
        setError,
        object,
        setObject,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
