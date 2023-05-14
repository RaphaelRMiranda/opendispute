import Box from "@/components/Box";
import Download from "@/components/Card/icons/Download";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { useDocument } from "@/context/Document";
import { theme } from "@/styles/theme";
import Documents from "./icons/Documents";

const Success = () => {
  const { lastDispute } = useDocument();

  const hoverStyled = `
        cursor: pointer;
        background-color:${theme.colors.base.secondary}; 
        box-shadow: 0 2px 10px 2px rgba(0 0 0 / 12%);
      `;

  return (
    <Layout>
      <Page>
        <Box
          wid="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          marginBottom={20}
        >
          <Text fontSize={theme.fonts.sizes.xxl} weight={500}>
            Your dispute as created as successfully!
          </Text>
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.gray[300]}
          >
            Check the descriptive information below, if you have any incorrect
            information you can Edit the Dispute files.
          </Text>
          <Box
            wid="100%"
            maxWid={1000}
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={40}
          >
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Created by
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  John Doe
                </Text>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Balances
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  $1253, $3270
                </Text>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Customer
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  Gustavo Melo
                </Text>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Credit bureau
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  Equifax, Experian and TransUnion
                </Text>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  SSN/ITIN
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  000-00-0000
                </Text>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Disputes funishers
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  Bank of america, Capital One
                </Text>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Full address
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  Dogwood Lane Apt 6202, Marshfield, MA 02050
                </Text>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Amount of disputes
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  2 disputes
                </Text>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Account number#
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  Unknown Account Number, 9909998
                </Text>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Text
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.secondary}
                >
                  Disputes types
                </Text>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.secondary}
                  weight={500}
                >
                  Charge-offs
                </Text>
              </Box>
            </Box>
          </Box>
          <Box wid="100%" justifyContent="center">
            <Box
              wid={180}
              backgroundColor={theme.colors.base.secondary}
              marginTop={50}
              onClick={() => {}}
              borderRadius={6}
              padding={10}
              hover={hoverStyled}
              marginRight={10}
            >
              <Box wid="100%" justifyContent="space-between">
                <Box>
                  <Download
                    size={theme.fonts.sizes.md}
                    color={theme.colors.base.white}
                  />
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.white}
                    weight={500}
                    pointerEvents="none"
                    marginLeft={5}
                  >
                    Download
                  </Text>
                </Box>
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.white}
                  weight={500}
                  pointerEvents="none"
                >
                  2
                </Text>
              </Box>
            </Box>
            <Box
              wid={180}
              backgroundColor={theme.colors.base.secondary}
              marginTop={50}
              onClick={() => {}}
              borderRadius={6}
              padding={10}
              hover={hoverStyled}
              marginLeft={10}
            >
              <Box>
                <Documents
                  size={theme.fonts.sizes.md}
                  color={theme.colors.base.white}
                />
                <Text
                  fontSize={theme.fonts.sizes.md}
                  color={theme.colors.base.white}
                  weight={500}
                  pointerEvents="none"
                  marginLeft={5}
                >
                  View Documents
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Page>
    </Layout>
  );
};

export default Success;
