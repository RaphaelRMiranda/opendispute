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
  isDeleted?: boolean;
  [key: string]: any;
};

export type TDisputePI = {
  type: string;
  inaccurateInformation: string;
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
  action: string;
  justifyer: string;
  comment?: string;
  reverse?: boolean;
  [key: string]: any;
};

export type TDisputeProps = {
  disputes: TDisputeObject[];
  loading?: boolean;
  handleEdit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type TDisputeArr<T extends TDispute = TDispute> = {
  _id: {
    socialNumber: string;
  };
  disputes: (DisputeInterface<T> & TDisputeList)[];
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
};

export interface DisputeInterface<T = TDispute>
  extends Document {
  date: string;
  customer: TCustomer;
  address: TAddress;
  disputeRound: number;
  creditBureau: TCreditBureau;
  greetingSequence: string;
  greetingSequenceExtended?: string;
  closingStatement: string;
  closingStatementExtended?: string;
  dispute: T[];
  archives: TArchives[];
  [key: string]: any;
}

export interface DisputeInterfacePI extends Document {
  date: string;
  customer: TCustomer;
  address: TAddress;
  disputeRound: number;
  creditBureau: TCreditBureau;
  greetingSequence: string;
  greetingSequenceExtended?: string;
  closingStatement: string;
  closingStatementExtended?: string;
  dispute: TDisputePI[];
  archives: TArchives[];
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
