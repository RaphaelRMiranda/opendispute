/* eslint-disable react-hooks/exhaustive-deps */
import CustomBox from "@/components/Box";
import Card from "@/components/Card";
import Item from "@/components/Card/Item";
import Download from "@/components/Card/icons/Download";
import Edit from "@/components/Card/icons/Edit";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import CustomText from "@/components/Text";
import { theme } from "@/styles/theme";
import { DisputeInterface, TDispute, TDisputeArr } from "../Create/types";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/User";
import {
  deleteDispute,
  getDisputes,
  handleDownloadDocument,
  handleDownloadOverview,
  useDocument,
} from "@/context/Document";
import SelectText from "@/components/Selects/Text";
import DisputeRoundAt from "./utils/DisputeRoundAt";
import FactualDisputes from "./utils/FactualDisputes";
import Pagination from "@/components/Pagination";
import OrderFilter from "./utils/OrderFilter";
import InputText from "@/components/Inputs/Text";
import Search from "./icons/Search";
import InputDate from "@/components/Inputs/Date";
import useDebounce from "./utils/Debounce";
import { UserInterface } from "@/context/User/types";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  useDisclosure,
  useToast,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Checkbox,
  ModalFooter,
} from "@chakra-ui/react";
import Loading from "@/components/Buttons/icons/Loading";
import {
  OverviewCustomer,
  OverviewData,
  OverviewDataError,
  TFactualDispute,
} from "./types";
import FindSelectedRound, {
  EditSelectedRound,
} from "./utils/FindSelectedRound";
import { useRouter } from "next/router";
import Add from "@/components/Header/icons/Add";
import Dots from "./icons/Dots";
import DownloadOverview from "@/components/Card/icons/DownloadOverview";

