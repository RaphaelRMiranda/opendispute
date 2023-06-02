import { UseFormRegisterReturn } from "react-hook-form";
import { ChangeEventHandler } from "react";

export type TInput = {
  placeholder?: string;
  label?: string;
  error?: string | undefined;
  onChange?: ChangeEventHandler<any> | undefined;
  name?: string;
  reg?: UseFormRegisterReturn<string>;
  value?: string | number;
  readonly?: boolean;
  defaultValue?: string | number;
  paddingInput?: string | number | Array<string | number>;
  maxLength?: number;
};

export type TRadio = {
  label?: string;
  error?: string | undefined;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  reg?: UseFormRegisterReturn<string>;
};
