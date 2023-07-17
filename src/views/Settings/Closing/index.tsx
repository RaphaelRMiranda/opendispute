import Page from "@/components/Page";
import SelectText from "@/components/Selects/Text";
import {
  deleteSettings,
  getSettings,
  updateSettings,
  useSettings,
} from "@/context/Settings";
import { useEffect, useRef, useState } from "react";
import { DefaultValue, SettingsMode } from "@/context/Settings/types";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Tables from "../Tables";
import { useUser } from "@/context/User";
import { theme } from "@/styles/theme";
import * as Buttons from "@/components/Buttons";
import Layout from "@/components/Layout";
import getKeysByMode from "../utils/getKeysByMode";
import { EditProps } from "../Tables/types";
import InputText from "@/components/Inputs/Text";
import { DeleteProps } from "./types";

const Closing = () => {
  const { token } = useUser();
  const { settings, setSettings } = useSettings();

  const [filter, setFilter] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<DefaultValue[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [onLoading, isLoading] = useState<boolean>(true);
  const [onLoadingClosing, isLoadingClosing] = useState<boolean>(false);
  const [onError, isError] = useState<boolean>(false);
  const [onDeleting, isDeleting] = useState<boolean>(false);

  const [closingError, setClosingError] = useState<boolean>(false);

  const [editedClosingTitle, setEditedClosingTitle] = useState<string>("");
  const [editedClosingText, setEditedClosingText] = useState<string>("");
  const [newClosingTitle, setNewClosingTitle] = useState<string>("");
  const [newClosingText, setNewClosingText] = useState<string>("");

  const [onNewClosing, isNewClosing] = useState<boolean>(false);
  const [onNewFactual, isNewFactual] = useState<boolean>(false);

  const [onEdit, isEdit] = useState<EditProps>({} as EditProps);
  const [onDelete, isDelete] = useState<DeleteProps>({} as DeleteProps);

  const sucToast = useToast({
    position: "top",
    duration: 5000,
    title: onEdit.title
      ? "Closing statement was updated"
      : onDelete.index >= 0
      ? "Closing statement was deleted"
      : "New closing statement created",
    description: onEdit.title
      ? "Closing statement was updated successfully"
      : onDelete.index >= 0
      ? "The closing statement was deleted successfully"
      : "The new closing statement was created successfully",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const errHookToast = useToast({
    position: "top",
    duration: 5000,
    title: onEdit.title
      ? "Error when trying to update closing statement "
      : onDelete.index >= 0
      ? "Error when trying to delete closing statement "
      : "Error when trying to create new closing statement ",
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

  const handleGetSettings = () => {
    if (!onLoading) isLoading(true);
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
  };

  useEffect(() => {
    if (token && token.length > 5) handleGetSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (settings && settings.closingStatement) {
      isLoading(false);
      setFilterOptions(
        getKeysByMode(settings, "closingStatement").map((item) => {
          return {
            label: item,
            value: item,
          };
        })
      );
      setFilter(
        filter ||
          getKeysByMode(settings, "closingStatement").map((item) => {
            return {
              label: item,
              value: item,
            };
          })[0].value
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  const handleCreateClosing = () => {
    isLoadingClosing(true);
    setClosingError(false);
    isDelete({} as DeleteProps);
    isEdit({} as EditProps);
    isNewClosing(false);

    const newSettings = {
      ...settings,
      closingStatement: {
        ...settings["closingStatement"],
        [filter]: [
          ...settings["closingStatement"][filter],
          {
            label: newClosingTitle,
            value: newClosingText,
          },
        ],
      },
    };

    updateSettings({
      token,
      ...newSettings,
    })
      .then((response) => {
        isLoadingClosing(false);
        sucToast();
        isEdit({} as EditProps);
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        setClosingError(true);
        isLoadingClosing(false);
        errHookToast();
      });
  };

  const handleCreateFactual = () => {
    isLoadingClosing(true);
    setClosingError(false);
    isDelete({} as DeleteProps);
    isEdit({} as EditProps);
    isNewClosing(false);

    const index = `FD${filterOptions.length + 1}`;

    const newSettings = {
      ...settings,
      closingStatement: {
        ...settings["closingStatement"],
        [index]: [
          {
            label: "Default title",
            value: "Default text",
          },
        ],
      },
    };

    updateSettings({
      token,
      ...newSettings,
    })
      .then((response) => {
        isLoadingClosing(false);
        sucToast();
        isEdit({} as EditProps);
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        setClosingError(true);
        isLoadingClosing(false);
        errHookToast();
      });
  };

  const handleUpdate = () => {
    isLoadingClosing(true);
    setClosingError(false);
    isDelete({} as DeleteProps);
    isNewClosing(false);
    isNewFactual(false);

    const newSettings = {
      ...settings,
      closingStatement: {
        ...settings["closingStatement"],
        [filter]: [
          ...settings["closingStatement"][filter].map(
            (item: DefaultValue, index) => {
              if (index === onEdit.index) {
                return {
                  label: editedClosingTitle || onEdit.title,
                  value: editedClosingText || onEdit.text,
                };
              } else {
                return item;
              }
            }
          ),
        ],
      },
    };

    updateSettings({
      token,
      ...newSettings,
    })
      .then((response) => {
        isLoadingClosing(false);
        sucToast();
        isEdit({} as EditProps);
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        setClosingError(true);
        isLoadingClosing(false);
        errHookToast();
      });
  };

  const handleDelete = () => {
    isDeleting(true);
    setClosingError(false);
    isEdit({} as EditProps);
    isNewClosing(false);
    isNewFactual(false);

    deleteSettings({
      mode: SettingsMode.CLOSING,
      index: onDelete.index,
      round: filter,
      token,
    })
      .then((response) => {
        isDeleting(false);
        isDelete({} as DeleteProps);
        sucToast();
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        isDeleting(false);
        isDelete({} as DeleteProps);
        setClosingError(true);
        errHookToast();
        onClose();
      });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <Layout>
      {onDelete.index >= 0 ? (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent padding={5}>
              <Text fontSize={theme.fonts.sizes.md} fontWeight={500}>
                Delete closing statement
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
                  onClick={handleDelete}
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
      ) : (
        !onNewFactual && (
          <Modal
            initialFocusRef={inputRef}
            size="2xl"
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {onEdit.title
                  ? "Edit closing statement"
                  : "Create new closing statement"}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {onEdit.title && (
                  <Box
                    w="100%"
                    flexDir="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <InputText
                      wid="100%"
                      label="Title"
                      placeholder="Type"
                      fontSize={theme.fonts.sizes.sm}
                      onChange={(e) => setEditedClosingTitle(e.target.value)}
                      defaultValue={onEdit.title}
                      reference={inputRef}
                      marginBottom={10}
                    />
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                      marginLeft={"5px"}
                    >
                      Text
                    </Text>
                    <Textarea
                      w="100%"
                      placeholder="Type"
                      fontSize={theme.fonts.sizes.sm}
                      onChange={(e) => setEditedClosingText(e.target.value)}
                      defaultValue={onEdit.text}
                      bg={theme.colors.base.gray[300]}
                      border="none"
                      color={theme.colors.base.secondary}
                    />
                    {closingError && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                        marginLeft={5}
                      >
                        Error when trying to update closing statement
                      </Text>
                    )}
                  </Box>
                )}
                {!onEdit.title && (
                  <Box
                    w="100%"
                    flexDir="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <InputText
                      wid="100%"
                      label="Title"
                      placeholder="Title here"
                      fontSize={theme.fonts.sizes.sm}
                      onChange={(e) => setNewClosingTitle(e.target.value)}
                      reference={inputRef}
                      marginBottom={10}
                    />
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                      marginLeft={5}
                    >
                      Text
                    </Text>
                    <Textarea
                      w="100%"
                      placeholder="Insert text"
                      fontSize={theme.fonts.sizes.sm}
                      onChange={(e) => setNewClosingText(e.target.value)}
                      defaultValue={onEdit.text}
                      bg={theme.colors.base.gray[300]}
                      border="none"
                      color={theme.colors.base.secondary}
                    />
                    {closingError && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                        marginLeft={5}
                      >
                        Error when trying to create closing statement
                      </Text>
                    )}
                  </Box>
                )}
              </ModalBody>

              <ModalFooter>
                <Button mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  colorScheme="messenger"
                  isLoading={onLoadingClosing}
                  onClick={
                    onEdit.title
                      ? () => handleUpdate()
                      : () => handleCreateClosing()
                  }
                >
                  {onEdit.title ? "Save changes" : "Create closing statement"}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )
      )}
      {onNewFactual && (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          size="xl"
        >
          <AlertDialogOverlay>
            <AlertDialogContent padding={5}>
              <Text fontSize={theme.fonts.sizes.md} fontWeight={500}>
                Create factual dispute
              </Text>

              <Text fontSize={theme.fonts.sizes.sm}>
                The new factual dispute will be created with DEFAULT values
              </Text>
              <Text fontSize={theme.fonts.sizes.sm}>
                Factual that will be created:
              </Text>
              <Text fontSize={theme.fonts.sizes.md} fontWeight="bold">{`FD${
                filterOptions.length + 1
              }`}</Text>

              <AlertDialogFooter padding={0} mt={10}>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  ml={3}
                  fontSize={theme.fonts.sizes.sm}
                  isDisabled={onLoadingClosing}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="messenger"
                  onClick={handleCreateFactual}
                  ml={3}
                  fontSize={theme.fonts.sizes.sm}
                  isLoading={onLoadingClosing}
                >
                  Create factual dispute
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}

      <Page
        title="Closing Statement"
        description="Change closing statement options by adding, removing or editing
        current ones based on the factual round"
        filter={
          <Box
            w="100%"
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Skeleton
              w="32%"
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
                defaultValue={filter}
              />
            </Skeleton>
            <Skeleton
              w="32%"
              isLoaded={!onLoading}
              borderRadius={6}
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[100]}
            >
              <Buttons.Button
                wid="100%"
                justifyContent="center"
                backgroundColor={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.md}
                fontColor={theme.colors.base.white}
                onClick={() => {
                  isDelete({} as DeleteProps);
                  isEdit({} as EditProps);
                  isNewFactual(false);
                  isNewClosing(true);
                  onOpen();
                }}
                padding={12}
              >
                New value
              </Buttons.Button>
            </Skeleton>
            <Skeleton
              w="32%"
              isLoaded={!onLoading}
              borderRadius={6}
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[100]}
            >
              <Buttons.Button
                wid="100%"
                justifyContent="center"
                backgroundColor={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.md}
                fontColor={theme.colors.base.white}
                onClick={() => {
                  isDelete({} as DeleteProps);
                  isEdit({} as EditProps);
                  isNewClosing(false);
                  isNewFactual(true);
                  onOpen();
                }}
                padding={12}
                pointerEvents={filterOptions.length <= 12 ? "auto" : "none"}
                opacity={filterOptions.length <= 12 ? 1 : 0.5}
              >
                New factual
              </Buttons.Button>
            </Skeleton>
          </Box>
        }
        filterSize={40}
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
        {!onLoading && !onError && filter && (
          <Tables
            data={settings.closingStatement}
            filter={filter}
            isNewValue={isNewClosing}
            isNewFactual={isNewFactual}
            isEdit={isEdit}
            isDelete={isDelete}
            onOpen={onOpen}
          />
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
    </Layout>
  );
};

export default Closing;
