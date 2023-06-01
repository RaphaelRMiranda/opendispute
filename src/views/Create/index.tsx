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
import { useState, useEffect } from "react";
import GreetingSequence from "./utils/GreetingSequence";
import DisputeRound from "./utils/DisputeRound";
import Layout from "@/components/Layout";
import SwitchTemplate from "./utils/SwitchType";
import { Form } from "../Login/styles";
import {
  handleCreateDocument,
  handleUpdateDocument,
  useDocument,
} from "@/context/Document";
import GenerateId from "./utils/GenerateId";
import Checkbox from "@/components/Inputs/Checkbox";
import ObjectValidation from "./validation/Object";
import { TObjectErrors } from "./validation/types";
import RemoveEmptyFields from "./utils/RemoveEmptyFields";
import { useUser } from "@/context/User";
import { DisputeInterface, DisputeUpdate } from "./types";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CloseStatementByRound from "./utils/CloseStatementByRound";

const Create = () => {
  const { token } = useUser();
  const { object, setObject, errors, setErrors, setLastDispute } =
    useDocument();

  const router = useRouter();

  const errToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to create letter",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const errEditToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to update letter",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const [loading, isLoading] = useState<boolean>(false);

  const [social, setSocial] = useState<string>(
    object?.customer?.ssn ? "ssn" : object?.customer?.ssn ? "itin" : ""
  );

  const [eq, setEq] = useState<boolean>(object?.creditBureau?.equifax || false);
  const [ex, setEx] = useState<boolean>(
    object?.creditBureau?.experian || false
  );
  const [tu, setTu] = useState<boolean>(
    object?.creditBureau?.transunion || false
  );

  const [isEditing] = useState<boolean>(object?._id ? true : false);

  useEffect(() => {
    if (!object.date)
      setObject((prev) => ({
        ...prev,
        date: new Date().toLocaleDateString("en-US"),
      }));

    setLastDispute(object);
  }, [object, setLastDispute, setObject]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    isLoading(true);
    e.preventDefault();
    const errors = ObjectValidation(object);

    if (Object.keys(errors).length === 0) {
      setErrors({} as TObjectErrors);

      if (isEditing) {
        const data = RemoveEmptyFields(object) as DisputeUpdate;
        handleUpdateDocument({ ...data, token })
          .then((response) => {
            isLoading(false);
            router.push("/listing");
            setObject({} as DisputeInterface);
          })
          .catch((error) => {
            isLoading(false);
            console.log(error);
            errEditToast();
          });
      } else {
        const data = RemoveEmptyFields(object) as DisputeInterface;
        handleCreateDocument({ ...data, token })
          .then((response) => {
            isLoading(false);
            setLastDispute(response.data.dispute);
            router.push("/success");
            setObject({} as DisputeInterface);
          })
          .catch((error) => {
            isLoading(false);
            console.log(error);
            errToast();
          });
      }
    } else {
      isLoading(false);
      setErrors(errors);
      console.log(errors);
    }
  };

  const AddDispute = (type: string) => {
    const id: string = GenerateId();

    const newDispute = {
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
      template: SwitchTemplate(object?.dispute?.length || 0, type, id),
    };

    setObject((prev) => ({
      ...prev,
      dispute: [...(prev?.dispute ?? []), newDispute],
    }));
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
                  hover={"cursor:pointer;"}
                  borderBottom={`1px solid ${theme.colors.base.primary}`}
                  padding={15}
                  opacity={1}
                  onClick={() => AddDispute(item)}
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
            <Form onSubmit={handleSubmit}>
              <Box wid="100%" justifyContent="flex-start" alignItems="center">
                <InputText
                  wid="30%"
                  label="Date"
                  placeholder="5/5/2023"
                  defaultValue={
                    object.date
                      ? new Date(object.date).toLocaleDateString("en-US")
                      : new Date().toLocaleDateString("en-US")
                  }
                  readonly
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <InputText
                  wid="32.65%"
                  label="First Name"
                  placeholder="John"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      customer: { ...prev.customer, firstName: e.target.value },
                    }));
                  }}
                  error={errors?.customer?.firstName?.message}
                  defaultValue={object?.customer?.firstName || ""}
                />
                <InputText
                  wid="32.65%"
                  label="Middle Name"
                  placeholder="Doe"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      customer: {
                        ...prev.customer,
                        middleName: e.target.value,
                      },
                    }));
                  }}
                  error={errors?.customer?.middleName?.message}
                  defaultValue={object?.customer?.middleName || ""}
                />
                <InputText
                  wid="32.65%"
                  label="Last Name"
                  placeholder="Steve"
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      customer: { ...prev.customer, lastName: e.target.value },
                    }));
                  }}
                  error={errors?.customer?.lastName?.message}
                  defaultValue={object?.customer?.lastName || ""}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <InputText
                  wid="30%"
                  label="Street Address"
                  placeholder="1234 Main St"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      address: { ...prev.address, street: e.target.value },
                    }));
                  }}
                  error={errors?.address?.street?.message}
                  defaultValue={object?.address?.street || ""}
                />
                <InputText
                  wid="30%"
                  label="City"
                  placeholder="New York"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      address: { ...prev.address, city: e.target.value },
                    }));
                  }}
                  error={errors?.address?.city?.message}
                  defaultValue={object?.address?.city || ""}
                />
                <InputText
                  wid="18.5%"
                  label="State"
                  placeholder="CA"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      address: { ...prev.address, state: e.target.value },
                    }));
                  }}
                  error={errors?.address?.state?.message}
                  defaultValue={object?.address?.state || ""}
                />
                <InputText
                  wid="18.5%"
                  label="Zip Code"
                  placeholder="10001"
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      address: { ...prev.address, zipCode: e.target.value },
                    }));
                  }}
                  error={errors?.address?.zipCode?.message}
                  defaultValue={object?.address?.zipCode || ""}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <InputText
                  wid="35%"
                  label="Date of Birth"
                  placeholder="5/5/1980"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      customer: {
                        ...prev.customer,
                        dateOfBirth: e.target.value,
                      },
                    }));
                  }}
                  error={errors?.customer?.dateOfBirth?.message}
                  defaultValue={object?.customer?.dateOfBirth || ""}
                />
                <Box
                  wid="20%"
                  marginTop={20}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Box wid="100%" justifyContent="flex-start">
                    <Radio
                      label="SSN"
                      onChange={() => {
                        setSocial("ssn");
                        setObject((prev) => ({
                          ...prev,
                          customer: {
                            ...prev.customer,
                            selectedItin: false,
                            selectedSsn: true,
                            ssn: prev?.customer?.itin || "",
                            itin: "",
                          },
                        }));
                      }}
                      checked={social === "ssn"}
                      marginRight={10}
                    />
                    <Radio
                      label="ITIN"
                      onChange={() => {
                        setSocial("itin");
                        setObject((prev) => ({
                          ...prev,
                          customer: {
                            ...prev.customer,
                            selectedItin: true,
                            selectedSsn: false,
                            itin: prev?.customer?.ssn || "",
                            ssn: "",
                          },
                        }));
                      }}
                      checked={social === "itin"}
                      marginLeft={10}
                    />
                  </Box>
                  {errors?.customer?.selectedSsn?.message &&
                    errors?.customer?.selectedSsn?.message !== "undefined" && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                      >
                        {errors?.customer?.selectedSsn?.message}
                      </Text>
                    )}
                </Box>
                <InputText
                  wid="44%"
                  label="Social Number"
                  placeholder="###-##-###"
                  onChange={(e) => {
                    social === "ssn"
                      ? setObject((prev) => ({
                          ...prev,
                          customer: {
                            ...prev.customer,
                            itin: "",
                            ssn: e.target.value,
                          },
                        }))
                      : setObject((prev) => ({
                          ...prev,
                          customer: {
                            ...prev.customer,
                            ssn: "",
                            itin: e.target.value,
                          },
                        }));
                  }}
                  error={errors?.customer?.ssn?.message}
                  defaultValue={
                    social === "ssn"
                      ? object?.customer?.ssn
                      : social === "itin"
                      ? object?.customer?.itin
                      : ""
                  }
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <Box wid="20%" minWid={200}>
                  <SelectText
                    wid="100%"
                    label="Dispute Round"
                    options={DisputeRound}
                    marginRight={10}
                    onChange={(e) =>
                      setObject((prev) => ({
                        ...prev,
                        disputeRound: Number(e.target.value),
                      }))
                    }
                    error={errors?.disputeRound?.message}
                    defaultValue={object?.disputeRound || ""}
                  />
                </Box>
                <Box
                  wid="30%"
                  marginTop={20}
                  marginRight={10}
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Box justifyContent="center">
                    <Checkbox
                      label="Equifax"
                      marginRight={10}
                      onClick={() => setEq(!eq)}
                      onChange={(e) =>
                        setObject((prev) => ({
                          ...prev,
                          creditBureau: {
                            ...prev.creditBureau,
                            equifax: e,
                          },
                        }))
                      }
                      checked={eq}
                    />
                    <Checkbox
                      label="Experian"
                      marginRight={10}
                      onClick={() => setEx(!ex)}
                      onChange={(e) =>
                        setObject((prev) => ({
                          ...prev,
                          creditBureau: {
                            ...prev.creditBureau,
                            experian: e,
                          },
                        }))
                      }
                      checked={ex}
                    />
                    <Checkbox
                      label="TransUnion"
                      onClick={() => setTu(!tu)}
                      onChange={(e) =>
                        setObject((prev) => ({
                          ...prev,
                          creditBureau: {
                            ...prev.creditBureau,
                            transunion: e,
                          },
                        }))
                      }
                      checked={tu}
                    />
                  </Box>
                  {errors?.creditBureau?.equifax?.message &&
                    errors?.creditBureau?.equifax?.message !== "undefined" && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                      >
                        {errors?.creditBureau?.equifax?.message}
                      </Text>
                    )}
                </Box>
                <SelectText
                  wid="49%"
                  label="Greeting Sequence"
                  options={GreetingSequence}
                  onChange={(e) =>
                    setObject((prev) => ({
                      ...prev,
                      greetingSequence: e.target.value,
                    }))
                  }
                  error={errors?.greetingSequence?.message}
                  defaultValue={object?.greetingSequence || ""}
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
                  onChange={(e) =>
                    setObject((prev) => ({
                      ...prev,
                      greetingSequenceExtended: e.target.value,
                    }))
                  }
                  error={errors?.greetingSequenceExtended?.message}
                  defaultValue={object?.greetingSequenceExtended || ""}
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
                  options={CloseStatementByRound(object?.disputeRound || 1)}
                  onChange={(e) =>
                    setObject((prev) => ({
                      ...prev,
                      closingStatement: e.target.value,
                    }))
                  }
                  error={errors?.closingStatement?.message}
                  defaultValue={object?.closingStatement || ""}
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
                  onChange={(e) =>
                    setObject((prev) => ({
                      ...prev,
                      closingStatementExtended: e.target.value,
                    }))
                  }
                  error={errors?.closingStatementExtended?.message}
                  defaultValue={object?.closingStatementExtended || ""}
                />
              </Box>
              <Disputes disputes={object?.dispute} loading={loading} />
            </Form>
          </Box>
        </Box>
      </Page>
    </Layout>
  );
};

export default Create;
