import { FlattenSimpleInterpolation } from "styled-components";

export type TStyledText = {
  display?: string | Array<string>;
  color?: string;
  fontSize?: string | number | Array<string | number>;
  weight?: string | number;
  align?: string | Array<string>;
  margin?: string | number;
  marginTop?: string | number | Array<string | number>;
  marginBottom?: string | number | Array<string | number>;
  marginLeft?: string | number | Array<string | number>;
  marginRight?: string | number | Array<string | number>;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  width?: string | number | Array<string | number>;
  position?: string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  transform?: "uppercase" | "lowercase" | "capitalize";
  transition?: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  animation?: string | FlattenSimpleInterpolation;
  pointerEvents?: string;
};

export type TText = TStyledText & {
  children: React.ReactNode | React.ReactNode[];
};
