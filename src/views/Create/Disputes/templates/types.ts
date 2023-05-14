import { UseFormRegister, FieldValues } from "react-hook-form";

export type TDisputeTemplate = {
  index: number;
  disputeId: string;
  register: UseFormRegister<FieldValues>
};
