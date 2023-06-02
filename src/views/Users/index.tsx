/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@/components/Box";
import Card from "@/components/Card";
import Item from "@/components/Card/Item";
import Edit from "@/components/Card/icons/Edit";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Text from "@/components/Text";
import { deleteUser, getUsers, useUser } from "@/context/User";
import { theme } from "@/styles/theme";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../Listing/utils/Debounce";
import {
  TUserRegister,
  UserDelete,
  UserInterface,
  UserRole,
} from "@/context/User/types";
import InputText from "@/components/Inputs/Text";
import Search from "../Listing/icons/Search";
import InputDate from "@/components/Inputs/Date";
import SelectText from "@/components/Selects/Text";
import OrderFilter from "../Listing/utils/OrderFilter";
import Pagination from "@/components/Pagination";
import Role from "@/components/Header/User/utils/Role";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Image,
  Skeleton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { User } from "../Register/types";

const Users = () => {
  const router = useRouter();

  const { setUser, token, setObject } = useUser();

  const today = new Date();
  const yesterday = today.setDate(today.getDate() - 1);

  const errToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to delete user",
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
    title: "User deleted successfully",
    description: "The user was deleted successfully",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isDeleting, setDeleting] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [total, setTotal] = useState<number>(0);
  const [sort, setSort] = useState<string>("-createdAt");
  const [since, setSince] = useState<string>(
    new Date(yesterday).toISOString().split("T")[0]
  );
  const [until, setUntil] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const debounceValue = useDebounce(search, 2000);

  const [toDelete, setDelete] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef<HTMLButtonElement>(null);

  const [users, setUsers] = useState<(TUserRegister & UserDelete)[]>([]);

  const handleUsers = () => {
    setLoading(true);
    getUsers({
      page,
      limit,
      sort,
      since,
      until,
      search: debounceValue,
      token,
    })
      .then((response) => {
        setUsers(response.data.results);
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
    if (token && token.length > 0) handleUsers();
  }, [limit, page, debounceValue, since, sort, token, until, setUser]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleDelete = (_id: string) => {
    setDeleting(true);
    deleteUser({ _id, token })
      .then((response) => {
        setDeleting(false);
        sucToast();
        onClose();
        handleUsers();
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
              Delete User
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
        title="Card listing"
        description="List of all cards, you can filter by date or name"
        filter={
          <Box wid="100%" justifyContent="flex-end" marginBottom={25}>
            <Box position="relative" wid="55%" marginRight={15}>
              <InputText
                label="Search user"
                wid="100%"
                placeholder="Search for name or email"
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
          users &&
          users.length > 0 &&
          users.map((user) => {
            return (
              <Card key={user.email}>
                <Box
                  wid="70%"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box
                    wid={42}
                    hei={42}
                    backgroundColor={theme.colors.base.primary}
                    borderRadius={50}
                  >
                    {user?.picture && (
                      <Image
                        width={42}
                        height={42}
                        src={user?.picture}
                        alt="Picture"
                        borderRadius="50%"
                      />
                    )}
                  </Box>

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
                      {user.firstName} {user.middleName.charAt(0)}.{" "}
                      {user.lastName}
                    </Text>
                  </Item>
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Disputes created
                    </Text>
                    <Text
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.green}
                      weight={500}
                    >
                      {user.disputesCreated}
                    </Text>
                  </Item>
                  <Item>
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                    >
                      Last active
                    </Text>
                    <Text
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.secondary}
                      weight={500}
                    >
                      {new Date(user.updatedAt).toLocaleString("en-US", {
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
                      {`${user.createdBy.firstName} ${user.createdBy.lastName}`}
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
                      {new Date(user.createdAt).toLocaleString("en-US", {
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
                      Permission
                    </Text>
                    <Text
                      fontSize={theme.fonts.sizes.md}
                      color={theme.colors.base.secondary}
                      weight={500}
                    >
                      {Role(user.role as UserRole)}
                    </Text>
                  </Item>
                </Box>
                <Box wid="25%" justifyContent="flex-end">
                  <Box wid="40%" justifyContent="flex-end">
                    <Box
                      marginRight={25}
                      hover="cursor:pointer;"
                      onClick={() => {
                        setObject(user as User);
                        router.push(`/register`);
                      }}
                    >
                      <Edit size={theme.icons.sizes.xs} />
                    </Box>
                    <Box
                      hover="cursor:pointer;"
                      onClick={() => {
                        onOpen();
                        setDelete(user?._id);
                      }}
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
        {!isLoading && users && users.length > 0 && (
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

export default Users;
