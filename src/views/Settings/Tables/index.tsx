import { theme } from "@/styles/theme";
import {
  Box,
  BoxProps,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { TablesProps } from "./types";
import Text from "@/components/Text";
import Dots from "@/views/Listing/icons/Dots";
import Edit from "@/components/Card/icons/Edit";

const Tables = ({ data, filter, ...rest }: BoxProps & TablesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>teste</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        backgroundColor={theme.colors.base.white}
        w="100%"
        borderRadius={6}
        p={5}
        mt={`15px`}
        {...rest}
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
                    weight={500}
                  >
                    Title
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize={theme.fonts.sizes.md}
                    color={theme.colors.base.secondary}
                    weight={500}
                  >
                    Text
                  </Text>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data[filter].map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.gray[400]}
                      >
                        {item.label}
                      </Text>
                    </Td>
                    <Td wordBreak="break-all">
                      <Text
                        fontSize={theme.fonts.sizes.sm}
                        color={theme.colors.base.gray[400]}
                      >
                        {item.value}
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
                            onClick={() => {}}
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
                          <MenuItem bg="transparent" onClick={() => {}}>
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
    </>
  );
};

export default Tables;
