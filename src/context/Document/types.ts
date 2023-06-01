import { DisputeInterface, TDispute } from "@/views/Create/types";
import { TObjectErrors } from "@/views/Create/validation/types";
import { Dispatch, SetStateAction } from "react";

export type DocumentProps = {
  disputes: TDisputeObject[];
  setDisputes: Dispatch<SetStateAction<TDisputeObject[]>>;
  lastDispute: DisputeInterface;
  setLastDispute: Dispatch<SetStateAction<DisputeInterface>>;
  errors: TObjectErrors;
  setErrors: Dispatch<SetStateAction<TObjectErrors>>;
  object: DisputeInterface;
  setObject: Dispatch<SetStateAction<DisputeInterface>>;
  // editDispute: (id: string, dispute: TEditDispute) => void;
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

export type TDisputeDownload = {
  _id: string;
};

export type TDisputeList = {
  page: number;
  limit: number;
  sort: string;
  since: string;
  until: string;
  search: string;
}
