import Box from "@/components/Box";
import { Select, SelectBox } from "./styles";
import { TMultipleSelect } from "../types";
import { TBox } from "@/components/Box/types";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import ArrowDown from "../icons/ArrowDown";
import { useRef, useState } from "react";
import { TOption } from "../types";
import Remove from "../icons/Remove";

const MultipleSelect = ({
  label,
  error,
  options,
  onChange,
  ...rest
}: TBox & TMultipleSelect) => {
  const [selecteds, setSelecteds] = useState<TOption[]>([]);

  const handleSelect = (value: string | number) => {
    const finded = options && options.find((item) => item.value === value);

    if (finded) {
      const findedIndex = selecteds.findIndex(
        (item) => item.value === finded.value
      );

      if (findedIndex !== -1) {
        const newSelecteds = [...selecteds];
        newSelecteds.splice(findedIndex, 1);
        setSelecteds(newSelecteds);
      } else {
        setSelecteds([...selecteds, finded]);
      }
    }

    onChange && onChange(selecteds);
  };

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
      <Box position="relative" wid="100%" justifyContent="center">
        <Box
          position="absolute"
          wid="99%"
          padding={`0 10px`}
          backgroundColor={theme.colors.base.gray[300]}
          borderRadius={6}
          pointerEvents="none"
        >
          {selecteds.length > 0 ? (
            selecteds.map((item, index) => {
              return (
                <Text
                  key={index}
                  fontSize={theme.fonts.sizes.sm}
                  color={theme.colors.base.white}
                  marginLeft={5}
                  pointerEvents="none"
                  weight={500}
                >
                  <Box
                    backgroundColor={theme.colors.base.secondary}
                    borderRadius={50}
                    alignItems="center"
                    padding={`2px 8px`}
                  >
                    {item.label}
                    <Box
                      marginLeft={5}
                      onClick={() => handleSelect(item.value)}
                    >
                      <Remove
                        size={theme.icons.sizes.x}
                        color={theme.colors.base.white}
                      />
                    </Box>
                  </Box>
                </Text>
              );
            })
          ) : (
            <Text
              fontSize={theme.fonts.sizes.md}
              color={theme.colors.base.secondary}
              marginLeft={5}
              pointerEvents="none"
            >
              Select an option
            </Text>
          )}
        </Box>
        <Select
          onChange={(e) => {
            handleSelect(e.target.value);
          }}
        >
          {options &&
            options.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
        </Select>
        <Box
          position="absolute"
          right="1px"
          backgroundColor={theme.colors.base.gray[300]}
          padding={`0 12px 0 0`}
          pointerEvents="none"
          zIndex={2}
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

export default MultipleSelect;
