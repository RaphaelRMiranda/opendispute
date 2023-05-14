import { TDisputeObject } from "@/context/Document/types";

type TCustomer = {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  ssn?: string;
  itin?: string;
};

type TAddress = {
  number: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

type TCreditBureau = {
  equifax: boolean;
  experian: boolean;
  transunion: boolean;
  [key: string]: boolean;
};

type TShows = {
  experian: string;
  equifax: string;
  transunion: string;
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
};

export interface DisputeInterface extends Document {
  date: string;
  customer: TCustomer;
  address: TAddress;
  disputeRound: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // Bloquear caso seja menor que a atual
  creditBureau: TCreditBureau;
  greetingSequence: string;
  greetingSequenceExtended?: string;
  closingStatement: string;
  closingStatementExtended?: string;
  dispute: TDispute[];
}
