import { FlattenSimpleInterpolation } from "styled-components";

type BgColors = {
  color: string;
  percent?: number | string;
};

export type TStyledBox = {
  position?: string;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  transform?: string;
  wid?: string | number | Array<number | string>;
  maxWid?: string | number | Array<number | string>;
  hei?: string | number | Array<number | string>;
  maxHei?: string | number | Array<number | string>;
  backgroundColor?: string | Array<string>;
  linear?: boolean;
  linearDeg?: number;
  backgroundColors?: BgColors[];
  margin?: string | number | Array<string | number>;
  marginTop?: string | number | Array<string | number>;
  marginBottom?: string | number | Array<string | number>;
  marginLeft?: string | number | Array<string | number>;
  marginRight?: string | number | Array<string | number>;
  padding?: string | number | Array<string | number>;
  paddingTop?: string | number | Array<string | number>;
  paddingBottom?: string | number | Array<string | number>;
  paddingLeft?: string | number | Array<string | number>;
  paddingRight?: string | number | Array<string | number>;
  display?: string | Array<string>;
  flex?: string;
  gap?: string | number | Array<string | number>;
  flexDirection?: string | Array<string>;
  flexWrap?: string | Array<string>;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | Array<string>;
  alignItems?: string | Array<string>;
  border?: string | boolean;
  borderColor?: string;
  borderRadius?: string | number | Array<string | number>;
  borderStyle?: string;
  borderWidth?: number;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  boxShadow?: string;
  minWid?: string | number | Array<string | number>;
  minHei?: string | number | Array<string | number>;
  backgroundImage?: string;
  className?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  whiteSpace?: string;
  zIndex?: number;
  backgroundRepeat?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  transition?: string;
  opacity?: string | number;
  animation?: string | FlattenSimpleInterpolation;
  reference?: any;
  hover?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  pointerEvents?: string;
  blur?: boolean;
  scrollColor?: string;
  id?: string;
};

export type TBox = TStyledBox & {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
};
