import { Dispatch, SetStateAction } from "react";

export type CreateType = {
  type: string;
};

export type Types = {
  _id: string;
  type: string;
};

export interface TypesProps {
  types: Types[];
  setTypes: Dispatch<SetStateAction<Types[]>>;
}
