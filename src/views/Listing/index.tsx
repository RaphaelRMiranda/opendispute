/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@/components/Box";
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
} from "@chakra-ui/react";
import Loading from "@/components/Buttons/icons/Loading";
import { TFactualDispute } from "./types";
import FindSelectedRound, {
  EditSelectedRound,
} from "./utils/FindSelectedRound";
import { useRouter } from "next/router";
import Add from "@/components/Header/icons/Add";
import Dots from "./icons/Dots";

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

  return (
    <Layout>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent padding={5}>
            <CustomText fontSize={theme.fonts.sizes.md} weight={500}>
              Delete Dispute
            </CustomText>

            <CustomText fontSize={theme.fonts.sizes.sm}>
              Are you sure? You cant undo this action afterwards.
            </CustomText>

            <AlertDialogFooter padding={0} mt={10}>
              <Button
                ref={cancelRef}
                onClick={onClose}
                ml={3}
                fontSize={theme.fonts.sizes.sm}
                isDisabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => handleDelete(toDelete)}
                ml={3}
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
          <Box
            wid="100%"
            justifyContent="flex-end"
            flexWrap={["wrap", "wrap", "nowrap"]}
            marginBottom={25}
          >
            <Box
              position="relative"
              wid={["100%", "100%", "40%"]}
              marginRight={[0, 0, 15]}
              marginBottom={[10, 10, 0]}
            >
              <InputText
                label="Search customer"
                wid="100%"
                placeholder="Search for ssn/itin or name"
                onChange={handleChangeSearch}
              />
              <Box
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
              </Box>
            </Box>
            <Box wid={["100%", "100%", "60%"]} justifyContent="space-between">
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
            </Box>
          </Box>
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
                  ]._id
                }
              >
                <Box
                  wid={["100%", "100%", "100%", "75%"]}
                  justifyContent="space-between"
                  flexWrap="wrap"
                  alignItems="flex-start"
                >
                  <Box
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
                  </Box>
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
                        ].customer.firstName
                      }{" "}
                      {
                        dispute.disputes[
                          FindSelectedRound(
                            dispute._id.socialNumber,
                            factualDisputeRound
                          )
                        ].customer.lastName
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
                        ].disputeRound
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
                        ].disputeRound}
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
                        ].createdBy.firstName
                      }{" "}
                      {dispute.disputes[
                        FindSelectedRound(
                          dispute._id.socialNumber,
                          factualDisputeRound
                        )
                      ].createdBy.lastName?.charAt(0)}
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
                        ].createdAt
                      ).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </CustomText>
                  </Item>
                </Box>
                <Box wid="20%" justifyContent="flex-end">
                  <Box
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
                  </Box>

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
                            dispute.disputes[
                              FindSelectedRound(
                                dispute._id.socialNumber,
                                factualDisputeRound
                              )
                            ]
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
                      <Box
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
                                  ]._id
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
                </Box>
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
