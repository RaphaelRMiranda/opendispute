import { Dispatch, SetStateAction } from "react";

export enum UserRole {
  ADMIN = "admin",
  MODERATOR = "processor",
  USER = "service",
}

export interface UserInterface extends Document {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface UserProps {
  user: UserInterface;
  setUser: Dispatch<SetStateAction<UserInterface>>;
}
