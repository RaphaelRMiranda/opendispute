import { TDispute } from "@/views/Create/types";
import { Dispatch, SetStateAction } from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormClearErrors,
  UseFormResetField,
  UseFormSetError,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

export type DocumentProps = {
  disputes: TDisputeObject[];
  setDisputes: Dispatch<SetStateAction<TDisputeObject[]>>;
  lastDispute: TDisputeObject;
  setLastDispute: Dispatch<SetStateAction<TDisputeObject>>;
  letterRegister: TFormRegister;
  setLetterRegister: Dispatch<SetStateAction<TFormRegister>>;
  letterErrors: TFormError;
  setLetterErrors: Dispatch<SetStateAction<TFormError>>;
  letterValues: TFormValues;
  setLetterValues: Dispatch<SetStateAction<TFormValues>>;
  editDispute: (id: string, dispute: TEditDispute) => void;
  duplicateDispute: (type: string, id: string) => void;
  removeDispute: (id: string) => void;
};

export type TEditDispute = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
};

export type TDisputeObject = TDispute & {
  id?: string;
  template?: React.ReactNode;
};

export type TFormRegister = {
  register: UseFormRegister<FieldValues>;
};

export type TFormError = {
  setError: UseFormSetError<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clean: UseFormClearErrors<FieldValues>;
  resetField: UseFormResetField<FieldValues>
};

export type TFormValues = {
  setValue: UseFormSetValue<FieldValues>;
};
