import {
  UseFormRegisterReturn,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

export type TInput = {
  placeholder?: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  onChange?: () => void;
  name?: string;
  reg?: UseFormRegisterReturn<string>;
  value?: string | number;
  readonly?: boolean;
};

export type TRadio = {
  label?: string;
  error?: string;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  reg?: UseFormRegisterReturn<string>;
};
