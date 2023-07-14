import Page from "@/components/Page";
import { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useUser } from "@/context/User";
import { theme } from "@/styles/theme";
import {
  createType,
  deleteType,
  getTypes,
  updateType,
  useTypes,
} from "@/context/TypesContext";
import Dots from "@/views/Listing/icons/Dots";
import Edit from "@/components/Card/icons/Edit";
import * as Buttons from "@/components/Buttons";
import InputText from "@/components/Inputs/Text";
import { Types } from "@/context/TypesContext/types";

const Types = () => {
  const { token } = useUser();
  const { types, setTypes } = useTypes();

  const [onLoading, isLoading] = useState<boolean>(true);
  const [onDeleting, isDeleting] = useState<boolean>(false);
  const [onLoadingType, isLoadingType] = useState<boolean>(false);
  const [onError, isError] = useState<boolean>(false);

  const [onEdit, isEdit] = useState<Types>({} as Types);
  const [onDelete, isDelete] = useState<Types>({} as Types);

  const [typeError, setTypeError] = useState<boolean>(false);

  const [editedType, setEditedType] = useState<string>("");
  const [newType, setNewType] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const sucToast = useToast({
    position: "top",
    duration: 5000,
    title: onEdit._id
      ? "Dispute type was updated"
      : onDelete._id
      ? "Dispute type was deleted"
      : "New dispute type created",
    description: onEdit._id
      ? "Dispute type was updated successfully"
      : onDelete._id
      ? "The new type was deleted successfully"
      : "The new type was created successfully",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const errTypeToast = useToast({
    position: "top",
    duration: 5000,
    title: onEdit._id
      ? "Error when trying to update type"
      : onDelete._id
      ? "Error when trying to delete type"
      : "Error when trying to create new type",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

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

  const handleGetTypes = () => {
    getTypes({ token })
      .then((response) => {
        setTypes(response.data);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
        errToast();
        isError(true);
      });
  };

  useEffect(() => {
    if (token) handleGetTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateType = () => {
    setTypeError(false);
    isDelete({} as Types);

    isLoadingType(true);
    createType({ token, type: newType })
      .then((response) => {
        isLoadingType(false);
        sucToast();
        onClose();
        setNewType("");
        handleGetTypes();
      })
      .catch((err) => {
        console.log(err);
        isLoadingType(false);
        errTypeToast();
        setTypeError(true);
      });
  };

  const handleEditType = () => {
    setTypeError(false);
    isDelete({} as Types);

    isLoadingType(true);
    updateType({ token, _id: onEdit._id, type: editedType })
      .then((response) => {
        isLoadingType(false);
        sucToast();
        onClose();
        setEditedType("");
        isEdit({} as Types);
        handleGetTypes();
      })
      .catch((err) => {
        console.log(err);
        isLoadingType(false);
        errTypeToast();
        setTypeError(true);
      });
  };

  const handleDeleteType = () => {
    setTypeError(false);
    setEditedType("");
    isEdit({} as Types);

    deleteType({ token, _id: onDelete._id, type: onDelete.type })
      .then((response) => {
        sucToast();
        onClose();
        isDelete({} as Types);
        handleGetTypes();
      })
      .catch((err) => {
        console.log(err);
        isLoadingType(false);
        errTypeToast();
        onClose();
        setTypeError(true);
      });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {onDelete._id && (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent padding={5}>
              <Text fontSize={theme.fonts.sizes.md} fontWeight={500}>
                Delete type
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
                  isDisabled={onDeleting}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={handleDeleteType}
                  ml={3}
                  fontSize={theme.fonts.sizes.sm}
                  isLoading={onDeleting}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}

      {!onDelete._id && (
        <Modal
          initialFocusRef={inputRef}
          size="2xl"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {onEdit._id ? "Edit type" : "Create new type"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                w="100%"
                flexDir="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {onEdit._id ? (
                  <InputText
                    wid="100%"
                    placeholder="Type"
                    fontSize={theme.fonts.sizes.sm}
                    onChange={(e) => setEditedType(e.target.value)}
                    defaultValue={onEdit.type}
                    error={typeError ? "Error when trying to update type" : ""}
                    border={
                      typeError
                        ? `1px solid ${theme.colors.base.red[200]}`
                        : "none"
                    }
                    reference={inputRef}
                  />
                ) : (
                  <InputText
                    wid="100%"
                    placeholder="Insert type name"
                    fontSize={theme.fonts.sizes.sm}
                    onChange={(e) => setNewType(e.target.value)}
                    opacity={onLoadingType ? 0.5 : 1}
                    error={typeError ? "Error when trying to create type" : ""}
                    border={
                      typeError
                        ? `1px solid ${theme.colors.base.red[200]}`
                        : "none"
                    }
                    reference={inputRef}
                  />
                )}
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                colorScheme="messenger"
                isLoading={onLoadingType}
                onClick={
                  onEdit._id ? () => handleEditType() : () => handleCreateType()
                }
              >
                {onEdit._id ? "Save changes" : "Create type"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      <Page
        title="Dispute types"
        description="Create or edit dispute TYPES for better generation and
      performance"
        filter={
          <Box w="100%">
            <Buttons.Button
              wid="100%"
              justifyContent="center"
              backgroundColor={theme.colors.base.secondary}
              fontSize={theme.fonts.sizes.md}
              fontColor={theme.colors.base.white}
              onClick={() => {
                onOpen();
                isEdit({} as Types);
              }}
            >
              Create new type
            </Buttons.Button>
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
          <Box
            backgroundColor={theme.colors.base.white}
            w="100%"
            borderRadius={6}
            p={5}
            mt={`15px`}
          >
            <TableContainer
              whiteSpace="pre-wrap"
              fontFamily={theme.fonts.family.primary}
              maxW="100%"
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>
                      <Text
                        fontSize={theme.fonts.sizes.md}
                        color={theme.colors.base.secondary}
                        fontWeight={500}
                      >
                        Type
                      </Text>
                    </Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {types.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td>
                          <Text
                            fontSize={theme.fonts.sizes.sm}
                            color={theme.colors.base.gray[400]}
                          >
                            {item.type}
                          </Text>
                        </Td>
                        <Td w="5%">
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
                              _hover={{
                                backgroundColor: theme.colors.base.primary,
                              }}
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
                                  <Edit
                                    size={theme.icons.sizes.xs}
                                    color={theme.colors.base.secondary}
                                  />
                                }
                                iconSpacing={3}
                                bg="transparent"
                                onClick={() => {
                                  isEdit({
                                    ...item,
                                  });
                                  onOpen();
                                }}
                              >
                                <Text
                                  fontSize={theme.fonts.sizes.md}
                                  color={theme.colors.base.secondary}
                                >
                                  Edit
                                </Text>
                              </MenuItem>
                              <Box
                                w="100%"
                                h="1px"
                                backgroundColor={theme.colors.base.gray[100]}
                                margin={`10px 0`}
                              />
                              <MenuItem
                                bg="transparent"
                                onClick={() => {
                                  isDelete({
                                    ...item,
                                  });
                                  onOpen();
                                }}
                              >
                                <Text
                                  fontSize={theme.fonts.sizes.md}
                                  color={theme.colors.base.red[200]}
                                >
                                  Delete
                                </Text>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
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
    </>
  );
};

export default Types;
