export type TErrorMessage = {
  message: string;
};

export type TCustomerError = {
  firstName?: TErrorMessage;
  middleName?: TErrorMessage;
  lastName?: TErrorMessage;
  dateOfBirth?: TErrorMessage;
  ssn?: TErrorMessage;
  itin?: TErrorMessage;
  selectedSsn?: TErrorMessage;
  selectedItin?: TErrorMessage;
};

type TAddressError = {
  street?: TErrorMessage;
  city?: TErrorMessage;
  state?: TErrorMessage;
  zipCode?: TErrorMessage;
};

export type TCreditBureauError = {
  equifax?: TErrorMessage;
  experian?: TErrorMessage;
  transunion?: TErrorMessage;
};

export type TDisputeError = {
  type?: TErrorMessage;
  dataFunisher?: TErrorMessage;
  equifax?: TErrorMessage;
  experian?: TErrorMessage;
  transunion?: TErrorMessage;
  accountNumber?: TErrorMessage;
  balance?: TErrorMessage;
  action?: TErrorMessage;
  justifyer?: TErrorMessage;
};

export type TObjectErrors = {
  date?: TErrorMessage;
  customer?: TCustomerError;
  address?: TAddressError;
  disputeRound?: TErrorMessage;
  creditBureau?: TCreditBureauError;
  greetingSequence?: TErrorMessage;
  greetingSequenceExtended?: TErrorMessage;
  closingStatement?: TErrorMessage;
  closingStatementExtended?: TErrorMessage;
  dispute?: TDisputeError[];
};
