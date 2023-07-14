import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { getSettings, useSettings } from "@/context/Settings";
import { useUser } from "@/context/User";
import { theme } from "@/styles/theme";
import { Box, Skeleton, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Settings = () => {
  const router = useRouter();

  const { token } = useUser();
  const { setSettings } = useSettings();

  const [onLoading, isLoading] = useState<boolean>(true);
  const [onError, isError] = useState<boolean>(false);

  const errToast = useToast({
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

  useEffect(() => {
    if (token)
      getSettings({ token })
        .then((response) => {
          setSettings(response.data);
          isLoading(false);
        })
        .catch((err) => {
          console.log(err);
          isLoading(false);
          errToast();
          isError(true);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSettings, token]);

  return (
    <Layout>
      <Page
        title="Settings"
        description="Create your letter carefully, always check that the information is correct"
      >
        <Box
          w="100%"
          display={{ base: "flex", md: "grid" }}
          gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
          gridGap={{ md: 5 }}
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Skeleton
            h="full"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <Box
              w="100%"
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              bg={theme.colors.base.white}
              p={5}
              mb={{ base: 5, md: 0 }}
              borderRadius={8}
              _hover={
                onError
                  ? {
                      cursor: "not-allowed",
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
                  : {
                      cursor: "pointer",
                      boxShadow: `0 2px 20px 0 rgba(0 0 0 / 5%)`,
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
              }
              opacity={onError ? 0.5 : 1}
              onClick={() => router.push("/settings/greeting")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Greeting Sequence
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.gray[300]}
              >
                Change greeting sequence options by adding, removing or editing
                current ones based on the factual round
              </Text>
            </Box>
          </Skeleton>

          <Skeleton
            h="full"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <Box
              w="100%"
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              bg={theme.colors.base.white}
              p={5}
              mb={{ base: 5, md: 0 }}
              borderRadius={8}
              _hover={
                onError
                  ? {
                      cursor: "not-allowed",
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
                  : {
                      cursor: "pointer",
                      boxShadow: `0 2px 20px 0 rgba(0 0 0 / 5%)`,
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
              }
              opacity={onError ? 0.5 : 1}
              onClick={() => router.push("/settings/actions")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Actions
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.gray[300]}
              >
                Change action options by adding, removing or editing current
                ones based on dispute TYPES
              </Text>
            </Box>
          </Skeleton>
          <Skeleton
            h="full"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <Box
              w="100%"
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              bg={theme.colors.base.white}
              p={5}
              mb={{ base: 5, md: 0 }}
              borderRadius={8}
              _hover={
                onError
                  ? {
                      cursor: "not-allowed",
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
                  : {
                      cursor: "pointer",
                      boxShadow: `0 2px 20px 0 rgba(0 0 0 / 5%)`,
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
              }
              opacity={onError ? 0.5 : 1}
              onClick={() => router.push("/settings/closing")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Closing Statement
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.gray[300]}
              >
                Change closing statement options by adding, removing or editing
                current ones based on the factual round
              </Text>
            </Box>
          </Skeleton>
          <Skeleton
            h="full"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <Box
              w="100%"
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              bg={theme.colors.base.white}
              p={5}
              mb={{ base: 5, md: 0 }}
              borderRadius={8}
              _hover={
                onError
                  ? {
                      cursor: "not-allowed",
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
                  : {
                      cursor: "pointer",
                      boxShadow: `0 2px 20px 0 rgba(0 0 0 / 5%)`,
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
              }
              opacity={onError ? 0.5 : 1}
              onClick={() => router.push("/settings/types")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Dispute types
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.gray[300]}
              >
                Create or edit dispute TYPES for better generation and
                performance
              </Text>
            </Box>
          </Skeleton>
          <Skeleton
            h="full"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <Box
              w="100%"
              h="full"
              display="flex"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              bg={theme.colors.base.white}
              p={5}
              mb={{ base: 5, md: 0 }}
              borderRadius={8}
              _hover={
                onError
                  ? {
                      cursor: "not-allowed",
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
                  : {
                      cursor: "pointer",
                      boxShadow: `0 2px 20px 0 rgba(0 0 0 / 5%)`,
                      "& > span": {
                        pointerEvents: "none",
                      },
                    }
              }
              opacity={onError ? 0.5 : 1}
              onClick={() => router.push("/settings/justifyers")}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Justifyers
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.gray[300]}
              >
                Change action options by adding, removing or editing current
                ones based on dispute TYPES
              </Text>
            </Box>
          </Skeleton>

          <Skeleton
            h="full"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <Box
              w="100%"
              display="flex"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              bg={theme.colors.base.white}
              p={5}
              mb={{ base: 5, md: 0 }}
              borderRadius={8}
              _hover={{
                cursor: "not-allowed",
                "& > span": {
                  pointerEvents: "none",
                },
              }}
              opacity={0.5}
            >
              <Text
                fontSize={theme.fonts.sizes.md}
                color={theme.colors.base.secondary}
                weight={500}
              >
                Address
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.gray[300]}
              >
                Change the addresses of the banks that are used in generating
                the letters, namely Equifax, TransUnion and Experian
              </Text>
            </Box>
          </Skeleton>
        </Box>
      </Page>
    </Layout>
  );
};

export default Settings;
