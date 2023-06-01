import { UseFormRegister, FieldValues } from "react-hook-form";

export type TDisputeTemplate = {
  index: number;
  disputeId: string;
};

export type TDisputeBureau = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
}