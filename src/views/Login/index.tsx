import Box from "@/components/Box";
import { Button } from "@/components/Buttons";
import InputText from "@/components/Inputs/Text";
import Logo from "@/components/Menu/icons/Logo";
import Rocket from "@/components/Menu/icons/Rocket";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";

const Login = () => {
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
        <InputText
          wid="70%"
          label="E-mail"
          placeholder="myemail@mail.com"
          marginTop={20}
          marginBottom={15}
        />
        <InputText
          wid="70%"
          label="Password"
          placeholder="***********"
          marginBottom={35}
        />

        <Button
          wid="70%"
          justifyContent="center"
          backgroundColor={theme.colors.base.secondary}
          fontSize={theme.fonts.sizes.md}
          fontColor={theme.colors.base.white}
          marginBottom={20}
        >
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.white}
            weight={500}
            pointerEvents="none"
          >
            Login
          </Text>
        </Button>
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
