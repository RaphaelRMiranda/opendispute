/* eslint-disable react-hooks/exhaustive-deps */
import CustomBox from "@/components/Box";
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
import { DisputeInterface, DisputeUpdate, TDisputePI } from "./types";
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CloseStatementByRound from "./utils/CloseStatementByRound";
import GreetingSequenceByRound from "./utils/GreetingSequenceByRound";
import SocialNumberMask from "./utils/SocialNumberMask";
import DolarMask from "./utils/DolarMask";
import DateMask from "./utils/DateMask";
import { getSettings, useSettings } from "@/context/Settings";
import Loading from "@/components/Buttons/icons/Loading";

const Create = () => {
  const { token } = useUser();
  const { settings, setSettings } = useSettings();
  const { object, setObject, errors, setErrors } = useDocument();

  const router = useRouter();

  const sucEditToast = useToast({
    position: "top",
    duration: 5000,
    title: "Dispute updated successfully",
    description: "The dispute was updated successfully, check the listing page",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

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

  const errSettingsToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to get settings",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const [loading, isLoading] = useState<boolean>(false);
  const [onLoadingSettings, setOnLoadingSettings] = useState<boolean>(true);

  const [socialNumber, setSocialNumber] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  const [social, setSocial] = useState<string>(
    object?.customer?.ssn ? "ssn" : object?.customer?.itin ? "itin" : ""
  );

  const [eq, setEq] = useState<boolean>(object?.creditBureau?.equifax || false);
  const [ex, setEx] = useState<boolean>(
    object?.creditBureau?.experian || false
  );
  const [tu, setTu] = useState<boolean>(
    object?.creditBureau?.transunion || false
  );

  const [isEditing] = useState<boolean>(
    object?._id && router.pathname.indexOf(`/update`) >= 0 ? true : false
  );

  const [isFactual] = useState<boolean>(
    object?._id && router.pathname.indexOf(`/factual`) >= 0 ? true : false
  );

  const [onErrorSettings, setOnErrorSettings] = useState<boolean>(false);

  useEffect(() => {
    if (isEditing || isFactual) {
      social === "ssn"
        ? setObject((prev) => ({
            ...prev,
            customer: {
              ...prev.customer,
              selectedItin: false,
              selectedSsn: true,
            },
          }))
        : setObject((prev) => ({
            ...prev,
            customer: {
              ...prev.customer,
              selectedItin: true,
              selectedSsn: false,
            },
          }));
    }

    if (isFactual) {
      setObject((prev) => ({
        ...prev,
        _id: "",
        date: new Date().toLocaleDateString("en-US"),
        // dispute: [],
      }));
    }
  }, [isEditing, isFactual, setObject, social]);

  useEffect(() => {
    if (!object.date)
      setObject((prev) => ({
        ...prev,
        date: new Date().toLocaleDateString("en-US"),
      }));
  }, [object, isEditing, social]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    isLoading(true);
    e.preventDefault();
    const errors = ObjectValidation(object);

    if (Object.keys(errors).length === 0) {
      setErrors({} as TObjectErrors);
      if (isEditing) {
        const data = RemoveEmptyFields(object) as DisputeUpdate;

        const balance = data.dispute?.map((dispute) => {
          delete dispute._id;
          return {
            ...dispute,
            balance: Number(
              DolarMask(String(dispute.balance).replace(/\D/g, ""))
                .replaceAll("$", "")
                .replaceAll(",", "")
            ),
          };
        });

        const filteredData = {
          ...data,
          dispute: balance,
        };

        handleUpdateDocument({ ...filteredData, token })
          .then((response) => {
            isLoading(false);
            sucEditToast();
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

        const balance = data.dispute?.map((dispute) => {
          delete dispute._id;
          return {
            ...dispute,
            balance: Number(
              DolarMask(String(dispute.balance).replace(/\D/g, ""))
                .replaceAll("$", "")
                .replaceAll(",", "")
            ),
          };
        });

        const filteredData = {
          ...data,
          dispute: balance,
        };
        
        handleCreateDocument({ ...filteredData, token })
          .then((response) => {
            isLoading(false);
            router.push(`/success/${response.data.dispute._id}`);
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

  const handleChangeSocialNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSocialNumber(SocialNumberMask(value));
  };

  const handleChangeDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDateOfBirth(DateMask(value));
  };

  const handleGetSettings = () => {
    getSettings({ token })
      .then((response) => {
        setSettings(response.data);
        setOnLoadingSettings(false);
      })
      .catch((err) => {
        console.log(err);
        errSettingsToast();
        setOnLoadingSettings(false);
        setOnErrorSettings(true);
      });
  };

  useEffect(() => {
    if (token && token.length > 5) handleGetSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Layout>
      <Page
        title="Create letter"
        description="Create your letter carefully, always check that the information is correct"
      >
        <Box
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
        >
          <CustomBox
            wid="100%"
            flexDirection="column"
            display={["flex", "flex", "flex", "none"]}
          >
            <SelectText
              wid="100%"
              label="Dispute type"
              options={[
                {
                  label: "Select a dispute type",
                  value: "",
                },
                ...Items.map((item) => {
                  return { value: item, label: item };
                }),
              ]}
              onChange={(e) => AddDispute(e.target.value)}
            />
            <CustomBox
              wid="100%"
              hei="1px"
              backgroundColor={theme.colors.base.gray[100]}
              margin={`10px 0 0 0`}
            />
          </CustomBox>
          <CustomBox
            display={["none", "none", "none", "flex"]}
            minWid={250}
            flexDirection="column"
            backgroundColor={theme.colors.base.white}
            borderRadius={6}
            padding={10}
          >
            {Items.map((item) => {
              return (
                <CustomBox
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
                </CustomBox>
              );
            })}
          </CustomBox>
          <CustomBox
            wid="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginLeft={[0, 0, 0, 20]}
            marginTop={[20, 20, 20, 0]}
          >
            <Form onSubmit={handleSubmit}>
              <CustomBox
                wid="100%"
                justifyContent="flex-start"
                alignItems="center"
              >
                <InputText
                  wid={["100%", "100%", "100%", "30%"]}
                  label="Date"
                  placeholder="5/5/2023"
                  defaultValue={
                    object.date
                      ? isFactual
                        ? new Date().toLocaleDateString("en-US")
                        : new Date(object.date).toLocaleDateString("en-US")
                      : new Date().toLocaleDateString("en-US")
                  }
                  readonly
                />
              </CustomBox>
              <CustomBox
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <InputText
                  wid={["100%", "100%", "100%", "32.65%"]}
                  label="First Name"
                  placeholder="John"
                  marginRight={[0, 0, 0, 10]}
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
                  wid={["100%", "100%", "100%", "32.65%"]}
                  label="Middle Name"
                  placeholder="Doe"
                  marginRight={[0, 0, 0, 10]}
                  marginTop={[10, 10, 10, 0]}
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
                  wid={["100%", "100%", "100%", "32.65%"]}
                  label="Last Name"
                  placeholder="Steve"
                  marginTop={[10, 10, 10, 0]}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      customer: { ...prev.customer, lastName: e.target.value },
                    }));
                  }}
                  error={errors?.customer?.lastName?.message}
                  defaultValue={object?.customer?.lastName || ""}
                />
              </CustomBox>
              <CustomBox
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <InputText
                  wid={["100%", "100%", "100%", "30%"]}
                  label="Street Address"
                  placeholder="1234 Main St"
                  marginRight={[0, 0, 0, 10]}
                  marginBottom={[10, 10, 10, 0]}
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
                  wid={["50%", "50%", "50%", "30%"]}
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
                  wid={["20%", "20%", "20%", "18.5%"]}
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
                  wid={["24%", "24%", "24%", "18.5%"]}
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
              </CustomBox>
              <CustomBox
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <InputText
                  wid={["100%", "100%", "100%", "35%"]}
                  label="Date of Birth"
                  placeholder="5/5/1980"
                  marginRight={[0, 0, 0, 10]}
                  onChange={(e) => {
                    handleChangeDateOfBirth(e);
                    setObject((prev) => ({
                      ...prev,
                      customer: {
                        ...prev.customer,
                        dateOfBirth: e.target.value,
                      },
                    }));
                  }}
                  error={errors?.customer?.dateOfBirth?.message}
                  value={
                    dateOfBirth
                      ? DateMask(dateOfBirth)
                      : DateMask(object?.customer?.dateOfBirth) || ""
                  }
                  maxLength={10}
                />
                <CustomBox
                  wid={["100%", "100%", "100%", "20%"]}
                  marginTop={[15, 15, 15, 20]}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <CustomBox
                    wid="100%"
                    justifyContent={[
                      "flex-end",
                      "flex-end",
                      "flex-end",
                      "flex-start",
                    ]}
                  >
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
                  </CustomBox>
                  {errors?.customer?.selectedSsn?.message &&
                    errors?.customer?.selectedSsn?.message !== "undefined" && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                      >
                        {errors?.customer?.selectedSsn?.message}
                      </Text>
                    )}
                </CustomBox>
                <InputText
                  wid={["100%", "100%", "100%", "44%"]}
                  label="Social Number"
                  placeholder="###-##-###"
                  onChange={(e) => {
                    handleChangeSocialNumber(e);
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
                  maxLength={11}
                  error={errors?.customer?.ssn?.message}
                  value={
                    social === "ssn"
                      ? SocialNumberMask(object?.customer?.ssn)
                      : social === "itin"
                      ? SocialNumberMask(object?.customer?.itin)
                      : socialNumber
                  }
                  marginTop={[10, 10, 10, 0]}
                />
              </CustomBox>
              <CustomBox
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
                flexWrap="wrap"
              >
                <CustomBox wid={["100%", "100%", "100%", "20%"]} minWid={200}>
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
                </CustomBox>
                <CustomBox
                  wid={["100%", "100%", "100%", "30%"]}
                  marginTop={[15, 15, 15, 20]}
                  marginRight={[0, 0, 0, 10]}
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <CustomBox justifyContent="center">
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
                  </CustomBox>
                  {errors?.creditBureau?.equifax?.message &&
                    errors?.creditBureau?.equifax?.message !== "undefined" && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                      >
                        {errors?.creditBureau?.equifax?.message}
                      </Text>
                    )}
                </CustomBox>
                <SelectText
                  wid={["100%", "100%", "100%", "49%"]}
                  label="Greeting Sequence"
                  options={GreetingSequenceByRound(
                    settings.greetingSequence || {},
                    object?.disputeRound || 1
                  )}
                  marginTop={[15, 15, 15, 0]}
                  onChange={(e) =>
                    setObject((prev) => ({
                      ...prev,
                      greetingSequence: e.target.value,
                    }))
                  }
                  error={errors?.greetingSequence?.message}
                  defaultValue={object?.greetingSequence || ""}
                />
              </CustomBox>
              <CustomBox
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
              </CustomBox>
              <CustomBox
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <SelectText
                  wid="100%"
                  label="Closing Statement"
                  options={CloseStatementByRound(
                    settings.closingStatement || {},
                    object?.disputeRound || 1
                  )}
                  onChange={(e) =>
                    setObject((prev) => ({
                      ...prev,
                      closingStatement: e.target.value,
                    }))
                  }
                  error={errors?.closingStatement?.message}
                  defaultValue={object?.closingStatement || ""}
                />
              </CustomBox>
              <CustomBox
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
              </CustomBox>
              {!onLoadingSettings && !onErrorSettings && (
                <Disputes disputes={object?.dispute} loading={loading} />
              )}

              {onErrorSettings && (
                <Box
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  mt={`15px`}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.red[200]}
                    weight={600}
                    marginRight={10}
                  >
                    Something went wrong, settings not found
                  </Text>
                </Box>
              )}

              {onLoadingSettings && (
                <Box
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  mt={`15px`}
                >
                  <Loading
                    size={theme.icons.sizes.md}
                    color={theme.colors.base.secondary}
                  />
                </Box>
              )}
            </Form>
          </CustomBox>
        </Box>
      </Page>
    </Layout>
  );
};

export default Create;
