import Box from "@/components/Box";
import { Input } from "../styles";
import { TBox } from "@/components/Box/types";
import { TInput } from "../types";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";

const InputDate = ({
  placeholder,
  label,
  error,
  onChange,
  reg,
  value,
  readonly,
  defaultValue,
  paddingInput,
  ...rest
}: TBox & TInput) => {
  return (
    <Box
      position="relative"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      {...rest}
    >
      {label && (
        <Text
          fontSize={theme.fonts.sizes.sm}
          color={theme.colors.base.secondary}
          marginLeft={5}
        >
          {label}
        </Text>
      )}
      <Input
        type="date"
        placeholder={placeholder}
        onChange={onChange}
        {...reg}
        value={value}
        defaultValue={defaultValue}
        readOnly={readonly}
        padding={paddingInput}
      />
      {error && error !== "undefined" && (
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

export default InputDate;