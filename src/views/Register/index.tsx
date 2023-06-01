import Box from "@/components/Box";
import { Button } from "@/components/Buttons";
import InputText from "@/components/Inputs/Text";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import { useState } from "react";
import ObjectValidation from "./validation/Object";
import { TObjectErrors } from "./validation/types";
import RemoveEmptyFields from "../Create/utils/RemoveEmptyFields";
import SelectText from "@/components/Selects/Text";
import Loading from "@/components/Buttons/icons/Loading";
import { Form } from "./styles";
import InputPassword from "@/components/Inputs/Password";
import { handleCreateUser, handleEditUser, useUser } from "@/context/User";
import { TUserEdit, TUserRegister } from "@/context/User/types";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { User } from "./types";
import { TToken } from "../Create/types";

const permissions = [
  {
    label: "Service",
    value: "service",
  },
  {
    label: "Processor",
    value: "processor",
  },
  {
    label: "Administrator",
    value: "admin",
  },
  {
    label: "Developer",
    value: "dev",
  },
  {
    label: "CEO",
    value: "ceo",
  },
];

const Register = () => {
  const { token, object, setObject } = useUser();

  const router = useRouter();

  const [loading, isLoading] = useState<boolean>(false);
  const [isEditing, onEditing] = useState<boolean>(object?._id ? true : false);

  const [errors, setErrors] = useState<TObjectErrors>({} as TObjectErrors);

  const errToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to create user",
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
    title: "Error when trying to update user",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const sucToast = useToast({
    position: "top",
    duration: 5000,
    title: "User created successfully",
    description: "The user was created successfully, you can now log in",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const sucEditToast = useToast({
    position: "top",
    duration: 5000,
    title: "User updated successfully",
    description: "The user was updated successfully",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    isLoading(true);
    e.preventDefault();
    const errors = ObjectValidation(object);

    if (Object.keys(errors).length === 0) {
      setErrors({} as TObjectErrors);

      if (isEditing) {
        const data = RemoveEmptyFields(object) as TUserEdit;
        handleEditUser({ token, ...data })
          .then((response) => {
            sucEditToast();
            isLoading(false);
            router.push("/users");
            setObject({} as User);
          })
          .catch((err) => {
            isLoading(false);
            console.log(err);
            errEditToast();
          });
      } else {
        const data = RemoveEmptyFields(object) as TUserRegister;
        handleCreateUser({ token, ...data })
          .then((response) => {
            sucToast();
            isLoading(false);
            router.push("/users");
            setObject({} as User);
          })
          .catch((err) => {
            isLoading(false);
            console.log(err);
            errToast();
          });
      }
    } else {
      isLoading(false);
      setErrors(errors);
    }
  };

  return (
    <Layout>
      <Page
        title="Create user access"
        description="Create a user access, fill in the information correctly"
      >
        <Box
          wid="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Form onSubmit={handleSubmit}>
            <Box
              wid="100%"
              maxWid={1000}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
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
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                  }}
                  error={errors?.firstName?.message}
                  defaultValue={object?.firstName}
                />
                <InputText
                  wid="100%"
                  label="Middle Name"
                  placeholder="Doe"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      middleName: e.target.value,
                    }));
                  }}
                  error={errors?.middleName?.message}
                  defaultValue={object?.middleName}
                />
                <InputText
                  wid="100%"
                  label="Last Name"
                  placeholder="Steve"
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                  }}
                  error={errors?.lastName?.message}
                  defaultValue={object?.lastName}
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
                  label="E-mail"
                  placeholder="example@email.com"
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  error={errors?.email?.message}
                  defaultValue={object?.email}
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
                  label="Permission Role"
                  options={permissions}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }));
                  }}
                  error={errors?.role?.message}
                  defaultValue={object?.role}
                />
              </Box>
              <Box
                wid="100%"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                marginTop={10}
              >
                <InputPassword
                  wid="100%"
                  label="Password"
                  placeholder="*********"
                  marginRight={10}
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                  error={object?._id ? "" : errors?.password?.message}
                  opacity={object?._id ? 0.5 : 1}
                  defaultValue={object?._id ? "*********" : ""}
                  readonly={object?._id ? true : false}
                />
                <InputPassword
                  wid="100%"
                  label="Confirm Password"
                  placeholder="*********"
                  onChange={(e) => {
                    setObject((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }));
                  }}
                  error={object?._id ? "" : errors?.confirmPassword?.message}
                  opacity={object?._id ? 0.5 : 1}
                  defaultValue={object?._id ? "*********" : ""}
                  readonly={object?._id ? true : false}
                />
              </Box>
            </Box>
            <Box
              wid="100%"
              maxWid={1000}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                wid="30%"
                justifyContent="center"
                backgroundColor={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.md}
                fontColor={theme.colors.base.white}
                marginTop={25}
                marginBottom={20}
                type="submit"
                icon={
                  loading && (
                    <Loading
                      size={theme.icons.sizes.xs}
                      color={theme.colors.base.white}
                    />
                  )
                }
              >
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.white}
                  weight={500}
                  pointerEvents="none"
                >
                  {!loading && object?._id ? "Update user" : "Register user"}
                </Text>
              </Button>
            </Box>
          </Form>
        </Box>
      </Page>
    </Layout>
  );
};

export default Register;
