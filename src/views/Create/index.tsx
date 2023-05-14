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
import { DisputeInterface, TDispute } from "./types";
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

const Create = () => {
  const { disputes, setDisputes } = useDocument();

  const {
    register,
    handleSubmit,
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
  }, [errors]);

  const [social, setSocial] = useState<string>("");

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

  // criar registro para o multiple select
  // precisa ser atribuido ao form e ter as validações corretas

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
                />
                <InputText
                  wid="100%"
                  label="Middle Name"
                  placeholder="Doe"
                  marginRight={10}
                  reg={register("customer.middleName")}
                />
                <InputText
                  wid="100%"
                  label="Last Name"
                  placeholder="Steve"
                  reg={register("customer.lastName")}
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
                />
                <InputText
                  wid="30%"
                  label="State"
                  placeholder="CA"
                  marginRight={10}
                  reg={register("address.state")}
                />
                <InputText
                  wid="20%"
                  label="Zip Code"
                  placeholder="10001"
                  reg={register("address.zipCode")}
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
                />
                <Box wid="15%" marginTop={20} justifyContent="space-between">
                  <Radio
                    label="SSN"
                    onChange={() => setSocial("ssn")}
                    checked={social === "ssn"}
                    marginRight={10}
                  />
                  <Radio
                    label="ITIN"
                    onChange={() => setSocial("itin")}
                    checked={social === "itin"}
                    marginRight={10}
                  />
                </Box>
                <InputText
                  wid="35%"
                  label="Social Number"
                  placeholder="###-##-###"
                  reg={
                    social === "ssn"
                      ? register("customer.ssn")
                      : register("customer.itin")
                  }
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
                />
                <MultipleSelect
                  wid="40%"
                  label="Credit Bureau"
                  options={CreditBureau}
                  marginRight={10}
                  onChange={(e) => console.log(e)}
                  // register for multiple select
                />
                <SelectText
                  wid="40%"
                  label="Greeting Sequence"
                  options={GreetingSequence}
                  reg={register("greetingSequence")}
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
                      label: "1",
                      value: "1",
                    },
                  ]}
                  reg={register("closingStatement")}
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
