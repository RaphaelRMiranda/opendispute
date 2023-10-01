import Page from "@/components/Page";
import SelectText from "@/components/Selects/Text";
import {
  deleteSettings,
  getSettings,
  updateSettings,
  useSettings,
} from "@/context/Settings";
import { useEffect, useRef, useState } from "react";
import {
  DefaultPerTypeValue,
  DefaultValue,
  SettingsMode,
} from "@/context/Settings/types";
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

const Action = () => {
  const { token } = useUser();
  const { settings, setSettings } = useSettings();

  const [filter, setFilter] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<DefaultValue[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [onLoading, isLoading] = useState<boolean>(true);
  const [onLoadingAction, isLoadingAction] = useState<boolean>(false);
  const [onError, isError] = useState<boolean>(false);
  const [onDeleting, isDeleting] = useState<boolean>(false);

  const [actionError, setActionError] = useState<boolean>(false);

  const [editedActionTitle, setEditedActionTitle] = useState<string>("");
  const [editedActionText, setEditedActionText] = useState<string>("");
  const [newActionTitle, setNewActionTitle] = useState<string>("");
  const [newActionText, setNewActionText] = useState<string>("");

  const [onNewAction, isNewAction] = useState<boolean>(false);
  const [onNewFactual, isNewFactual] = useState<boolean>(false);

  const [onEdit, isEdit] = useState<EditProps>({} as EditProps);
  const [onDelete, isDelete] = useState<DeleteProps>({} as DeleteProps);

  const sucToast = useToast({
    position: "top",
    duration: 5000,
    title: onEdit.title
      ? "Action was updated"
      : onDelete.index >= 0
      ? "Action was deleted"
      : "New action created",
    description: onEdit.title
      ? "Action was updated successfully"
      : onDelete.index >= 0
      ? "The action was deleted successfully"
      : "The new action was created successfully",
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
      ? "Error when trying to update action "
      : onDelete.index >= 0
      ? "Error when trying to delete action "
      : "Error when trying to create new action ",
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
    if (settings && settings.actions) {
      isLoading(false);
      setFilterOptions(
        getKeysByMode(settings, "actions").map((item) => {
          return {
            label: item,
            value: item,
          };
        })
      );
      setFilter(
        filter ||
          getKeysByMode(settings, "actions").map((item) => {
            return {
              label: item,
              value: item,
            };
          })[0].value
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  const handleCreateAction = () => {
    isLoadingAction(true);
    setActionError(false);
    isDelete({} as DeleteProps);
    isEdit({} as EditProps);
    isNewAction(false);

    const newSettings = {
      ...settings,
      actions: {
        ...settings["actions"],
        [filter]: [
          ...settings["actions"][filter],
          {
            type: filter,
            label: newActionTitle,
            value: newActionText,
          },
        ],
      },
    };

    updateSettings({
      token,
      ...newSettings,
    })
      .then((response) => {
        isLoadingAction(false);
        sucToast();
        isEdit({} as EditProps);
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        setActionError(true);
        isLoadingAction(false);
        errHookToast();
      });
  };

  const handleCreateFactual = () => {
    isLoadingAction(true);
    setActionError(false);
    isDelete({} as DeleteProps);
    isEdit({} as EditProps);
    isNewAction(false);

    const index = `FD${filterOptions.length + 1}`;

    const newSettings = {
      ...settings,
      actions: {
        ...settings["actions"],
        [index]: [
          {
            type: filter,
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
        isLoadingAction(false);
        sucToast();
        isEdit({} as EditProps);
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        setActionError(true);
        isLoadingAction(false);
        errHookToast();
      });
  };

  const handleUpdate = () => {
    isLoadingAction(true);
    setActionError(false);
    isDelete({} as DeleteProps);
    isNewAction(false);
    isNewFactual(false);

    const newSettings = {
      ...settings,
      actions: {
        ...settings["actions"],
        [filter]: [
          ...settings["actions"][filter].map(
            (item: DefaultValue & DefaultPerTypeValue, index) => {
              if (index === onEdit.index) {
                return {
                  type: filter,
                  label: editedActionTitle || onEdit.title,
                  value: editedActionText || onEdit.text,
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
        isLoadingAction(false);
        sucToast();
        isEdit({} as EditProps);
        handleGetSettings();
        onClose();
      })
      .catch((err) => {
        setActionError(true);
        isLoadingAction(false);
        errHookToast();
      });
  };

  const handleDelete = () => {
    isDeleting(true);
    setActionError(false);
    isEdit({} as EditProps);
    isNewAction(false);
    isNewFactual(false);

    deleteSettings({
      mode: SettingsMode.ACTIONS,
      index: onDelete.index,
      type: filter,
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
        setActionError(true);
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
            <AlertDialogContent
              padding={5}
              backgroundColor={theme.colors.base.white}
            >
              <Text
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.md}
                fontWeight={500}
              >
                Delete action
              </Text>

              <Text
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.sm}
              >
                Are you sure? You cant undo this action afterwards.
              </Text>

              <AlertDialogFooter padding={0} mt={10}>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  ml={3}
                  color={theme.colors.base.secondary}
                  fontSize={theme.fonts.sizes.sm}
                  isDisabled={onDeleting}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={handleDelete}
                  ml={3}
                  color={theme.colors.base.primary}
                  backgroundColor={theme.colors.base.red[200]}
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
            <ModalContent backgroundColor={theme.colors.base.primary}>
              <ModalHeader color={theme.colors.base.secondary}>
                {onEdit.title ? "Edit action" : "Create new action"}
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
                      onChange={(e) => setEditedActionTitle(e.target.value)}
                      defaultValue={onEdit.title}
                      reference={inputRef}
                      marginBottom={10}
                    />
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                      marginLeft={`5px`}
                    >
                      Text
                    </Text>
                    <Textarea
                      w="100%"
                      placeholder="Type"
                      fontSize={theme.fonts.sizes.sm}
                      onChange={(e) => setEditedActionText(e.target.value)}
                      defaultValue={onEdit.text}
                      bg={theme.colors.base.gray[300]}
                      border="none"
                      color={theme.colors.base.secondary}
                      _placeholder={{
                        color: theme.colors.base.gray[400],
                      }}
                    />
                    {actionError && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                        marginLeft={`5px`}
                      >
                        Error when trying to update action
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
                      onChange={(e) => setNewActionTitle(e.target.value)}
                      reference={inputRef}
                      marginBottom={10}
                    />
                    <Text
                      fontSize={theme.fonts.sizes.sm}
                      color={theme.colors.base.secondary}
                      marginLeft={`5px`}
                    >
                      Text
                    </Text>
                    <Textarea
                      w="100%"
                      placeholder="Insert text"
                      fontSize={theme.fonts.sizes.sm}
                      onChange={(e) => setNewActionText(e.target.value)}
                      defaultValue={onEdit.text}
                      bg={theme.colors.base.gray[300]}
                      border="none"
                      color={theme.colors.base.secondary}
                      _placeholder={{
                        color: theme.colors.base.gray[400],
                      }}
                    />
                    {actionError && (
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.red[200]}
                        marginLeft={5}
                      >
                        Error when trying to create action
                      </Text>
                    )}
                  </Box>
                )}
              </ModalBody>

              <ModalFooter>
                <Button
                  mr={3}
                  isDisabled={onLoadingAction}
                  onClick={onClose}
                  color={theme.colors.base.secondary}
                  fontSize={theme.fonts.sizes.sm}
                >
                  Close
                </Button>
                <Button
                  colorScheme="messenger"
                  isLoading={onLoadingAction}
                  onClick={
                    onEdit.title
                      ? () => handleUpdate()
                      : () => handleCreateAction()
                  }
                  color={theme.colors.base.primary}
                  backgroundColor={theme.colors.base.blue}
                  fontSize={theme.fonts.sizes.sm}
                >
                  {onEdit.title ? "Save changes" : "Create action"}
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
            <AlertDialogContent
              padding={5}
              backgroundColor={theme.colors.base.white}
            >
              <Text
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.md}
                fontWeight={500}
              >
                Create factual dispute
              </Text>

              <Text
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.sm}
              >
                The new factual dispute will be created with DEFAULT values
              </Text>
              <Text
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.sm}
              >
                Factual that will be created:
              </Text>
              <Text
                color={theme.colors.base.secondary}
                fontSize={theme.fonts.sizes.md}
                fontWeight="bold"
              >{`FD${filterOptions.length + 1}`}</Text>

              <AlertDialogFooter padding={0} mt={10}>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  ml={3}
                  fontSize={theme.fonts.sizes.sm}
                  isDisabled={onLoadingAction}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="messenger"
                  onClick={handleCreateFactual}
                  ml={3}
                  fontSize={theme.fonts.sizes.sm}
                  isLoading={onLoadingAction}
                >
                  Create factual dispute
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}

      <Page
        title="Actions"
        description="Change action options by adding, removing or editing current
        ones based on dispute TYPES"
        filter={
          <Box
            w="100%"
            display="flex"
            flexDir="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Skeleton
              w="40%"
              isLoaded={!onLoading}
              borderRadius={6}
              startColor={theme.colors.base.gray[300]}
              endColor={theme.colors.base.gray[100]}
              mr={"10px"}
            >
              <SelectText
                label="Dispute Type"
                wid="100%"
                options={filterOptions}
                onChange={(e) => setFilter(e.target.value)}
                defaultValue={filter}
              />
            </Skeleton>
            <Skeleton
              w="40%"
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
                  isNewAction(true);
                  onOpen();
                }}
                padding={12}
              >
                New value
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
            data={settings.actions}
            filter={filter}
            isNewValue={isNewAction}
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

export default Action;
