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
        justifyContent="flex-start"
        alignItems="flex-start"
      >
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
              placeholder="5/5/2023"
              marginRight={10}
            />
            <InputText
              wid="100%"
              label="First Name"
              placeholder="5/5/2023"
              marginRight={10}
            />
            <InputText wid="100%" label="First Name" placeholder="5/5/2023" />
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
              label="Permission Role"
              placeholder="Administrator"
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
              label="Password"
              placeholder="Administrator"
              marginRight={10}
            />
            <InputText
              wid="100%"
              label="Confirm Password"
              placeholder="Administrator"
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
            wid="50%"
            justifyContent="center"
            backgroundColor={theme.colors.base.secondary}
            fontSize={theme.fonts.sizes.md}
            fontColor={theme.colors.base.white}
            marginTop={25}
            marginBottom={20}
          >
            <Text
              fontSize={theme.fonts.sizes.md}
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
