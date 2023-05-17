import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type TOption = {
  label: string;
  value: string | number;
};

export type TSelect = {
  label?: string;
  error?: string | undefined;
  options?: Array<TOption>;
  onChange?: ChangeEventHandler<HTMLSelectElement> | TOption[] | TOption;
  reg?: UseFormRegisterReturn<string>;
};

export type TMultipleSelect = {
  label?: string;
  error?: string;
  options?: Array<TOption>;
  onChange?: (value: TOption[] | TOption) => void;
  reg?: UseFormRegisterReturn<string>;
  setValue?: (value: TOption[] | TOption) => void;
};
