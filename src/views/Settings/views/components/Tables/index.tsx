import { theme } from "@/styles/theme";
import {
  Box,
  BoxProps,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TablesProps } from "./types";
import Text from "@/components/Text";
import Dots from "@/views/Listing/icons/Dots";

const Tables = ({ data, filter, ...rest }: BoxProps & TablesProps) => {
  return (
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
                        _hover={{ backgroundColor: theme.colors.base.primary }}
                      />
                      <MenuList
                        bg={theme.colors.base.white}
                        borderRadius={8}
                        boxShadow={`0 4px 12px 0 rgba(0 0 0 / 17%)`}
                        p={3}
                        border="none"
                      ></MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;
