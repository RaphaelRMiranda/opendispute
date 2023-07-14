import Page from "@/components/Page";
import SelectText from "@/components/Selects/Text";
import { getSettings, useSettings } from "@/context/Settings";
import { useEffect, useState } from "react";

import { DefaultValue } from "@/context/Settings/types";
import { Box, Skeleton, Text, useToast } from "@chakra-ui/react";

import { useUser } from "@/context/User";
import { theme } from "@/styles/theme";
import getKeysByMode from "../utils/getKeysByMode";
import Tables from "../Tables";

const Justifyer = () => {
  const { token } = useUser();
  const { settings, setSettings } = useSettings();

  const [filter, setFilter] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<DefaultValue[]>([]);

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

  // useEffect(() => {
  //   if (token)
  //     getSettings({ token })
  //       .then((response) => {
  //         setSettings(response.data);
  //         isLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         isLoading(false);
  //         errToast();
  //         isError(true);
  //       });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [setSettings, token]);

  useEffect(() => {
    if (settings && settings.justifyers) {
      isLoading(false);
      setFilterOptions(
        getKeysByMode(settings, "justifyers").map((item) => {
          return {
            label: item,
            value: item,
          };
        })
      );
      setFilter(
        getKeysByMode(settings, "justifyers").map((item) => {
          return {
            label: item,
            value: item,
          };
        })[0].value
      );
    }
  }, [settings]);

  return (
    <Page
      title="Justifyers"
      description="Change action options by adding, removing or editing current
      ones based on dispute TYPES"
      filter={
        <Box w="100%">
          <Skeleton
            w="100%"
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
          >
            <SelectText
              label="Factual Dispute"
              wid="100%"
              options={filterOptions}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Skeleton>
        </Box>
      }
      filterSize={20}
    >
      {onLoading && (
        <>
          <Skeleton
            w="100%"
            h={`50px`}
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
            mt={`15px`}
          />
          <Skeleton
            w="100%"
            h={`50px`}
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
            mt={`10px`}
          />
          <Skeleton
            w="100%"
            h={`50px`}
            isLoaded={!onLoading}
            borderRadius={6}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[100]}
            mt={`10px`}
          />
        </>
      )}
      {!onLoading && !onError && (
        <Tables data={settings.justifyers} filter={filter} />
      )}
      {onError && (
        <Box w="100%">
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.red[500]}
            fontWeight={500}
            textAlign="center"
          >
            Error when trying to get settings from server
          </Text>
        </Box>
      )}
    </Page>
  );
};

export default Justifyer;
