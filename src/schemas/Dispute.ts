import * as Yup from "yup";

const DisputeSchema = Yup.object().shape({
  date: Yup.string().required("Obrigatório"),
  customer: Yup.object().shape({
    firstName: Yup.string().required("Obrigatório"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Obrigatório"),
    dateOfBirth: Yup.string().required("Obrigatório"),
    ssn: Yup.string(),
    itin: Yup.string(),
  }),
  address: Yup.object().shape({
    number: Yup.number(),
    street: Yup.string().required("Obrigatório"),
    city: Yup.string().required("Obrigatório"),
    state: Yup.string().required("Obrigatório"),
    zipCode: Yup.string().required("Obrigatório"),
  }),
  disputeRound: Yup.number().required("Obrigatório"),
  creditBureau: Yup.object().shape({
    equifax: Yup.boolean().required("Obrigatório"),
    experian: Yup.boolean().required("Obrigatório"),
    transunion: Yup.boolean().required("Obrigatório"),
  }),
  greetingSequence: Yup.string().required("Obrigatório"),
  greetingSequenceExtended: Yup.string(),
  closingStatement: Yup.string().required("Obrigatório"),
  closingStatementExtended: Yup.string(),
  dispute: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required("Obrigatório"),
      dataFunisher: Yup.string().required("Obrigatório"),
      equifax: Yup.boolean().required("Obrigatório"),
      experian: Yup.boolean().required("Obrigatório"),
      transunion: Yup.boolean().required("Obrigatório"),
      accountNumber: Yup.string().required("Obrigatório"),
      balance: Yup.number().required("Obrigatório"),
      action: Yup.string().required("Obrigatório"),
      justifyer: Yup.string().required("Obrigatório"),
      shows: Yup.object().shape({
        experian: Yup.string().required("Obrigatório"),
        equifax: Yup.string().required("Obrigatório"),
        transunion: Yup.string().required("Obrigatório"),
      }),
      comment: Yup.string(),
    })
  ),
});

export default DisputeSchema;
