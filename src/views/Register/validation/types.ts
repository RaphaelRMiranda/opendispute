export type TErrorMessage = {
  message: string;
};

export type TObjectErrors = {
  firstName?: TErrorMessage;
  middleName?: TErrorMessage;
  lastName?: TErrorMessage;
  email?: TErrorMessage;
  password?: TErrorMessage;
  confirmPassword?: TErrorMessage;
  role?: TErrorMessage;
};
