import Box from "@/components/Box";
import { Input } from "../styles";
import { TBox } from "@/components/Box/types";
import { TInput } from "../types";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import Eye from "./icons/Eye";
import { useState } from "react";
import EyeCrossed from "./icons/EyeCrossed";

const InputPassword = ({
  placeholder,
  label,
  error,
  onChange,
  reg,
  readonly,
  ...rest
}: TBox & TInput) => {
  const [show, setShow] = useState<boolean>(false);

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
      <Box wid="100%" position="relative">
        <Input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
          {...reg}
          readOnly={readonly}
        />
        <Box
          position="absolute"
          top="50%"
          right={12}
          transform="translateY(-50%)"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <EyeCrossed size={theme.icons.sizes.xs} />
          ) : (
            <Eye size={theme.icons.sizes.xs} />
          )}
        </Box>
      </Box>
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

export default InputPassword;
