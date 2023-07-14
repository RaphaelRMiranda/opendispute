import { createContext, useContext, useState } from "react";
import { TContext } from "../types";
import { Api } from "@/services/Api";
import { RemoveSettings, SettingsInterface, SettingsProps } from "./types";
import { TToken } from "@/views/Create/types";

const SettingsContext = createContext<SettingsProps>({} as SettingsProps);

export const updateSettings = async ({
  greetingSequence,
  closingStatement,
  actions,
  justifyers,
  token,
}: SettingsInterface & TToken) => {
  return await Api.post(
    "/dispute/setting/create",
    {
      greetingSequence,
      closingStatement,
      actions,
      justifyers,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getSettings = async ({ token }: TToken) => {
  return await Api.get("/dispute/setting/list", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteSettings = async ({
  mode,
  type,
  round,
  token,
}: RemoveSettings & TToken) => {
  return await Api.post(
    "/dispute/setting/create",
    {
      mode,
      type,
      round,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const SettingsProvider = ({ children }: TContext) => {
  const [settings, setSettings] = useState<SettingsInterface>(
    {} as SettingsInterface
  );

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
