import { TErrorMessage } from "../Create/validation/types";

export type TFactualDispute = {
  id: string;
  round: number;
};

export type OverviewCustomer = {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  ssn?: string;
  itin?: string;
  selectedSsn?: boolean;
  selectedItin?: boolean;
};

export type OverviewData = {
  experianScore: string;
  equifaxScore: string;
  transunionScore: string;
  socialNumber: string;
  showDifference: boolean;
};

export type OverviewDataError  = {
  equifaxScore: TErrorMessage;
  experianScore: TErrorMessage;
  transunionScore: TErrorMessage;
}