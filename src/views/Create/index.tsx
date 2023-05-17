import Box from "@/components/Box";
import Add from "@/components/Header/icons/Add";
import InputText from "@/components/Inputs/Text";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import Items from "./Items";
import Disputes from "./Disputes";
import SelectText from "@/components/Selects/Text";
import Radio from "@/components/Inputs/Radio";
import { useEffect, useState } from "react";
import { DisputeInterface, TCreditBureau, TDispute } from "./types";
import CreditBureau from "./utils/CreditBureau";
import GreetingSequence from "./utils/GreetingSequence";
import DisputeRound from "./utils/DisputeRound";
import MultipleSelect from "@/components/Selects/Multiple";
import Layout from "@/components/Layout";
import SwitchTemplate from "./utils/SwitchType";
import { Form } from "../Login/styles";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DisputeSchema from "@/schemas/Dispute";
import { useDocument } from "@/context/Document";
import GenerateId from "./utils/GenerateId";
import { TOption } from "@/components/Selects/types";

const Create = () => {
  const {
    disputes,
    setDisputes,
    setLetterRegister,
    setLetterErrors,
    setLetterValues,
  } = useDocument();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    resetField,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(DisputeSchema),
  });

  const Submit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);

    setLetterRegister({ register });
    setLetterValues({ setValue });
    setLetterErrors({ setError, errors, clean: clearErrors, resetField });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, register, setValue, setError, clearErrors, resetField]);

  const [social, setSocial] = useState<string>("");
  const [socialValue, setSocialValue] = useState<string>("");

  const [object, setObject] = useState<DisputeInterface>(
    {} as DisputeInterface
  );

  const AddDispute = (type: string) => {
    const id: string = GenerateId();

    setDisputes((prev) => [
      ...prev,
      {
        id,
        type,
        dataFunisher: "",
        equifax: false,
        experian: false,
        transunion: false,
        accountNumber: "",
        balance: 0,
        action: "",
        justifyer: "",
        shows: {
          equifax: "",
          experian: "",
          transunion: "",
        },
        comment: "",
        template: SwitchTemplate(prev.length, type, id, register),
      },
    ]);
  };

  const handleChangeBureau = (arr: TOption[]) => {
    const updatedValues: TCreditBureau = {
      equifax: false,
      experian: false,
      transunion: false,
    };

    arr.forEach((item) => {
      updatedValues[item.value as keyof TCreditBureau] = true;
    });

    setValue("creditBureau", updatedValues);

    const allValuesFalse = Object.values(updatedValues).every(
      (value) => !value
    );

    if (allValuesFalse) {
      setError("creditBureau", {
        type: "manual",
        message: "Required at least one credit bureau",
      });
    } else {
      clearErrors("creditBureau");
    }
  };

  const handleChangeSocial = (value: string) => {
    setSocial(value);
    if (value === "ssn") {
      setValue("customer.ssn", socialValue);
      resetField("customer.itin");
    } else {
      setValue("customer.itin", socialValue);
      resetField("customer.ssn");
    }
  };

  return (
    <Layout>
      <Page
        title="Create letter"
        description="Create your letter carefully, always check that the information is correct"
      >
        <Box
          wid="100%"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            minWid={250}
            flexDirection="column"
            backgroundColor={theme.colors.base.white}
            borderRadius={6}
            padding={10}
          >
            {Items.map((item) => {
              return (
                <Box
                  key={item}
                  wid="100%"
                  hover={item === "Charge-offs" ? "cursor:pointer;" : ""}
                  borderBottom={`1px solid ${theme.colors.base.primary}`}
                  padding={15}
                  opacity={item === "Charge-offs" ? 1 : 0.5}
                  onClick={
                    item === "Charge-offs" ? () => AddDispute(item) : () => {}
                  }
                >
                  <Add size={theme.fonts.sizes.md} />
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                    weight={500}
                    marginLeft={10}
                    pointerEvents="none"
                  >
                    {item}
                  </Text>
                </Box>
              );
            })}
          </Box>
          <Box
            wid="100%"
            maxWid={1000}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginLeft={20}
          >
            <Form onSubmit={handleSubmit(Submit)}>
              <Box wid="100%" justifyContent="flex-start" alignItems="center">
                <InputText
                  wid="30%"
                  label="Date"
                  placeholder="5/5/2023"
                  value={new Date().toLocaleDateString("en-US")}
                  reg={register("date")}
                  readonly
                  error={String(errors?.date?.message)}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <InputText
                  wid="100%"
                  label="First Name"
                  placeholder="John"
                  marginRight={10}
                  reg={register("customer.firstName")}
                  error={String((errors?.customer as any)?.firstName?.message)}
                />
                <InputText
                  wid="100%"
                  label="Middle Name"
                  placeholder="Doe"
                  marginRight={10}
                  reg={register("customer.middleName")}
                  error={String((errors?.customer as any)?.middleName?.message)}
                />
                <InputText
                  wid="100%"
                  label="Last Name"
                  placeholder="Steve"
                  reg={register("customer.lastName")}
                  error={String((errors?.customer as any)?.lastName?.message)}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <InputText
                  wid="50%"
                  label="Street Address"
                  placeholder="1234 Main St"
                  marginRight={10}
                  reg={register("address.street")}
                  error={String((errors?.address as any)?.street?.message)}
                />
                <InputText
                  wid="50%"
                  label="City"
                  placeholder="New York"
                  marginRight={10}
                  reg={register("address.city")}
                  error={String((errors?.address as any)?.city?.message)}
                />
                <InputText
                  wid="20%"
                  label="State"
                  placeholder="CA"
                  marginRight={10}
                  reg={register("address.state")}
                  error={String((errors?.address as any)?.state?.message)}
                />
                <InputText
                  wid="20%"
                  label="Zip Code"
                  placeholder="10001"
                  reg={register("address.zipCode")}
                  error={String((errors?.address as any)?.zipCode?.message)}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <InputText
                  wid="50%"
                  label="Date of Birth"
                  placeholder="5/5/1980"
                  marginRight={10}
                  reg={register("customer.dateOfBirth")}
                  error={String(
                    (errors?.customer as any)?.dateOfBirth?.message
                  )}
                />
                <Box wid="15%" marginTop={20} justifyContent="space-between">
                  <Radio
                    label="SSN"
                    onChange={() => handleChangeSocial("ssn")}
                    checked={social === "ssn"}
                    marginRight={10}
                    error={String((errors?.customer as any)?.ssn?.message)}
                  />
                  <Radio
                    label="ITIN"
                    onChange={() => handleChangeSocial("itin")}
                    checked={social === "itin"}
                    marginRight={10}
                    error={String((errors?.customer as any)?.ssn?.message)}
                  />
                </Box>
                <InputText
                  wid="35%"
                  label="Social Number"
                  placeholder="###-##-###"
                  onChange={(e) => setSocialValue(e.target.value)}
                  reg={
                    social === "ssn"
                      ? register("customer.ssn")
                      : register("customer.itin")
                  }
                  error={String((errors?.customer as any)?.ssn?.message)}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <SelectText
                  wid="20%"
                  label="Dispute Round"
                  options={DisputeRound}
                  marginRight={10}
                  reg={register("disputeRound")}
                  error={String(errors?.disputeRound?.message)}
                />
                <MultipleSelect
                  wid="40%"
                  label="Credit Bureau"
                  options={CreditBureau}
                  marginRight={10}
                  onChange={(e) => handleChangeBureau(e as TOption[])}
                  error={String(
                    (errors?.creditBureau as any) &&
                      (errors?.creditBureau as any)?.message
                  )}
                />
                <SelectText
                  wid="40%"
                  label="Greeting Sequence"
                  options={GreetingSequence}
                  reg={register("greetingSequence")}
                  error={String(errors?.greetingSequence?.message)}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <InputText
                  wid="100%"
                  label="Greeting Sequence Extended"
                  placeholder="More text for the greeting sequence"
                  reg={register("greetingSequenceExtended")}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <SelectText
                  wid="100%"
                  label="Closing Statement"
                  options={[
                    {
                      label: "Please send me an updated",
                      value: "Please send me an updated",
                    },
                  ]}
                  reg={register("closingStatement")}
                  error={String(errors?.closingStatement?.message)}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <InputText
                  wid="100%"
                  label="Closing Statement Extended"
                  placeholder="More text for the closing statement"
                  reg={register("closingStatementExtended")}
                />
              </Box>
              <Disputes disputes={disputes} />
            </Form>
          </Box>
        </Box>
      </Page>
    </Layout>
  );
};

export default Create;
