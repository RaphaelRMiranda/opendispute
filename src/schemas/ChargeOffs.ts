import * as Yup from 'yup';

const ChargeOffsSchema = Yup.object().shape({
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
})