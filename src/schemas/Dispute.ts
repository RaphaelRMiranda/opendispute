import * as Yup from "yup";

const DisputeSchema = Yup.object().shape({
  date: Yup.string().required("Required"),
  customer: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    middleName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    ssn: Yup.string().test("ssnRequired", "Required", function (value) {
      const itin = this.resolve(Yup.ref("itin"));
      if (!value && !itin) {
        return false;
      }
      return true;
    }),
    itin: Yup.string(),
  }),
  address: Yup.object().shape({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zipCode: Yup.string().required("Required"),
  }),
  disputeRound: Yup.number().required("Required"),
  creditBureau: Yup.object().shape({
    equifax: Yup.boolean().required("Required"),
    experian: Yup.boolean().required("Required"),
    transunion: Yup.boolean().required("Required"),
  }),
  greetingSequence: Yup.string().required("Required"),
  greetingSequenceExtended: Yup.string(),
  closingStatement: Yup.string().required("Required"),
  closingStatementExtended: Yup.string(),
  dispute: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required("Required"),
      dataFunisher: Yup.string().required("Required"),
      equifax: Yup.string(),
      experian: Yup.string(),
      transunion: Yup.string(),
      accountNumber: Yup.string().required("Required"),
      balance: Yup.string().required("Required"),
      action: Yup.string().required("Required"),
      justifyer: Yup.string().required("Required"),
      shows: Yup.object().shape({
        experian: Yup.string().required("Required"),
        equifax: Yup.string().required("Required"),
        transunion: Yup.string().required("Required"),
      }),
      comment: Yup.string(),
    })
  ),
});

export default DisputeSchema;
