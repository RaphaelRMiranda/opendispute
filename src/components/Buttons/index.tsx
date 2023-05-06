import Box from "@/components/Box";
import { TButton } from "./types";
import Text from "../Text";
import { theme } from "@/styles/theme";
import { TBox } from "../Box/types";

export const Button = ({
  icon,
  fontColor,
  fontSize,
  children,
  ...rest
}: TButton & TBox) => {
  const hoverStyled = `
    cursor: pointer;
    background-color:${theme.colors.base.secondary}; 
    box-shadow: 0 2px 10px 2px rgba(0 0 0 / 12%);

    & > span {
        color: ${theme.colors.base.white};
    }

    & > svg > path {
      fill: ${theme.colors.base.white};
    }
  `;

  return (
    <Box
      borderRadius={6}
      justifyContent="flex-start"
      padding={10}
      backgroundColor="transparent"
      hover={hoverStyled}
      {...rest}
    >
      {icon && icon}
      <Text
        fontSize={fontSize || theme.fonts.sizes.sm}
        color={fontColor || theme.colors.base.secondary}
        weight={500}
        marginLeft={icon ? 5 : 0}
        pointerEvents="none"
      >
        {children}
      </Text>
    </Box>
  );
};
