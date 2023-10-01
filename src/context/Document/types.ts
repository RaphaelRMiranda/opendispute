import { DisputeInterface, TDispute } from "@/views/Create/types";
import { TObjectErrors } from "@/views/Create/validation/types";
import { Dispatch, SetStateAction } from "react";

export interface DocumentProps<T = TDispute> {
  duplicateDispute: (type: string, id: string) => void;
  removeDispute: (id: string) => void;
  errors: TObjectErrors;
  setErrors: Dispatch<SetStateAction<TObjectErrors>>;
  object: DisputeInterface<T>;
  setObject: Dispatch<SetStateAction<DisputeInterface<T>>>;
}

export type TEditDispute = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
};

export type TDisputeObject<T = TDispute> = T & {
  id?: string;
  template?: React.ReactNode;
};

export type TDisputeDownload = {
  _id: string;
};

export type TDisputeDownloadOverview = {
  experianScore: string;
  equifaxScore: string;
  transunionScore: string;
  socialNumber: string;
  showDifference: boolean;
};

export type TDisputeList = {
  page: number;
  limit: number;
  sort: string;
  since: string;
  until: string;
  search: string;
};
