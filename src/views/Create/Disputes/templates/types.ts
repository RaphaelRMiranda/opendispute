import { UseFormRegister, FieldValues } from "react-hook-form";

export type TDisputeTemplate = {
  index: number;
  disputeId: string;
  register: UseFormRegister<FieldValues>
};

export type TDisputeBureau = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
}