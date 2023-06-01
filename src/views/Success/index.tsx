import Box from "@/components/Box";
import Download from "@/components/Card/icons/Download";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { handleDownloadDocument, useDocument } from "@/context/Document";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { useUser } from "@/context/User";
import CreditBureau from "./utils/CreditBureau";
import MaskSocialNumber from "./utils/MaskSocialNumber";
import { useRouter } from "next/router";
import ValueInObject from "../Create/utils/ValueInObject";
import { useToast } from "@chakra-ui/react";
import Loading from "@/components/Buttons/icons/Loading";

const Success = () => {
  const { user, token } = useUser();
  const { lastDispute } = useDocument();

  const [isLoading, setLoading] = useState<boolean>(false);

  const handleDownload = () => {
    setLoading(true);
    handleDownloadDocument({ _id: lastDispute._id, token })
      .then((response) => {
        setLoading(false);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${lastDispute?.customer?.firstName} ${lastDispute?.customer?.lastName} - FD${lastDispute?.disputeRound}.zip`
        );
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const router = useRouter();

  const warToast = useToast({
    position: "top",
    duration: 5000,
    title: "You can't access this page",
    description: "You need to create a dispute first to access this page.",
    status: "warning",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  useEffect(() => {
    if (!ValueInObject(lastDispute)) {
      warToast();
      router.push("/create");
    }
  }, [lastDispute, router, warToast]);

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
                  {user.firstName} {user.lastName}
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
                  {lastDispute?.dispute?.map((dispute, i, self) => {
                    if (i === self.length - 1) return `$${dispute.balance}`;
                    else return `$${dispute.balance}, `;
                  }) || "$0"}
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
                  {lastDispute && lastDispute?.customer?.firstName
                    ? `${lastDispute?.customer?.firstName} ${lastDispute?.customer?.lastName}`
                    : "None"}
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
                  {(lastDispute?.creditBureau &&
                    CreditBureau(lastDispute?.creditBureau)) ||
                    "None"}
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
                  {MaskSocialNumber(
                    lastDispute?.customer?.ssn || lastDispute?.customer?.itin
                  ) || "None"}
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
                  {lastDispute?.dispute?.map((dispute, i, self) => {
                    if (i === self.length - 1) return dispute.dataFunisher;
                    else return `${dispute.dataFunisher}, `;
                  }) || "None"}
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
                  {lastDispute && lastDispute?.address?.street
                    ? `${lastDispute?.address?.street} ${lastDispute?.address?.city}, ${lastDispute?.address?.state} ${lastDispute?.address?.zipCode}`
                    : "None"}
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
                  {lastDispute?.dispute?.length || 0} dispute(s)
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
                  {lastDispute?.dispute?.map((dispute, i, self) => {
                    if (i === self.length - 1) return dispute.accountNumber;
                    else return `${dispute.accountNumber}, `;
                  }) || "None"}
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
                  {lastDispute?.dispute?.map((dispute, i, self) => {
                    if (i === self.length - 1) return dispute.type;
                    else return `${dispute.type}, `;
                  }) || "None"}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box wid="100%" justifyContent="center">
            <Box
              wid={180}
              backgroundColor={theme.colors.base.secondary}
              marginTop={50}
              onClick={handleDownload}
              borderRadius={6}
              padding={10}
              hover={hoverStyled}
              marginRight={10}
            >
              <Box wid="100%" justifyContent="space-between">
                <Box>
                  {isLoading ? (
                    <Loading
                      size={theme.fonts.sizes.md}
                      color={theme.colors.base.white}
                    />
                  ) : (
                    <Download
                      size={theme.fonts.sizes.md}
                      color={theme.colors.base.white}
                    />
                  )}
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
                  {lastDispute?.dispute?.length || 0}
                </Text>
              </Box>
            </Box>
            {/* <Box
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
            </Box> */}
          </Box>
        </Box>
      </Page>
    </Layout>
  );
};

export default Success;
