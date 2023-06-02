/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@/components/Box";
import Card from "@/components/Card";
import Item from "@/components/Card/Item";
import Download from "@/components/Card/icons/Download";
import Edit from "@/components/Card/icons/Edit";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import { DisputeInterface, TDisputeArr } from "../Create/types";
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
  Skeleton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Loading from "@/components/Buttons/icons/Loading";
import { TFactualDispute } from "./types";
import FindSelectedRound, {
  EditSelectedRound,
} from "./utils/FindSelectedRound";
import { useRouter } from "next/router";
import Add from "@/components/Header/icons/Add";

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
  const [since, setSince] = useState<string>(
    new Date(yesterday).toISOString().split("T")[0]
  );
  const [until, setUntil] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const debounceValue = useDebounce(search, 1000);

  const [disputes, setDisputes] = useState<TDisputeArr[]>([]);
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
  }, [limit, page, debounceValue, since, sort, token, until, setUser]);

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
            <Text fontSize={theme.fonts.sizes.md} weight={500}>
              Delete Dispute
            </Text>

            <Text fontSize={theme.fonts.sizes.sm}>
              Are you sure? You cant undo this action afterwards.
            </Text>

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
          <Box wid="100%" justifyContent="flex-end" marginBottom={25}>
            <Box position="relative" wid="55%" marginRight={15}>
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
            <InputDate
              label="Initial date"
              wid="30%"
              marginRight={15}
              paddingInput={11}
              onChange={(e) => setSince(e.target.value)}
            />
            <InputDate
              label="Final date"
              wid="30%"
              marginRight={15}
              paddingInput={11}
              onChange={(e) => setUntil(e.target.value)}
            />
            <SelectText
              label="Order by"
              wid="30%"
              options={OrderFilter}
              onChange={(e) => setSort(e.target.value)}
            />
          </Box>
        }
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
                  wid="60%"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Name
                    </Text>
                    <Text
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
                    </Text>
                  </Item>
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Disputed
                    </Text>
                    <Text
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
                    </Text>
                  </Item>
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Deleted
                    </Text>
                    <Text
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
                    </Text>
                  </Item>
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Last update
                    </Text>
                    <Text
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
                        ].updatedAt
                      ).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </Text>
                  </Item>
                  <Item>
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
                      ].createdBy.lastName.charAt(0)}
                      .
                    </Text>
                  </Item>
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Created at
                    </Text>
                    <Text
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
                    </Text>
                  </Item>
                </Box>
                <Box wid="40%" justifyContent="flex-end">
                  <Box
                    wid="40%"
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

                  <Box
                    wid="40%"
                    justifyContent="flex-end"
                    opacity={isDownloading ? 0.5 : 1}
                    hover={
                      isDownloading ? "cursor:not-allowed;" : "cursor:pointer;"
                    }
                  >
                    <Box
                      marginRight={25}
                      hover="cursor:pointer;"
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
                      <Add size={theme.fonts.sizes.md} />
                    </Box>
                    <Box
                      marginRight={25}
                      hover="cursor:pointer;"
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
                      {isDownloading ? (
                        <Loading size={theme.icons.sizes.xs} />
                      ) : (
                        <Download size={theme.icons.sizes.xs} />
                      )}
                    </Box>
                    <Box
                      marginRight={25}
                      hover="cursor:pointer;"
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
                      <Edit size={theme.icons.sizes.xs} />
                    </Box>
                    <Box
                      hover="cursor:pointer;"
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
                        weight={500}
                        pointerEvents="none"
                      >
                        Delete
                      </Text>
                    </Box>
                  </Box>
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
