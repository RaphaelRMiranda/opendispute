import { DefaultSettingProps } from "@/context/Settings/types";

const GreetingSequenceByRound = (
  greeting: DefaultSettingProps,
  disputeRound: number
) => {
  return greeting[`FD${disputeRound}`];
};

export default GreetingSequenceByRound;
