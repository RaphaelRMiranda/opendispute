import { Dispatch, SetStateAction } from "react";

export enum UserRole {
  ADMIN = "admin",
  MODERATOR = "processor",
  USER = "service",
  DEV = "dev",
  CEO = "ceo",
}

export interface UserInterface extends Document {
  _id?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface UserAuthInterface {
  user: UserInterface;
  token: string;
}

export type UserData = {
  email: string;
  password: string;
};

export interface UserProps {
  user: UserInterface;
  setUser: Dispatch<SetStateAction<UserInterface>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}
