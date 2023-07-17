import { DefaultSettingProps } from "@/context/Settings/types";

const CloseStatementByRound = (
  closing: DefaultSettingProps,
  disputeRound: number
) => {
  return closing[`FD${disputeRound}`];
};

export default CloseStatementByRound;
