/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@/components/Box";
import Download from "@/components/Card/icons/Download";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { getDispute, handleDownloadDocument } from "@/context/Document";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { useUser } from "@/context/User";
import CreditBureau from "./utils/CreditBureau";
import MaskSocialNumber from "./utils/MaskSocialNumber";
import { useRouter } from "next/router";
import { Skeleton, useToast } from "@chakra-ui/react";
import Loading from "@/components/Buttons/icons/Loading";
import { DisputeInterface } from "../Create/types";

const Success = () => {
  const { user, token } = useUser();

  const router = useRouter();

  const [isLoading, onLoading] = useState<boolean>(true);
  const [isDownloading, onDownloading] = useState<boolean>(false);

  const [dispute, setDispute] = useState<DisputeInterface>(
    {} as DisputeInterface
  );

  const handleDownload = () => {
    onDownloading(true);
    handleDownloadDocument({ _id: dispute._id, token })
      .then((response) => {
        onDownloading(false);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${dispute?.customer?.firstName} ${dispute?.customer?.lastName} - FD${dispute?.disputeRound}.zip`
        );
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        onDownloading(false);
        console.log(error);
      });
  };

  const handleGetDispute = (disputeId: string) => {
    getDispute({ _id: disputeId, token })
      .then((response) => {
        onLoading(false);
        setDispute(response.data.dispute);
      })
      .catch((error) => {
        onLoading(false);
      });
  };

  useEffect(() => {
    if (
      window &&
      window.location.pathname.split("/")[2]?.match(/^[0-9a-fA-F]{24}$/)
    ) {
      if (token) {
        const disputeId = window.location.pathname.split("/")[2];
        handleGetDispute(disputeId);
      }
    } else {
      warToast();
      router.push("/create");
    }
  }, [token]);

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
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Created by
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {user.firstName} {user.lastName}
                  </Text>
                </Skeleton>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Balances
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute?.dispute?.length > 3
                      ? `${dispute?.dispute
                          ?.slice(0, 3)
                          ?.map((dispute, i, self) => {
                            if (i === self.length - 1) {
                              return `$${dispute.balance}`;
                            } else return `$${dispute.balance}`;
                          })} and more ${dispute?.dispute?.length}` || "$0.00"
                      : dispute?.dispute?.map((dispute, i, self) => {
                          if (i === self.length - 1)
                            return `$${dispute.balance}`;
                          else return `$${dispute.balance}, `;
                        }) || "$0.00"}
                  </Text>
                </Skeleton>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Customer
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute && dispute?.customer?.firstName
                      ? `${dispute?.customer?.firstName} ${dispute?.customer?.lastName}`
                      : "None"}
                  </Text>
                </Skeleton>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Credit bureau
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {(dispute?.creditBureau &&
                      CreditBureau(dispute?.creditBureau)) ||
                      "None"}
                  </Text>
                </Skeleton>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    SSN/ITIN
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {MaskSocialNumber(
                      dispute?.customer?.ssn || dispute?.customer?.itin
                    ) || "None"}
                  </Text>
                </Skeleton>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Disputes furnishers
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute?.dispute?.length > 3
                      ? `${dispute?.dispute
                          ?.slice(0, 3)
                          ?.map((dispute, i, self) => {
                            if (i === self.length - 1)
                              return dispute.dataFunisher;
                            else return `${dispute.dataFunisher}`;
                          })} and more ${dispute?.dispute?.length}` || "None"
                      : dispute?.dispute?.map((dispute, i, self) => {
                          if (i === self.length - 1)
                            return dispute.dataFunisher;
                          else return `${dispute.dataFunisher}, `;
                        }) || "None"}
                  </Text>
                </Skeleton>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Full address
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute && dispute?.address?.street
                      ? `${dispute?.address?.street} ${dispute?.address?.city}, ${dispute?.address?.state} ${dispute?.address?.zipCode}`
                      : "None"}
                  </Text>
                </Skeleton>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Amount of disputes
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute?.dispute?.length || 0} dispute(s)
                  </Text>
                </Skeleton>
              </Box>
            </Box>
            <Box wid="100%" justifyContent="space-between" marginBottom={15}>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Account number#
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute?.dispute?.length > 3
                      ? `${dispute?.dispute
                          ?.slice(0, 3)
                          ?.map((dispute, i, self) => {
                            if (i === self.length - 1)
                              return dispute.accountNumber;
                            else return dispute.accountNumber;
                          })} and more ${dispute?.dispute?.length}` || "None"
                      : dispute?.dispute?.map((dispute, i, self) => {
                          if (i === self.length - 1)
                            return dispute.accountNumber;
                          else return `${dispute.accountNumber}, `;
                        }) || "None"}
                  </Text>
                </Skeleton>
              </Box>
              <Box
                wid="50%"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                >
                  <Text
                    fontSize={theme.fonts.sizes.sm}
                    color={theme.colors.base.secondary}
                  >
                    Disputes types
                  </Text>
                </Skeleton>
                <Skeleton
                  startColor={theme.colors.base.gray[300]}
                  endColor={theme.colors.base.gray[400]}
                  isLoaded={!isLoading}
                  height={6}
                  marginTop={2}
                >
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    {dispute?.dispute?.length > 3
                      ? `${dispute?.dispute
                          ?.slice(0, 3)
                          ?.map((dispute, i, self) => {
                            if (i === self.length - 1) return dispute.type;
                            else return dispute.type;
                          })} and more ${dispute?.dispute?.length}` || "None"
                      : dispute?.dispute?.map((dispute, i, self) => {
                          if (i === self.length - 1) return dispute.type;
                          else return `${dispute.type}, `;
                        }) || "None"}
                  </Text>
                </Skeleton>
              </Box>
            </Box>
          </Box>

          <Box wid="100%" justifyContent="center">
            <Skeleton
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[400]}
              isLoaded={!isLoading}
              marginTop={50}
            >
              <Box
                wid={180}
                backgroundColor={theme.colors.base.secondary}
                onClick={handleDownload}
                borderRadius={6}
                padding={10}
                hover={hoverStyled}
              >
                <Box wid="100%" justifyContent="space-between">
                  <Box>
                    {isDownloading ? (
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
                    {dispute?.archives?.length || 0}
                  </Text>
                </Box>
              </Box>
            </Skeleton>
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
