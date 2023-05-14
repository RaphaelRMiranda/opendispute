import { TDispute } from "@/views/Create/types";
import { Dispatch, SetStateAction } from "react";

export type DocumentProps = {
  disputes: TDisputeObject[];
  setDisputes: Dispatch<SetStateAction<TDisputeObject[]>>;
  lastDispute: TDisputeObject;
  setLastDispute: Dispatch<SetStateAction<TDisputeObject>>;
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
