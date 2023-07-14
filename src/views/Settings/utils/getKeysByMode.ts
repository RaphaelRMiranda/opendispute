import { SettingsInterface } from "@/context/Settings/types";

const getKeysByMode = (data: SettingsInterface, mode: string) => {
  return Object.keys(data[mode]);
};

export default getKeysByMode;
