import { TOption } from "@/components/Selects/types";
import { DisputeInterface } from "@/views/Create/types";

const DisputeRoundAt = (rounds: TOption[], disputes: DisputeInterface[]) => {
  const disputeRounds = disputes.map((dispute) => dispute.disputeRound);

  return rounds
    .filter((_, index) => disputeRounds.includes(index + 1))
    .map((round, index) => ({ ...round, value: index }));
};

export default DisputeRoundAt;
