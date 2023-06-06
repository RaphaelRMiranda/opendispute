import Box from "@/components/Box";
import * as Buttons from "@/components/Buttons";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import Add from "../icons/Add";
import { useRouter } from "next/router";
import { handleChangePicture, useUser } from "@/context/User";
import Role from "./utils/Role";
import { useDocument } from "@/context/Document";
import { DisputeInterface } from "@/views/Create/types";
import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Image,
  Skeleton,
  SkeletonCircle,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

const User = () => {
  const { user, setUser, token } = useUser();
  const { setObject } = useDocument();

  const sucToast = useToast({
    position: "top",
    duration: 5000,
    title: "User profile picture updated successfully",
    description: "The user profile picture was updated successfully",
    status: "success",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const errToast = useToast({
    position: "top",
    duration: 5000,
    title: "Error when trying to update user profile picture",
    description: "Please contact support if the problem persists",
    status: "error",
    isClosable: true,
    containerStyle: {
      fontSize: theme.fonts.sizes.sm,
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef<HTMLButtonElement>(null);

  const [isUploading, setUploading] = useState<boolean>(false);

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string>("");

  const handleClickImage = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target && e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        onOpen();
        setImage(base64 as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    setUploading(true);
    handleChangePicture({ _id: user._id, picture: image, token })
      .then((response) => {
        sucToast();
        onClose();
        setUser(response.data.user);
        setUploading(false);
      })
      .catch((error) => {
        errToast();
        console.log(error);
        setUploading(false);
      });
  };

  const cleanInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    // Caso precise alterar o Header com um Menu ou algo assim, altere o wid abaixo
    <Box wid="100%" justifyContent="flex-end" alignItems="center">
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent padding={5}>
            <Text fontSize={theme.fonts.sizes.md} weight={500}>
              Change Profile Picture
            </Text>

            <Text fontSize={theme.fonts.sizes.sm}>
              Are you sure you want to change your profile picture?
            </Text>

            <Box wid="100%" borderRadius="50%" justifyContent="center">
              <Image width="50%" src={image} alt="Profile" borderRadius="50%" />
            </Box>

            <AlertDialogFooter padding={0} mt={10}>
              <Button
                ref={cancelRef}
                onClick={() => {
                  onClose();
                  cleanInput();
                }}
                ml={3}
                fontSize={theme.fonts.sizes.sm}
                isDisabled={isUploading}
              >
                Cancel
              </Button>
              <Button
                colorScheme="messenger"
                onClick={handleSaveImage}
                ml={3}
                fontSize={theme.fonts.sizes.sm}
                isLoading={isUploading}
              >
                Change
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Buttons.Button
        wid={150}
        fontSize={theme.fonts.sizes.md}
        icon={<Add size={theme.fonts.sizes.md} />}
        onClick={() => {
          setObject({} as DisputeInterface);
          router.push("/create");
        }}
      >
        Create Letter
      </Buttons.Button>
      <Box
        wid={2}
        hei={30}
        borderRadius={50}
        backgroundColor={theme.colors.base.primary}
        marginLeft={10}
        marginRight={10}
      />

      <Box
        position="relative"
        wid={42}
        hei={42}
        backgroundColor={theme.colors.base.primary}
        borderRadius={50}
        hover="cursor:pointer;"
        onClick={handleClickImage}
      >
        <SkeletonCircle
          size={"42px"}
          startColor={theme.colors.base.gray[300]}
          endColor={theme.colors.base.gray[400]}
          isLoaded={user && user._id ? true : false}
        >
          {user?.picture && (
            <Image
              width={42}
              height={42}
              src={user.picture}
              alt="Picture"
              borderRadius="50%"
            />
          )}
        </SkeletonCircle>
        <Box display="none">
          <input ref={inputRef} type="file" onChange={handleImageChange} />
        </Box>
        <Box position="absolute" right={"0"} bottom={"0"}>
          <SkeletonCircle
            size={theme.fonts.sizes.sm}
            startColor={theme.colors.base.gray[300]}
            endColor={theme.colors.base.gray[400]}
            isLoaded={user && user._id ? true : false}
          >
            <Add
              size={theme.fonts.sizes.sm}
              color={theme.colors.base.gray[300]}
            />
          </SkeletonCircle>
        </Box>
      </Box>
      <Box
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginLeft={10}
        paddingRight={10}
      >
        <Skeleton
          startColor={theme.colors.base.gray[300]}
          endColor={theme.colors.base.gray[400]}
          borderRadius={4}
          isLoaded={user && user._id ? true : false}
        >
          <Text
            fontSize={theme.fonts.sizes.sm}
            weight={500}
            color={theme.colors.base.secondary}
          >
            {user.firstName} {user.lastName.charAt(0)}.
          </Text>
        </Skeleton>
        <Skeleton
          height={5}
          startColor={theme.colors.base.gray[300]}
          endColor={theme.colors.base.gray[400]}
          borderRadius={3}
          isLoaded={user && user._id ? true : false}
          mt={1}
        >
          <Text
            fontSize={theme.fonts.sizes.sm}
            color={theme.colors.base.secondary}
          >
            {Role(user.role)}
          </Text>
        </Skeleton>
      </Box>
    </Box>
  );
};

export default User;
