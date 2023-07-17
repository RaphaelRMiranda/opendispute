import { Dispatch, SetStateAction } from "react";

export type DefaultValue = {
  label: string;
  value: string;
};

export type DefaultIndex = {
  index: number;
};

export type DefaultPerTypeValue = {
  type: string;
};

export type DefaultDisputeProps = {
  [key: string]: string;
};

export type DefaultSettingProps = {
  [key: string]: DefaultValue[];
};

export type DefaultPerTypeProps = {
  [key: string]: (DefaultValue & DefaultPerTypeValue)[];
};

export interface SettingsInterface extends Document {
  greetingSequence: DefaultSettingProps;
  actions: DefaultPerTypeProps;
  justifyers: DefaultPerTypeProps;
  closingStatement: DefaultSettingProps;
  [key: string]: any;
}

export enum SettingsMode {
  GREETING = "greetingSequence",
  ACTIONS = "actions",
  JUSTIFYERS = "justifyers",
  CLOSING = "closingStatement",
}

export type RemoveSettings = {
  mode: SettingsMode;
  index: number;
  round?: string;
  type?: string;
};

export interface SettingsProps {
  settings: SettingsInterface;
  setSettings: Dispatch<SetStateAction<SettingsInterface>>;
}
