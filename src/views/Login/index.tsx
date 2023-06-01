import Box from "@/components/Box";
import { Button } from "@/components/Buttons";
import Loading from "@/components/Buttons/icons/Loading";
import InputText from "@/components/Inputs/Text";
import InputPassword from "@/components/Inputs/Password";
import Logo from "@/components/Menu/icons/Logo";
import Rocket from "@/components/Menu/icons/Rocket";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "@/schemas/Login";
import { Form } from "./styles";
import { handleLogin, useUser } from "@/context/User";
import { UserData } from "@/context/User/types";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Login = () => {
  const { setUser, setToken, error, setError } = useUser();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const [loading, isLoading] = useState<boolean>(false);

  const Submit = (data: FieldValues) => {
    handleLogin(data as UserData, setUser, setToken, setError, isLoading);
  };

  const toast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to login",
    description: error,
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  useEffect(() => {
    error && toast();

    return () => {
      setError("");
    };
  }, [error, setError, toast]);

  return (
    <Box
      position="relative"
      wid="100%"
      hei="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={theme.colors.base.white}
    >
      <Box
        wid="50%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWid={500}
        backgroundColor={theme.colors.base.primary}
        // boxShadow="0 2px 8px 0 rgba(0 0 0 / 10%)"
        borderRadius={6}
        padding={20}
        marginBottom={20}
      >
        <Logo size={theme.icons.sizes.xxl} />
        <Form onSubmit={handleSubmit(Submit)}>
          <InputText
            name="email"
            wid="70%"
            label="E-mail"
            placeholder="myemail@mail.com"
            marginTop={20}
            marginBottom={15}
            reg={register("email")}
            error={String(errors && errors?.email?.message)}
          />
          <InputPassword
            name="password"
            wid="70%"
            label="Password"
            placeholder="***********"
            marginBottom={35}
            reg={register("password")}
            error={String(errors && errors?.password?.message)}
          />

          <Button
            wid="70%"
            justifyContent="center"
            backgroundColor={theme.colors.base.secondary}
            fontSize={theme.fonts.sizes.md}
            fontColor={theme.colors.base.white}
            type="submit"
            icon={
              loading && (
                <Loading
                  size={theme.icons.sizes.xs}
                  color={theme.colors.base.white}
                />
              )
            }
            marginBottom={20}
          >
            <Text
              fontSize={theme.fonts.sizes.md}
              color={theme.colors.base.white}
              weight={500}
              pointerEvents="none"
            >
              {!loading && "Login"}
            </Text>
          </Button>
        </Form>
      </Box>
      <Text fontSize={theme.fonts.sizes.xs}>
        © 2023 OpenDispute.ai. All rights reserved. Private and Confidential.
        For authorized access only.
      </Text>
      {/* <Box position="absolute" bottom="0" left="0" wid="25%">      
         <Rocket size="100%" /> 
      </Box> */}
    </Box>
  );
};

export default Login;
