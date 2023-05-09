import Box from "@/components/Box";
import { Select } from "./styles";
import { TSelect } from "../types";
import { TBox } from "@/components/Box/types";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import ArrowDown from "../icons/ArrowDown";

const SelectText = ({
  label,
  error,
  options,
  onChange,
  ...rest
}: TBox & TSelect) => {
  return (
    <Box flexDirection="column" alignItems="flex-start" {...rest}>
      {label && (
        <Text
          fontSize={theme.fonts.sizes.sm}
          color={theme.colors.base.secondary}
          marginLeft={5}
        >
          {label}
        </Text>
      )}
      <Box position="relative" wid="100%">
        <Select onChange={onChange}>
          {options &&
            options.map((item) => {
              return <option key={item.value}>{item.label}</option>;
            })}
        </Select>
        <Box
          position="absolute"
          right="1px"
          backgroundColor={theme.colors.base.gray[300]}
          padding={`0 12px 0 0`}
        >
          <ArrowDown size={theme.icons.sizes.xs} />
        </Box>
      </Box>
      {error && (
        <Text
          fontSize={theme.fonts.sizes.sm}
          color={theme.colors.base.red[200]}
          marginLeft={5}
        >
          {error}
        </Text>
      )}
    </Box>
  );
};

export default SelectText;
