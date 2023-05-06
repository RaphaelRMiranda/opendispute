import styled from "styled-components";
import { TStyledText } from "./types";
import { theme } from "@/styles/theme";

export const StyledText = styled.span<TStyledText>`
  ${({ display }) => {
    if (typeof display === "object") {
      const query = new Array<string>();
      const name = "display";

      for (let i = 0; i < display.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
          ${name}: ${
          typeof display[i] === "number"
            ? `${display[i]}px`
            : display[i]
            ? display[i]
            : "auto"
        };
      }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[display.length - 1]
          ? typeof theme.breakpoints[display.length - 1] === "number"
            ? `${theme.breakpoints[display.length - 1]}px`
            : theme.breakpoints[display.length - 1]
          : `${0}px`
      }) {
          ${name}: ${
        typeof display[display.length - 1] === "number"
          ? `${display[display.length - 1]}px`
          : display[display.length - 1]
          ? display[display.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `display: ${
        typeof display === "number"
          ? `${display}px`
          : display
          ? display
          : "flex"
      };`;
    }
  }}
  position: ${({ position }) => position || "static"};
  top: ${({ top }) =>
    top && typeof top === "string" ? top : top ? `${top}px` : "unset"};
  bottom: ${({ bottom }) =>
    bottom && typeof bottom === "string"
      ? bottom
      : bottom
      ? `${bottom}px`
      : "unset"};
  left: ${({ left }) =>
    left && typeof left === "string" ? left : left ? `${left}px` : "unset"};
  right: ${({ right }) =>
    right && typeof right === "string"
      ? right
      : right
      ? `${right}px`
      : "unset"};
  ${({ width }) => {
    if (typeof width === "object") {
      const query = new Array<string>();
      const name = "width";

      for (let i = 0; i < width.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
                ${name}: ${
          typeof width[i] === "number"
            ? `${width[i]}px`
            : width[i]
            ? width[i]
            : "auto"
        };
            }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[width.length - 1]
          ? typeof theme.breakpoints[width.length - 1] === "number"
            ? `${theme.breakpoints[width.length - 1]}px`
            : theme.breakpoints[width.length - 1]
          : `${0}px`
      }) {
                ${name}: ${
        typeof width[width.length - 1] === "number"
          ? `${width[width.length - 1]}px`
          : width[width.length - 1]
          ? width[width.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `width: ${
        typeof width === "number" ? `${width}px` : width ? width : "unset"
      };`;
    }
  }}
  color: ${({ color }) => color || theme.colors.base.black};
  ${({ fontSize }) => {
    if (typeof fontSize === "object") {
      const query = new Array<string>();
      const name = "font-size";

      for (let i = 0; i < fontSize.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
            ${name}: ${
          typeof fontSize[i] === "number"
            ? `${fontSize[i]}px`
            : fontSize[i]
            ? fontSize[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[fontSize.length - 1]
          ? typeof theme.breakpoints[fontSize.length - 1] === "number"
            ? `${theme.breakpoints[fontSize.length - 1]}px`
            : theme.breakpoints[fontSize.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof fontSize[fontSize.length - 1] === "number"
          ? `${fontSize[fontSize.length - 1]}px`
          : fontSize[fontSize.length - 1]
          ? fontSize[fontSize.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `font-size: ${
        typeof fontSize === "number"
          ? `${fontSize}px`
          : fontSize
          ? fontSize
          : theme.fonts.sizes.sm
      };`;
    }
  }}
  font-weight: ${({ weight, bold }) => {
    if (weight) return weight;
    if (bold) return "bold";
    return "normal";
  }};
  text-decoration: ${({ italic, underline, strike }) => {
    if (italic) return "italic";
    if (underline) return "underline";
    if (strike) return "line-through";
    return "none";
  }};
  ${({ align }) => {
    if (typeof align === "object") {
      const query = new Array<string>();
      const name = "text-align";

      for (let i = 0; i < align.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
            ${name}: ${
          typeof align[i] === "number"
            ? `${align[i]}px`
            : align[i]
            ? align[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[align.length - 1]
          ? typeof theme.breakpoints[align.length - 1] === "number"
            ? `${theme.breakpoints[align.length - 1]}px`
            : theme.breakpoints[align.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof align[align.length - 1] === "number"
          ? `${align[align.length - 1]}px`
          : align[align.length - 1]
          ? align[align.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `text-align: ${
        typeof align === "number" ? `${align}px` : align ? align : "unset"
      };`;
    }
  }}
  margin: ${({ margin }) =>
    margin && typeof margin === "string"
      ? margin
      : margin
      ? `${margin}px`
      : "0"};
  ${({ marginTop }) => {
    if (typeof marginTop === "object") {
      const query = new Array<string>();
      const name = "margin-top";

      for (let i = 0; i < marginTop.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
                ${name}: ${
          typeof marginTop[i] === "number"
            ? `${marginTop[i]}px`
            : marginTop[i]
            ? marginTop[i]
            : "auto"
        };
            }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[marginTop.length - 1]
          ? typeof theme.breakpoints[
              marginTop.length === 1 ? 0 : marginTop.length - 1
            ] === "number"
            ? `${theme.breakpoints[marginTop.length - 1]}px`
            : theme.breakpoints[marginTop.length - 1]
          : `${0}px`
      }) {
                ${name}: ${
        typeof marginTop[marginTop.length - 1] === "number"
          ? `${marginTop[marginTop.length - 1]}px`
          : marginTop[marginTop.length - 1]
          ? marginTop[marginTop.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `margin-top: ${
        typeof marginTop === "number"
          ? `${marginTop}px`
          : marginTop
          ? marginTop
          : "0"
      };`;
    }
  }}
  ${({ marginBottom }) => {
    if (typeof marginBottom === "object") {
      const query = new Array<string>();
      const name = "margin-bottom";

      for (let i = 0; i < marginBottom.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
              ${name}: ${
          typeof marginBottom[i] === "number"
            ? `${marginBottom[i]}px`
            : marginBottom[i]
            ? marginBottom[i]
            : "auto"
        };
          }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[marginBottom.length - 1]
          ? typeof theme.breakpoints[
              marginBottom.length === 1 ? 0 : marginBottom.length - 1
            ] === "number"
            ? `${theme.breakpoints[marginBottom.length - 1]}px`
            : theme.breakpoints[marginBottom.length - 1]
          : `${0}px`
      }) {
              ${name}: ${
        typeof marginBottom[marginBottom.length - 1] === "number"
          ? `${marginBottom[marginBottom.length - 1]}px`
          : marginBottom[marginBottom.length - 1]
          ? marginBottom[marginBottom.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `margin-bottom: ${
        typeof marginBottom === "number"
          ? `${marginBottom}px`
          : marginBottom
          ? marginBottom
          : "0"
      };`;
    }
  }}
      ${({ marginLeft }) => {
    if (typeof marginLeft === "object") {
      const query = new Array<string>();
      const name = "margin-left";

      for (let i = 0; i < marginLeft.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
                  ${name}: ${
          typeof marginLeft[i] === "number"
            ? `${marginLeft[i]}px`
            : marginLeft[i]
            ? marginLeft[i]
            : "auto"
        };
              }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[marginLeft.length - 1]
          ? typeof theme.breakpoints[
              marginLeft.length === 1 ? 0 : marginLeft.length - 1
            ] === "number"
            ? `${theme.breakpoints[marginLeft.length - 1]}px`
            : theme.breakpoints[marginLeft.length - 1]
          : `${0}px`
      }) {
                  ${name}: ${
        typeof marginLeft[marginLeft.length - 1] === "number"
          ? `${marginLeft[marginLeft.length - 1]}px`
          : marginLeft[marginLeft.length - 1]
          ? marginLeft[marginLeft.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `margin-left: ${
        typeof marginLeft === "number"
          ? `${marginLeft}px`
          : marginLeft
          ? marginLeft
          : "0"
      };`;
    }
  }}
      ${({ marginRight }) => {
    if (typeof marginRight === "object") {
      const query = new Array<string>();
      const name = "margin-right";

      for (let i = 0; i < marginRight.length; i++) {
        query.push(`@media (min-width: ${
          theme.breakpoints[i - 1]
            ? typeof theme.breakpoints[i - 1] === "number"
              ? `${theme.breakpoints[i - 1]}px`
              : theme.breakpoints[i - 1]
            : `${0}px`
        }) and (max-width: ${
          typeof theme.breakpoints[i] === "number"
            ? `${theme.breakpoints[i]}px`
            : theme.breakpoints[i]
        }) {
                  ${name}: ${
          typeof marginRight[i] === "number"
            ? `${marginRight[i]}px`
            : marginRight[i]
            ? marginRight[i]
            : "auto"
        };
              }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[marginRight.length - 1]
          ? typeof theme.breakpoints[
              marginRight.length === 1 ? 0 : marginRight.length - 1
            ] === "number"
            ? `${
                theme.breakpoints[
                  marginRight.length === 1 ? 0 : marginRight.length - 1
                ]
              }px`
            : theme.breakpoints[marginRight.length - 1]
          : `${0}px`
      }) {
                  ${name}: ${
        typeof marginRight[marginRight.length - 1] === "number"
          ? `${marginRight[marginRight.length - 1]}px`
          : marginRight[marginRight.length - 1]
          ? marginRight[marginRight.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `margin-right: ${
        typeof marginRight === "number"
          ? `${marginRight}px`
          : marginRight
          ? marginRight
          : "0"
      };`;
    }
  }}
  text-transform: ${({ transform }) => transform || "unset"};
  transition: ${({ transition }) => transition || "none"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  pointer-events: ${({ disabled, pointerEvents }) =>
    disabled ? "none" : pointerEvents ? pointerEvents : "auto"};
  animation: ${({ animation }) => animation || "none"};
`;
