import Box from "@/components/Box";
import { Button } from "@/components/Buttons";
import InputText from "@/components/Inputs/Text";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";

const Register = () => {
  return (
    <Page
      title="Create user access"
      description="Create a user access, fill in the information correctly"
    >
      <Box
        wid="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          wid="100%"
          maxWid={1000}
          display="inline-flex"
          flexWrap="wrap"
          gap={15}
          justifyContent="center"
          alignItems="center"
        >
          <InputText wid="30%" label="First Name" placeholder="John" />
          <InputText wid="30%" label="Middle Name" placeholder="Doe" />
          <InputText wid="30%" label="Last Name" placeholder="Smith" />
          <InputText wid="30%" label="E-mail" placeholder="example@email.com" />
          <InputText
            wid="30%"
            label="Permission Role"
            placeholder="Administrator"
          />
          <InputText wid="30%" label="Password" placeholder="Administrator" />
          <InputText
            wid="30%"
            label="Confirm Password"
            placeholder="Administrator"
          />
        </Box>
        <Box
          wid="100%"
          maxWid={1000}
          display="inline-flex"
          flexWrap="wrap"
          gap={15}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            wid="30%"
            justifyContent="center"
            backgroundColor={theme.colors.base.secondary}
            fontSize={theme.fonts.sizes.md}
            fontColor={theme.colors.base.white}
            marginTop={50}
            marginBottom={20}
          >
            <Text
              fontSize={theme.fonts.sizes.sm}
              color={theme.colors.base.white}
              weight={500}
              pointerEvents="none"
            >
              Register user
            </Text>
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default Register;
