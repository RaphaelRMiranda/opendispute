import Box from "@/components/Box";
import { TBox } from "@/components/Box/types";
import { useState } from "react";
import { TRadio } from "../types";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import Check from "./icons/Check";

const Checkbox = ({
  label,
  error,
  checked,
  reg,
  onChange,
  ...rest
}: TBox & TRadio) => {
  const [selected, isSelected] = useState<boolean>(false);

  return (
    <Box flexDirection="column" justifyContent="center" alignItems="flex-start">
      <Box
        justifyContent="flex-start"
        alignItems="center"
        {...rest}
        onClick={() => {
          onChange && onChange(!selected);
          isSelected(!selected);
        }}
      >
        <Box>
          <input
            type="checkbox"
            checked={checked ? checked : false}
            readOnly
            {...reg}
          />
        </Box>
        <Box
          wid={35}
          backgroundColor={theme.colors.base.gray[300]}
          padding={10}
          borderRadius={6}
        >
          <Check
            size={theme.icons.sizes.xs}
            color={
              checked
                ? theme.colors.base.secondary
                : theme.colors.base.gray[300]
            }
          />
        </Box>
        {label && (
          <Text
            fontSize={theme.fonts.sizes.sm}
            color={theme.colors.base.secondary}
            marginLeft={5}
          >
            {label}
          </Text>
        )}
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

export default Checkbox;
