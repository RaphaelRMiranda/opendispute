import { createContext, useContext, useState } from "react";
import { TContext } from "../types";
import { TToken } from "@/views/Create/types";
import { Api } from "@/services/Api";
import { CreateType, Types, TypesProps } from "./types";

const TypesContext = createContext<TypesProps>({} as TypesProps);

export const createType = async ({ token, type }: CreateType & TToken) => {
  return await Api.post(
    `/dispute/types/create`,
    {
      type,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const updateType = async ({ token, _id, type }: Types & TToken) => {
  return await Api.patch(
    `/dispute/types/update`,
    {
      id: _id,
      type,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const deleteType = async ({ token, _id }: Types & TToken) => {
  return await Api.delete(`/dispute/types/delete/${_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getTypes = async ({ token }: TToken) => {
  return await Api.get(`/dispute/types/list`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const TypesProvider = ({ children }: TContext) => {
  const [types, setTypes] = useState<Types[]>([]);

  return (
    <TypesContext.Provider value={{ types, setTypes }}>
      {children}
    </TypesContext.Provider>
  );
};

export const useTypes = () => useContext(TypesContext);
