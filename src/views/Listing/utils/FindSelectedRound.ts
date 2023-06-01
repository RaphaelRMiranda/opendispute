import { Dispatch, SetStateAction } from "react";
import { TFactualDispute } from "../types";

export const EditSelectedRound = (
  socialNumber: string,
  round: number,
  setFactual: Dispatch<SetStateAction<TFactualDispute[]>>
) => {
  setFactual((prev) => {
    const newFactual = [...prev];
    const index = newFactual.findIndex((item) => item.id === socialNumber);
    if (index === -1) {
      newFactual.push({ id: socialNumber, round });
      return newFactual;
    }
    newFactual[index].round = round;
    return newFactual;
  });
};

const FindSelectedRound = (socialNumber: string, rounds: TFactualDispute[]) => {
  const selectedRound = rounds.find((item) => item.id === socialNumber);
  return selectedRound?.round || 0;
};

export default FindSelectedRound;
