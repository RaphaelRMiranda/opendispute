import { TDisputeObject } from "@/context/Document/types";

type TCustomer = {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  ssn?: string;
  itin?: string;
  selectedSsn?: boolean;
  selectedItin?: boolean;
};

type TAddress = {
  number: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export type TCreditBureau = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
  [key: string]: boolean;
};

type TShows = {
  experian?: string;
  equifax?: string;
  transunion?: string;
};

export type TDispute = {
  type: string;
  dataFunisher: string;
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
  accountNumber: string;
  balance: number; // Mais para relatório, não aparece na carta
  action: string;
  justifyer: string;
  shows?: TShows;
  comment?: string;
  reverse?: boolean;
  [key: string]: any;
};

export type TDisputeProps = {
  disputes: TDisputeObject[];
  loading?: boolean;
  handleEdit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type TDisputeArr = {
  _id: {
    socialNumber: string;
  };
  disputes: (DisputeInterface & TDisputeList)[];
};

export type DisputeUpdate = {
  _id: string;
  date: string;
  customer: TCustomer;
  address: TAddress;
  disputeRound: number;
  creditBureau: TCreditBureau;
  greetingSequence: string;
  greetingSequenceExtended?: string;
  closingStatement: string;
  closingStatementExtended?: string;
  dispute: TDispute[];
  [key: string]: any;
}

export interface DisputeInterface extends Document {
  date: string;
  customer: TCustomer;
  address: TAddress;
  disputeRound: number;
  creditBureau: TCreditBureau;
  greetingSequence: string;
  greetingSequenceExtended?: string;
  closingStatement: string;
  closingStatementExtended?: string;
  dispute: TDispute[];
  [key: string]: any;
}

export type TArchives = {
  timestamp: number;
  bureau: string;
  encoded: string;
  [key: string]: any;
};

export type TCreatedBy = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TDisputeList = {
  _id: string;
  archives: TArchives[];
  createdBy: TCreatedBy;
  createdAt: string;
  updatedAt: string;
};

export type TToken = {
  token: string;
};
