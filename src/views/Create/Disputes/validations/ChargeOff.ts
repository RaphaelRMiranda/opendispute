import { TDispute } from "../../types";
import { TDisputeError } from "../../validation/types";

const ChargeOffValidation = (
  dispute: TDispute[],
  disputes: TDisputeError[]
) => {
  if (dispute && dispute?.length > 0) {
    dispute.forEach((dispute, index) => {
      const disputeErrors: TDisputeError = {} as TDisputeError;

      if (!dispute?.type) {
        disputeErrors.type = { message: "Type is required" };
      }

      if (!dispute?.dataFunisher) {
        disputeErrors.dataFunisher = {
          message: "Data furnisher is required",
        };
      }

      if (!dispute?.accountNumber) {
        disputeErrors.accountNumber = {
          message: "Account number is required",
        };
      }

      if (!dispute?.balance) {
        disputeErrors.balance = { message: "Balance is required" };
      }

      if (!dispute?.action) {
        disputeErrors.action = { message: "Action is required" };
      }

      if (!dispute?.justifyer) {
        disputeErrors.justifyer = { message: "Justifyer is required" };
      }

      if (!dispute?.equifax && !dispute?.experian && !dispute?.transunion) {
        disputeErrors.equifax = {
          message: "Select at least one credit bureau",
        };
        disputeErrors.experian = {
          message: "Select at least one credit bureau",
        };
        disputeErrors.transunion = {
          message: "Select at least one credit bureau",
        };
      }

      if (disputeErrors && Object.keys(disputeErrors).length > 0) {
        disputes[index] = disputeErrors;
      }
    });
  }
};

export default ChargeOffValidation;