const Listing = () => {
  const router = useRouter();

  const { setUser, token } = useUser();
  const { setObject } = useDocument();

  const today = new Date();
  const yesterday = today.setDate(today.getDate() - 1);

  const errToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to delete dispute",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const errOverviewToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to create overview",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const errOverviewSocialNumberToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error, social number is required",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const sucToast = useToast({
    position: "top",
    duration: 5000,
    title: "Dipuste deleted successfully",
    description: "The dispute was deleted successfully",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isDeleting, setDeleting] = useState<boolean>(false);
  const [isDownloading, setDownloading] = useState<boolean>(false);
  const [isDownloadingOverview, setDownloadingOverview] =
    useState<boolean>(false);

  const [isOpenOverview, onOpenOverview] = useState<boolean>(false);

  const onCloseOverview = () => onOpenOverview(false);

  const [customer, setCustomer] = useState<OverviewCustomer>(
    {} as OverviewCustomer
  );
  const [isChecked, onChecked] = useState<boolean>(false);

  const [overviewData, setOverviewData] = useState<OverviewData>(
    {} as OverviewData
  );
  const [overviewErrors, setOverviewErrors] = useState<OverviewDataError>(
    {} as OverviewDataError
  );

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [total, setTotal] = useState<number>(0);
  const [sort, setSort] = useState<string>("-createdAt");
  const [since, setSince] = useState<string>("");
  const [until, setUntil] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const debounceValue = useDebounce(search, 1000);

  const [disputes, setDisputes] = useState<TDisputeArr<TDispute>[]>([]);
  const [factualDisputeRound, setFactualDisputeRound] = useState<
    TFactualDispute[]
  >([]);

  const [toDelete, setDelete] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef<HTMLButtonElement>(null);

  const handleDisputes = () => {
    setLoading(true);
    getDisputes({
      page,
      limit,
      sort,
      since,
      until,
      search: debounceValue,
      token,
    })
      .then((response) => {
        setDisputes(response.data.results);
        setTotal(response.data.total);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        if (error.response.statusText === "Unauthorized" && token.length > 0) {
          setUser({} as UserInterface);
          localStorage.removeItem("@dispute/user");
        }
      });
  };

  useEffect(() => {
    if (token && token.length > 0) handleDisputes();
  }, [limit, page, debounceValue, since, sort, token, until]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleDownload = (dispute: DisputeInterface) => {
    setDownloading(true);
    handleDownloadDocument({
      _id: dispute._id,
      token,
    })
      .then((response) => {
        setDownloading(false);
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
        setDownloading(false);
        console.log(error);
      });
  };

  const handleOpenOverview = (dispute: DisputeInterface) => {
    setCustomer(dispute?.customer);
    isOpenOverview ? onCloseOverview() : onOpenOverview(true);
  };

  const handleOverview = (socialNumber?: string) => {
    if (!socialNumber) return errOverviewSocialNumberToast();

    const { equifaxScore, experianScore, transunionScore } = overviewData;

    setOverviewErrors({} as OverviewDataError);

    if (!equifaxScore)
      return setOverviewErrors((prev) => ({
        ...prev,
        equifaxScore: { message: "Equifax Score is required" },
      }));

    if (!experianScore)
      return setOverviewErrors((prev) => ({
        ...prev,
        experianScore: { message: "Experian Score is required" },
      }));

    if (!transunionScore)
      return setOverviewErrors((prev) => ({
        ...prev,
        transunionScore: { message: "TransUnion Score is required" },
      }));

    setDownloadingOverview(true);

    const data: OverviewData = {
      equifaxScore,
      experianScore,
      transunionScore,
      socialNumber: Buffer.from(socialNumber).toString("base64"),
      showDifference: isChecked,
    };

    handleDownloadOverview({
      ...data,
      token,
    })
      .then((response) => {
        setDownloading(false);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${customer?.firstName} ${customer?.lastName} - Overview.zip`
        );
        document.body.appendChild(link);
        link.click();

        setDownloadingOverview(false);
        onCloseOverview();
      })
      .catch((error) => {
        setDownloading(false);
        console.log(error);

        setDownloadingOverview(false);
        errOverviewToast();
        onCloseOverview();
      });
  };

  const handleDelete = (_id: string) => {
    setDeleting(true);
    deleteDispute({ _id, token })
      .then((response) => {
        setDeleting(false);
        sucToast();
        onClose();
        handleDisputes();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        errToast();

        if (error.response.statusText === "Unauthorized" && token.length > 0) {
          setUser({} as UserInterface);
          localStorage.removeItem("@dispute/user");
        }
      });
  };

  const inputEqRef = useRef<HTMLInputElement>(null);
  const inputExRef = useRef<HTMLInputElement>(null);
  const inputTuRef = useRef<HTMLInputElement>(null);

  return (
    <Layout>
      <Modal
        initialFocusRef={inputEqRef}
        size="2xl"
        isOpen={isOpenOverview}
        onClose={onCloseOverview}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={theme.colors.base.primary}>
          <ModalHeader color={theme.colors.base.secondary}>
            Overview informations
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              w="100%"
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                Name
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
                fontWeight="semibold"
                mb={2}
              >
                {customer?.firstName} {customer?.lastName}
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
              >
                SSN/ITIN
              </Text>
              <Text
                fontSize={theme.fonts.sizes.sm}
                color={theme.colors.base.secondary}
                fontWeight="semibold"
                mb={5}
              >
                {customer?.ssn || customer?.itin}
              </Text>
              <Text
                fontSize={theme.fonts.sizes.xs}
                color={theme.colors.base.gray[400]}
                mt={2}
              >
                Fill in below according to the difference, if a score has an
                increase of 30 and your total was 300 you must fill in: 300+30
              </Text>
              <Text
                fontSize={theme.fonts.sizes.xs}
                color={theme.colors.base.gray[400]}
                mb={3}
              >
                Follow this logic for negative filling, if it {"hasn't"} been
                changed, just pass the normal value.
              </Text>

              <InputText
                wid="100%"
                label="Equifax Score"
                placeholder="What is the Equifax Score? Ex:. 300+10"
                fontSize={theme.fonts.sizes.sm}
                onChange={(e) =>
                  setOverviewData((prev) => ({
                    ...prev,
                    equifaxScore: String(e.target.value),
                  }))
                }
                defaultValue={""}
                reference={inputEqRef}
                marginBottom={10}
                error={overviewErrors.equifaxScore?.message}
              />
              <InputText
                wid="100%"
                label="Experian Score"
                placeholder="What is the Expiran Score? Ex:. 200-10"
                fontSize={theme.fonts.sizes.sm}
                onChange={(e) =>
                  setOverviewData((prev) => ({
                    ...prev,
                    experianScore: String(e.target.value),
                  }))
                }
                defaultValue={""}
                reference={inputExRef}
                marginBottom={10}
                error={overviewErrors.experianScore?.message}
              />
              <InputText
                wid="100%"
                label="TransUnion Score"
                placeholder="What is the TransUnion Score? Ex:. 500"
                fontSize={theme.fonts.sizes.sm}
                onChange={(e) =>
                  setOverviewData((prev) => ({
                    ...prev,
                    transunionScore: String(e.target.value),
                  }))
                }
                defaultValue={""}
                reference={inputTuRef}
                marginBottom={15}
                error={overviewErrors.transunionScore?.message}
              />
              <Checkbox
                size="lg"
                color={theme.colors.base.secondary}
                fontWeight="bold"
                onChange={(e) => onChecked(e.target.checked)}
                __css={{
                  "& > span:nth-of-type(1)": isChecked
                    ? {}
                    : {
                        borderColor: theme.colors.base.gray[400],
                      },
                }}
              >
                Show difference
              </Checkbox>
              <Text
                fontSize={theme.fonts.sizes.xs}
                color={theme.colors.base.gray[400]}
              >
                This Show Difference option displays in the report the
                difference between the values ​​of each old score until now,
                whether negative or positive.
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              isDisabled={isDownloadingOverview}
              onClick={onCloseOverview}
              color={theme.colors.base.secondary}
              fontSize={theme.fonts.sizes.sm}
            >
              Close
            </Button>
            <Button
              colorScheme="messenger"
              isLoading={isDownloadingOverview}
              onClick={() => handleOverview(customer?.ssn || customer?.itin)}
              color={theme.colors.base.primary}
              backgroundColor={theme.colors.base.blue}
              fontSize={theme.fonts.sizes.sm}
            >
              Download Overview
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            padding={5}
            backgroundColor={theme.colors.base.white}
          >
            <CustomText
              color={theme.colors.base.secondary}
              fontSize={theme.fonts.sizes.md}
              weight={500}
            >
              Delete Dispute
            </CustomText>

            <CustomText
              color={theme.colors.base.secondary}
              fontSize={theme.fonts.sizes.sm}
            >
              Are you sure? You cant undo this action afterwards.
            </CustomText>

            <AlertDialogFooter padding={0} mt={10}>
              <Button
                ref={cancelRef}
                onClick={onClose}
                ml={3}
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.sm}
                isDisabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => handleDelete(toDelete)}
                ml={3}
                color={theme.colors.base.primary}
                backgroundColor={theme.colors.base.red[200]}
                fontSize={theme.fonts.sizes.sm}
                isLoading={isDeleting}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Page
        title="Dispute listing"
        description="List of all disputes, you can filter by date or name"
        filter={
          <CustomBox
            wid="100%"
            justifyContent="flex-end"
            flexWrap={["wrap", "wrap", "nowrap"]}
            marginBottom={25}
          >
            <CustomBox
              position="relative"
              wid={["100%", "100%", "40%"]}
              marginRight={[0, 0, 15]}
              marginBottom={[10, 10, 0]}
            >
              <InputText
                label="Search customer"
                wid="100%"
                placeholder="Search for ssn/itin"
                onChange={handleChangeSearch}
              />
              <CustomBox
                position="absolute"
                top="70%"
                right={12}
                transform="translateY(-70%)"
                backgroundColor={theme.colors.base.gray[300]}
              >
                <Search
                  size={theme.icons.sizes.xs}
                  color={theme.colors.base.gray[400]}
                />
              </CustomBox>
            </CustomBox>
            <CustomBox
              wid={["100%", "100%", "60%"]}
              justifyContent="space-between"
            >
              <InputDate
                label="Initial date"
                wid="32%"
                marginRight={15}
                paddingInput={11}
                onChange={(e) => setSince(e.target.value)}
              />
              <InputDate
                label="Final date"
                wid="32%"
                marginRight={15}
                paddingInput={11}
                onChange={(e) => setUntil(e.target.value)}
              />
              <SelectText
                label="Order by"
                wid="32%"
                options={OrderFilter}
                onChange={(e) => setSort(e.target.value)}
              />
            </CustomBox>
          </CustomBox>
        }
        filterSize={70}
      >
        {isLoading && (
          <>
            <Skeleton
              width="100%"
              height={90}
              isLoaded={false}
              marginBottom={15}
              borderRadius={6}
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[100]}
            />
            <Skeleton
              width="100%"
              height={90}
              isLoaded={false}
              marginBottom={15}
              borderRadius={6}
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[100]}
            />
            <Skeleton
              width="100%"
              height={90}
              isLoaded={false}
              marginBottom={15}
              borderRadius={6}
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[100]}
            />
          </>
        )}

        {!isLoading &&
          disputes &&
          disputes.length > 0 &&
          disputes.map((dispute) => {
            return (
              <Card
                key={
                  dispute.disputes[
                    FindSelectedRound(
                      dispute._id.socialNumber,
                      factualDisputeRound
                    )
                  ]?._id
                }
              >
                <CustomBox
                  wid={["100%", "100%", "100%", "75%"]}
                  justifyContent="space-between"
                  flexWrap="wrap"
                  alignItems="flex-start"
                >
                  <CustomBox
                    display={["flex", "flex", "flex", "none"]}
                    wid={["90%", "90%", "95%"]}
                    justifyContent="flex-end"
                    opacity={isDownloading ? 0.5 : 1}
                    hover={
                      isDownloading ? "cursor:not-allowed;" : "cursor:pointer;"
                    }
                    marginBottom={5}
                  >
                    <SelectText
                      wid={["100%", "100%", "40%"]}
                      options={DisputeRoundAt(
                        FactualDisputes,
                        dispute.disputes
                      )}
                      onChange={(e) =>
                        EditSelectedRound(
                          dispute._id.socialNumber,
                          Number(e.target.value),
                          setFactualDisputeRound
                        )
                      }
                      disabled={isDownloading}
                      defaultValue={FindSelectedRound(
                        dispute._id.socialNumber,
                        factualDisputeRound
                      )}
                    />
                  </CustomBox>
                  <Item>
                    <CustomText
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Name
                    </CustomText>
                    <CustomText
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.secondary}
                      weight={500}
                    >
                      {
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ]?.customer?.firstName
                      }{" "}
                      {
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ]?.customer?.lastName
                      }
                    </CustomText>
                  </Item>
                  <Item>
                    <CustomText
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Disputed
                    </CustomText>
                    <CustomText
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.green}
                      weight={500}
                    >
                      {
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ]?.disputeRound
                      }
                    </CustomText>
                  </Item>
                  <Item>
                    <CustomText
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Deleted
                    </CustomText>
                    <CustomText
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.orange}
                      weight={500}
                    >
                      {12 -
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ]?.disputeRound}
                    </CustomText>
                  </Item>
                  <Item>
                    <CustomText
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Last update
                    </CustomText>
                    <CustomText
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.secondary}
                      weight={500}
                    >
                      {new Date(
                        dispute.disputes[dispute.disputes.length - 1].updatedAt
                      ).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </CustomText>
                  </Item>
                  <Item>
                    <CustomText
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Created by
                    </CustomText>
                    <CustomText
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.secondary}
                      weight={500}
                    >
                      {
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ]?.createdBy?.firstName
                      }{" "}
                      {dispute.disputes[
                        FindSelectedRound(
                          dispute._id.socialNumber,
                          factualDisputeRound
                        )
                      ]?.createdBy?.lastName?.charAt(0)}
                      .
                    </CustomText>
                  </Item>
                  <Item>
                    <CustomText
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Created at
                    </CustomText>
                    <CustomText
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.secondary}
                      weight={500}
                    >
                      {new Date(
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ]?.createdAt
                      ).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </CustomText>
                  </Item>
                </CustomBox>
                <CustomBox wid="20%" justifyContent="flex-end">
                  <CustomBox
                    display={["none", "none", "none", "flex"]}
                    wid="100%"
                    justifyContent="center"
                    opacity={isDownloading ? 0.5 : 1}
                    hover={
                      isDownloading ? "cursor:not-allowed;" : "cursor:pointer;"
                    }
                  >
                    <SelectText
                      wid="100%"
                      options={DisputeRoundAt(
                        FactualDisputes,
                        dispute.disputes
                      )}
                      onChange={(e) => {
                        EditSelectedRound(
                          dispute._id.socialNumber,
                          Number(e.target.value),
                          setFactualDisputeRound
                        );
                      }}
                      disabled={isDownloading}
                      defaultValue={FindSelectedRound(
                        dispute._id.socialNumber,
                        factualDisputeRound
                      )}
                    />
                  </CustomBox>

                  <Menu aria-label="Menu" placement="bottom-end">
                    <MenuButton
                      pos={{ base: "absolute", lg: "relative" }}
                      top={{ base: `28px`, lg: `0px` }}
                      right={{ base: `15px`, lg: `0px` }}
                      as={IconButton}
                      aria-label="Edit"
                      icon={<Dots size={theme.icons.sizes.xs} />}
                      backgroundColor="transparent"
                      ml={3}
                      _hover={{ backgroundColor: theme.colors.base.primary }}
                    />
                    <MenuList
                      bg={theme.colors.base.white}
                      borderRadius={8}
                      boxShadow={`0 4px 12px 0 rgba(0 0 0 / 17%)`}
                      p={3}
                      border="none"
                    >
                      <MenuItem
                        icon={
                          <Add
                            size={theme.icons.sizes.xs}
                            color={theme.colors.base.secondary}
                          />
                        }
                        iconSpacing={3}
                        bg="transparent"
                        onClick={() => {
                          setObject(
                            dispute.disputes[dispute.disputes.length - 1]
                          );
                          router.push(`/factual`);
                        }}
                      >
                        <Text
                          fontSize={theme.fonts.sizes.md}
                          color={theme.colors.base.secondary}
                        >
                          Add Round
                        </Text>
                      </MenuItem>
                      <MenuItem
                        icon={
                          isDownloading ? (
                            <Loading
                              size={theme.icons.sizes.xs}
                              color={theme.colors.base.secondary}
                            />
                          ) : (
                            <Download
                              size={theme.icons.sizes.xs}
                              color={theme.colors.base.secondary}
                            />
                          )
                        }
                        iconSpacing={3}
                        bg="transparent"
                        onClick={
                          isDownloading
                            ? () => {}
                            : () =>
                                handleDownload(
                                  dispute.disputes[
                                    FindSelectedRound(
                                      dispute._id.socialNumber,
                                      factualDisputeRound
                                    )
                                  ]
                                )
                        }
                      >
                        <Text
                          fontSize={theme.fonts.sizes.md}
                          color={theme.colors.base.secondary}
                        >
                          {isDownloading
                            ? "Downloading..."
                            : "Download Dispute"}
                        </Text>
                      </MenuItem>
                      <MenuItem
                        icon={
                          isDownloadingOverview ? (
                            <Loading
                              size={theme.icons.sizes.xs}
                              color={theme.colors.base.secondary}
                            />
                          ) : (
                            <DownloadOverview
                              size={theme.icons.sizes.xs}
                              color={theme.colors.base.secondary}
                            />
                          )
                        }
                        iconSpacing={3}
                        bg="transparent"
                        onClick={
                          isDownloadingOverview
                            ? () => {}
                            : () =>
                                handleOpenOverview(
                                  dispute.disputes[
                                    FindSelectedRound(
                                      dispute._id.socialNumber,
                                      factualDisputeRound
                                    )
                                  ]
                                )
                        }
                      >
                        <Text
                          fontSize={theme.fonts.sizes.md}
                          color={theme.colors.base.secondary}
                        >
                          {isDownloading
                            ? "Downloading..."
                            : "Download Overview"}
                        </Text>
                      </MenuItem>
                      <MenuItem
                        icon={
                          <Edit
                            size={theme.icons.sizes.xs}
                            color={theme.colors.base.secondary}
                          />
                        }
                        iconSpacing={3}
                        bg="transparent"
                        onClick={() => {
                          setObject(
                            dispute.disputes[
                              FindSelectedRound(
                                dispute._id.socialNumber,
                                factualDisputeRound
                              )
                            ]
                          );
                          router.push(`/update`);
                        }}
                      >
                        <Text
                          fontSize={theme.fonts.sizes.md}
                          color={theme.colors.base.secondary}
                        >
                          Edit Dispute
                        </Text>
                      </MenuItem>
                      <CustomBox
                        wid="100%"
                        hei="1px"
                        backgroundColor={theme.colors.base.gray[100]}
                        margin={`10px 0`}
                      />
                      <MenuItem
                        bg="transparent"
                        onClick={
                          isDownloading
                            ? () => {}
                            : () => {
                                onOpen();
                                setDelete(
                                  dispute.disputes[
                                    FindSelectedRound(
                                      dispute._id.socialNumber,
                                      factualDisputeRound
                                    )
                                  ]?._id
                                );
                              }
                        }
                      >
                        <Text
                          fontSize={theme.fonts.sizes.md}
                          color={theme.colors.base.red[200]}
                        >
                          Delete this Dispute
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </CustomBox>
              </Card>
            );
          })}
        {!isLoading && disputes && disputes.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
            total={total}
          />
        )}
      </Page>
    </Layout>
  );
};

export default Listing;
