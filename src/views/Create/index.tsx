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
import { useState } from "react";

const Create = () => {
  const [social, setSocial] = useState<string>("");

  const [object, setObject] = useState<any>({});

  return (
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
          minWid={200}
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
                hover="cursor:pointer;"
                borderBottom={`1px solid ${theme.colors.base.primary}`}
                padding={10}
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
          <Box wid="100%" justifyContent="flex-start" alignItems="center">
            <InputText wid="30%" label="Date" placeholder="5/5/2023" />
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
              wid="50%"
              label="Street Address"
              placeholder="5/5/2023"
              marginRight={10}
            />
            <InputText
              wid="30%"
              label="State"
              placeholder="5/5/2023"
              marginRight={10}
            />
            <InputText wid="20%" label="Zip Code" placeholder="5/5/2023" />
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
              placeholder="5/5/2023"
              marginRight={10}
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
              wid="30%"
              label="Dispute Round"
              options={[
                {
                  label: "1",
                  value: "1",
                },
              ]}
              marginRight={10}
            />
            <SelectText
              wid="30%"
              label="Credit Bureau"
              options={[
                {
                  label: "1",
                  value: "1",
                },
              ]}
              marginRight={10}
            />
            <SelectText
              wid="40%"
              label="Greeting Sequence"
              options={[
                {
                  label: "1",
                  value: "1",
                },
              ]}
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
              placeholder="5/5/2023"
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
              placeholder="5/5/2023"
            />
          </Box>

          <Disputes />
        </Box>
      </Box>
    </Page>
  );
};

export default Create;
