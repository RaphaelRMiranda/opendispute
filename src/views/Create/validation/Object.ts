import { DisputeInterface } from "../types";
import { TDisputeError, TObjectErrors } from "./types";

const ObjectValidation = (obj: DisputeInterface) => {
  const errors: TObjectErrors = {} as TObjectErrors;
  const disputes: TDisputeError[] = [];

  if (!obj?.date) {
    errors.date = { message: "Date is required" };
  }

  if (!!!obj?.customer?.firstName) {
    errors.customer = {
      ...errors.customer,
      firstName: { message: "First name is required" },
    };
  } else {
    if (obj.customer.firstName.length < 2) {
      errors.customer = {
        ...errors.customer,
        firstName: {
          message: "First name must be at least 2 characters",
        },
      };
    } else {
      if (errors.customer) {
        delete errors.customer.firstName;
      }
    }
  }

  // if (!obj?.customer?.middleName) {
  //   errors.customer = {
  //     ...errors.customer,
  //     middleName: { message: "Middle name is required" },
  //   };
  // } else {
  //   if (obj.customer.middleName.length < 2) {
  //     errors.customer = {
  //       ...errors.customer,
  //       middleName: {
  //         message: "Middle name must be at least 2 characters",
  //       },
  //     };
  //   } else {
  //     if (errors.customer) {
  //       delete errors.customer.middleName;
  //     }
  //   }
  // }

  if (!obj?.customer?.lastName) {
    errors.customer = {
      ...errors.customer,
      lastName: { message: "Last name is required" },
    };
  } else {
    if (obj.customer.lastName.length < 2) {
      errors.customer = {
        ...errors.customer,
        lastName: {
          message: "Last name must be at least 2 characters",
        },
      };
    } else {
      if (errors.customer) {
        delete errors.customer.lastName;
      }
    }
  }

  if (!obj?.customer?.dateOfBirth) {
    errors.customer = {
      ...errors.customer,
      dateOfBirth: { message: "Date of birth is required" },
    };
  } else {
    if (errors.customer) {
      delete errors.customer.dateOfBirth;
    }
  }

  if (!obj?.customer?.selectedSsn && !obj?.customer?.selectedItin) {
    errors.customer = {
      ...errors.customer,
      selectedSsn: { message: "Select at least one option" },
      selectedItin: { message: "Select at least one option" },
    };
  } else {
    if (errors.customer) {
      delete errors.customer.selectedSsn;
      delete errors.customer.selectedItin;
    }
  }

  if (!obj?.customer?.ssn && !obj?.customer?.itin) {
    errors.customer = {
      ...errors.customer,
      ssn: { message: "SSN or ITIN is required" },
      itin: { message: "SSN or ITIN is required" },
    };
  } else {
    if (errors.customer) {
      delete errors.customer.ssn;
      delete errors.customer.itin;
    }
  }

  if (!obj?.address?.street) {
    errors.address = {
      ...errors.address,
      street: { message: "Street name is required" },
    };
  } else {
    if (errors.address) {
      delete errors.address.street;
    }
  }

  if (!obj?.address?.city) {
    errors.address = {
      ...errors.address,
      city: { message: "City is required" },
    };
  } else {
    if (errors.address) {
      delete errors.address.city;
    }
  }

  if (!obj?.address?.state) {
    errors.address = {
      ...errors.address,
      state: { message: "State is required" },
    };
  } else {
    if (errors.address) {
      delete errors.address.state;
    }
  }

  if (!obj?.address?.zipCode) {
    errors.address = {
      ...errors.address,
      zipCode: { message: "Zip code is required" },
    };
  } else {
    if (errors.address) {
      delete errors.address.zipCode;
    }
  }

  if (!obj?.disputeRound) {
    errors.disputeRound = { message: "Dispute round is required" };
  }

  if (
    !obj?.creditBureau?.equifax &&
    !obj?.creditBureau?.experian &&
    !obj?.creditBureau?.transunion
  ) {
    errors.creditBureau = {
      ...errors.creditBureau,
      experian: { message: "Select at least one credit bureau" },
      equifax: { message: "Select at least one credit bureau" },
      transunion: { message: "Select at least one credit bureau" },
    };
  } else {
    if (errors.creditBureau) {
      delete errors.creditBureau.experian;
      delete errors.creditBureau.equifax;
      delete errors.creditBureau.transunion;
    }
  }

  if (!obj?.greetingSequence) {
    errors.greetingSequence = { message: "Greeting sequence is required" };
  }

  if (!obj?.closingStatement) {
    errors.closingStatement = { message: "Closing statement is required" };
  }

  // Disputes
  if (obj?.dispute && obj?.dispute?.length > 0) {
    obj.dispute.forEach((dispute, index) => {
      const disputeErrors: TDisputeError = {} as TDisputeError;

      if (!dispute?.type) {
        disputeErrors.type = { message: "Type is required" };
      }

      console.log(dispute?.type)

      if (dispute?.type === "Personal Info") {
        if (!dispute?.inaccurateInformation) {
          disputeErrors.inaccurateInformation = {
            message: "Inaccurate information is required",
          };
        }
      } else {
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

        // if (!dispute?.balance) {
        //   disputeErrors.balance = { message: "Balance is required" };
        // }
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

  if (disputes && disputes.length > 0) {
    errors.dispute = disputes;
  }

  return errors;
};

export default ObjectValidation;
