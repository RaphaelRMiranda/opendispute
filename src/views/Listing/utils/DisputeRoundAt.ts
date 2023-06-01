import { TOption } from "@/components/Selects/types";
import { DisputeInterface } from "@/views/Create/types";

const DisputeRoundAt = (rounds: TOption[], disputes: DisputeInterface[]) => {
  const disputeRounds = disputes.map((dispute) => dispute.disputeRound);

  return rounds.filter(
    (round) => disputeRounds.indexOf(Number(round.value) + 1) >= 0
  );
};

export default DisputeRoundAt;
