import { DefaultSettingProps } from "@/context/Settings/types";
import { Dispatch, SetStateAction } from "react";
import { DeleteProps } from "../Greeting/types";

export interface TablesProps {
  data: DefaultSettingProps;
  filter: string;
  isNewValue: Dispatch<SetStateAction<boolean>>;
  isNewFactual: Dispatch<SetStateAction<boolean>>;
  isEdit: Dispatch<SetStateAction<EditProps>>;
  isDelete: Dispatch<SetStateAction<DeleteProps>>;
  onOpen: () => void;
}

export type EditProps = {
  index: number;
  title: string;
  text: string;
};
