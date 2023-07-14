import styled from "styled-components";
import { TStyledBox } from "./types";

import { theme } from "@/styles/theme";

export const StyledBox = styled.div<TStyledBox>`
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
  transform: ${({ transform }) => transform || "unset"};
  transition: ${({ transition }) => transition || ""};
  opacity: ${({ opacity }) => opacity || "1"};
  ${({ wid }) => {
    if (typeof wid === "object") {
      const query = new Array<string>();
      const name = "width";

      for (let i = 0; i < wid.length; i++) {
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
          typeof wid[i] === "number" ? `${wid[i]}px` : wid[i] ? wid[i] : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[wid.length - 1]
          ? typeof theme.breakpoints[wid.length - 1] === "number"
            ? `${theme.breakpoints[wid.length - 1]}px`
            : theme.breakpoints[wid.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof wid[wid.length - 1] === "number"
          ? `${wid[wid.length - 1]}px`
          : wid[wid.length - 1]
          ? wid[wid.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `width: ${
        typeof wid === "number" ? `${wid}px` : wid ? wid : "unset"
      };`;
    }
  }}
  ${({ minWid }) => {
    if (typeof minWid === "object") {
      const query = new Array<string>();
      const name = "min-width";

      for (let i = 0; i < minWid.length; i++) {
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
          typeof minWid[i] === "number"
            ? `${minWid[i]}px`
            : minWid[i]
            ? minWid[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[minWid.length - 1]
          ? typeof theme.breakpoints[minWid.length - 1] === "number"
            ? `${theme.breakpoints[minWid.length - 1]}px`
            : theme.breakpoints[minWid.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof minWid[minWid.length - 1] === "number"
          ? `${minWid[minWid.length - 1]}px`
          : minWid[minWid.length - 1]
          ? minWid[minWid.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `min-width: ${
        typeof minWid === "number" ? `${minWid}px` : minWid ? minWid : "unset"
      };`;
    }
  }}
  ${({ hei }) => {
    if (typeof hei === "object") {
      const query = new Array<string>();
      const name = "height";

      for (let i = 0; i < hei.length; i++) {
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
          typeof hei[i] === "number" ? `${hei[i]}px` : hei[i] ? hei[i] : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[hei.length - 1]
          ? typeof theme.breakpoints[hei.length - 1] === "number"
            ? `${theme.breakpoints[hei.length - 1]}px`
            : theme.breakpoints[hei.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof hei[hei.length - 1] === "number"
          ? `${hei[hei.length - 1]}px`
          : hei[hei.length - 1]
          ? hei[hei.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `height: ${
        typeof hei === "number" ? `${hei}px` : hei ? hei : "unset"
      };`;
    }
  }}
  ${({ maxWid }) => {
    if (typeof maxWid === "object") {
      const query = new Array<string>();
      const name = "max-width";

      for (let i = 0; i < maxWid.length; i++) {
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
          typeof maxWid[i] === "number"
            ? `${maxWid[i]}px`
            : maxWid[i]
            ? maxWid[i]
            : "auto"
        };
            }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[maxWid.length - 1]
          ? typeof theme.breakpoints[maxWid.length - 1] === "number"
            ? `${theme.breakpoints[maxWid.length - 1]}px`
            : theme.breakpoints[maxWid.length - 1]
          : `${0}px`
      }) {
                ${name}: ${
        typeof maxWid[maxWid.length - 1] === "number"
          ? `${maxWid[maxWid.length - 1]}px`
          : maxWid[maxWid.length - 1]
          ? maxWid[maxWid.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `max-width: ${
        typeof maxWid === "number" ? `${maxWid}px` : maxWid ? maxWid : "unset"
      };`;
    }
  }}
  ${({ minHei }) => {
    if (typeof minHei === "object") {
      const query = new Array<string>();
      const name = "min-height";

      for (let i = 0; i < minHei.length; i++) {
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
          typeof minHei[i] === "number"
            ? `${minHei[i]}px`
            : minHei[i]
            ? minHei[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[minHei.length - 1]
          ? typeof theme.breakpoints[minHei.length - 1] === "number"
            ? `${theme.breakpoints[minHei.length - 1]}px`
            : theme.breakpoints[minHei.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof minHei[minHei.length - 1] === "number"
          ? `${minHei[minHei.length - 1]}px`
          : minHei[minHei.length - 1]
          ? minHei[minHei.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `min-height: ${
        typeof minHei === "number" ? `${minHei}px` : minHei ? minHei : "unset"
      };`;
    }
  }}
  ${({ maxHei }) => {
    if (typeof maxHei === "object") {
      const query = new Array<string>();
      const name = "max-height";

      for (let i = 0; i < maxHei.length; i++) {
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
          typeof maxHei[i] === "number"
            ? `${maxHei[i]}px`
            : maxHei[i]
            ? maxHei[i]
            : "auto"
        };
            }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[maxHei.length - 1]
          ? typeof theme.breakpoints[maxHei.length - 1] === "number"
            ? `${theme.breakpoints[maxHei.length - 1]}px`
            : theme.breakpoints[maxHei.length - 1]
          : `${0}px`
      }) {
                ${name}: ${
        typeof maxHei[maxHei.length - 1] === "number"
          ? `${maxHei[maxHei.length - 1]}px`
          : maxHei[maxHei.length - 1]
          ? maxHei[maxHei.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `max-height: ${
        typeof maxHei === "number" ? `${maxHei}px` : maxHei ? maxHei : "unset"
      };`;
    }
  }}
  background-image: ${({
    linear,
    linearDeg,
    backgroundColors,
    backgroundImage,
  }) => {
    if (linear && backgroundColors) {
      return `linear-gradient(${linearDeg || 0}deg, ${
        backgroundColors[0].color
      } ${backgroundColors[0].percent || "100%"}, ${
        backgroundColors[1].color
      } ${backgroundColors[1].percent || "100%"})`;
    } else if (backgroundImage) {
      return `url(${backgroundImage})`;
    }
  }}}
  background-size: ${({ backgroundSize }) => backgroundSize || "cover"};
  background-position: ${({ backgroundPosition }) =>
    backgroundPosition || "center"};
  background-repeat: ${({ backgroundRepeat }) =>
    backgroundRepeat || "no-repeat"};
  ${({ backgroundColor, linear }) => {
    if (typeof backgroundColor === "object" && linear) {
      const query = new Array<string>();
      const name = "background-image";

      for (let i = 0; i < backgroundColor.length; i++) {
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
          typeof backgroundColor[i] === "number"
            ? `${backgroundColor[i]}px`
            : backgroundColor[i]
            ? backgroundColor[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[backgroundColor.length - 1]
          ? typeof theme.breakpoints[backgroundColor.length - 1] === "number"
            ? `${theme.breakpoints[backgroundColor.length - 1]}px`
            : theme.breakpoints[backgroundColor.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof backgroundColor[backgroundColor.length - 1] === "number"
          ? `${backgroundColor[backgroundColor.length - 1]}px`
          : backgroundColor[backgroundColor.length - 1]
          ? backgroundColor[backgroundColor.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else if (typeof backgroundColor === "object") {
      const query = new Array<string>();
      const name = "background-color";

      for (let i = 0; i < backgroundColor.length; i++) {
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
          typeof backgroundColor[i] === "number"
            ? `${backgroundColor[i]}px`
            : backgroundColor[i]
            ? backgroundColor[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[backgroundColor.length - 1]
          ? typeof theme.breakpoints[backgroundColor.length - 1] === "number"
            ? `${theme.breakpoints[backgroundColor.length - 1]}px`
            : theme.breakpoints[backgroundColor.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof backgroundColor[backgroundColor.length - 1] === "number"
          ? `${backgroundColor[backgroundColor.length - 1]}px`
          : backgroundColor[backgroundColor.length - 1]
          ? backgroundColor[backgroundColor.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `background-color: ${
        backgroundColor ? backgroundColor : "transparent"
      };`;
    }
  }}
  margin: ${({ margin }) =>
    margin && typeof margin === "string"
      ? margin
      : margin
      ? `${margin}px`
      : "0"};
    ${({ marginTop, margin }) => {
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
            : margin && typeof margin === "string"
            ? margin
            : margin
            ? `${margin}px`
            : "0"
        };`;
      }
    }}
    ${({ marginBottom, margin }) => {
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
            : margin && typeof margin === "string"
            ? margin
            : margin
            ? `${margin}px`
            : "0"
        };`;
      }
    }}
    ${({ marginLeft, margin }) => {
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
            : margin && typeof margin === "string"
            ? margin
            : margin
            ? `${margin}px`
            : "0"
        };`;
      }
    }}
    ${({ marginRight, margin }) => {
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
            : margin && typeof margin === "string"
            ? margin
            : margin
            ? `${margin}px`
            : "0"
        };`;
      }
    }}
  box-sizing: border-box;
    ${({ padding }) => {
      if (typeof padding === "object") {
        const query = new Array<string>();
        const name = "padding";

        for (let i = 0; i < padding.length; i++) {
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
            typeof padding[i] === "number"
              ? `${padding[i]}px`
              : padding[i]
              ? padding[i]
              : "auto"
          };
          }`);
        }

        query.push(`@media (min-width: ${
          theme.breakpoints[padding.length - 1]
            ? typeof theme.breakpoints[padding.length - 1] === "number"
              ? `${theme.breakpoints[padding.length - 1]}px`
              : theme.breakpoints[padding.length - 1]
            : `${0}px`
        }) {
              ${name}: ${
          typeof padding[padding.length - 1] === "number"
            ? `${padding[padding.length - 1]}px`
            : padding[padding.length - 1]
            ? padding[padding.length - 1]
            : "auto"
        }};`);

        return `& { ${query.join("")} }`;
      } else {
        return `padding: ${
          typeof padding === "number" ? `${padding}px` : padding ? padding : "0"
        };`;
      }
    }}
  padding-top: ${({ paddingTop, padding }) =>
    paddingTop
      ? typeof paddingTop === "string"
        ? paddingTop
        : `${paddingTop}px`
      : padding
      ? typeof padding === "string"
        ? padding
        : `${padding}px`
      : "0"};
  padding-bottom: ${({ paddingBottom, padding }) =>
    paddingBottom
      ? typeof paddingBottom === "string"
        ? paddingBottom
        : `${paddingBottom}px`
      : padding
      ? typeof padding === "string"
        ? padding
        : `${padding}px`
      : "0"};
  padding-left: ${({ paddingLeft, padding }) =>
    paddingLeft
      ? typeof paddingLeft === "string"
        ? paddingLeft
        : `${paddingLeft}px`
      : padding
      ? typeof padding === "string"
        ? padding
        : `${padding}px`
      : "0"};
  padding-right: ${({ paddingRight, padding }) =>
    paddingRight
      ? typeof paddingRight === "string"
        ? paddingRight
        : `${paddingRight}px`
      : padding
      ? typeof padding === "string"
        ? padding
        : `${padding}px`
      : "0"};
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
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  ${({ flexWrap }) => {
    if (typeof flexWrap === "object") {
      const query = new Array<string>();
      const name = "flex-wrap";

      for (let i = 0; i < flexWrap.length; i++) {
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
          typeof flexWrap[i] === "number"
            ? `${flexWrap[i]}px`
            : flexWrap[i]
            ? flexWrap[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[flexWrap.length - 1]
          ? typeof theme.breakpoints[flexWrap.length - 1] === "number"
            ? `${theme.breakpoints[flexWrap.length - 1]}px`
            : theme.breakpoints[flexWrap.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof flexWrap[flexWrap.length - 1] === "number"
          ? `${flexWrap[flexWrap.length - 1]}px`
          : flexWrap[flexWrap.length - 1]
          ? flexWrap[flexWrap.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `flex-wrap: ${flexWrap ? flexWrap : "nowrap"};`;
    }
  }}
  ${({ justifyContent }) => {
    if (typeof justifyContent === "object") {
      const query = new Array<string>();
      const name = "justify-content";

      for (let i = 0; i < justifyContent.length; i++) {
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
          typeof justifyContent[i] === "number"
            ? `${justifyContent[i]}px`
            : justifyContent[i]
            ? justifyContent[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[justifyContent.length - 1]
          ? typeof theme.breakpoints[justifyContent.length - 1] === "number"
            ? `${theme.breakpoints[justifyContent.length - 1]}px`
            : theme.breakpoints[justifyContent.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof justifyContent[justifyContent.length - 1] === "number"
          ? `${justifyContent[justifyContent.length - 1]}px`
          : justifyContent[justifyContent.length - 1]
          ? justifyContent[justifyContent.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `justify-content: ${
        justifyContent ? justifyContent : "flex-start"
      };`;
    }
  }}
  ${({ alignItems }) => {
    if (typeof alignItems === "object") {
      const query = new Array<string>();
      const name = "align-items";

      for (let i = 0; i < alignItems.length; i++) {
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
          typeof alignItems[i] === "number"
            ? `${alignItems[i]}px`
            : alignItems[i]
            ? alignItems[i]
            : "center"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[alignItems.length - 1]
          ? typeof theme.breakpoints[alignItems.length - 1] === "number"
            ? `${theme.breakpoints[alignItems.length - 1]}px`
            : theme.breakpoints[alignItems.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof alignItems[alignItems.length - 1] === "number"
          ? `${alignItems[alignItems.length - 1]}px`
          : alignItems[alignItems.length - 1]
          ? alignItems[alignItems.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `align-items: ${
        typeof alignItems === "number"
          ? `${alignItems}px`
          : alignItems
          ? alignItems
          : "center"
      };`;
    }
  }}
  ${({ gap }) => {
    if (typeof gap === "object") {
      const query = new Array<string>();
      const name = "gap";

      for (let i = 0; i < gap.length; i++) {
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
          typeof gap[i] === "number" ? `${gap[i]}px` : gap[i] ? gap[i] : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[gap.length - 1]
          ? typeof theme.breakpoints[gap.length - 1] === "number"
            ? `${theme.breakpoints[gap.length - 1]}px`
            : theme.breakpoints[gap.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof gap[gap.length - 1] === "number"
          ? `${gap[gap.length - 1]}px`
          : gap[gap.length - 1]
          ? gap[gap.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `gap: ${typeof gap === "number" ? `${gap}px` : gap ? gap : "0"};`;
    }
  }}
  ${({ flexDirection }) => {
    if (typeof flexDirection === "object") {
      const query = new Array<string>();
      const name = "flex-direction";

      for (let i = 0; i < flexDirection.length; i++) {
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
          typeof flexDirection[i] === "number"
            ? `${flexDirection[i]}px`
            : flexDirection[i]
            ? flexDirection[i]
            : "auto"
        };
        }`);
      }

      query.push(`@media (min-width: ${
        theme.breakpoints[flexDirection.length - 1]
          ? typeof theme.breakpoints[flexDirection.length - 1] === "number"
            ? `${theme.breakpoints[flexDirection.length - 1]}px`
            : theme.breakpoints[flexDirection.length - 1]
          : `${0}px`
      }) {
            ${name}: ${
        typeof flexDirection[flexDirection.length - 1] === "number"
          ? `${flexDirection[flexDirection.length - 1]}px`
          : flexDirection[flexDirection.length - 1]
          ? flexDirection[flexDirection.length - 1]
          : "auto"
      }};`);

      return `& { ${query.join("")} }`;
    } else {
      return `flex-direction: ${flexDirection ? flexDirection : "row"};`;
    }
  }}
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  border: ${({ border, borderStyle, borderWidth, borderColor }) =>
    border
      ? typeof border === "string"
        ? border
        : `${borderWidth || 1}px ${borderStyle || "solid"} ${
            borderColor || "white"
          }`
      : "none"};
  border-top: ${({ borderTop, border }) =>
    borderTop
      ? borderTop
      : border && typeof border === "string"
      ? border
      : "none"};
  border-bottom: ${({ borderBottom, border }) =>
    borderBottom
      ? borderBottom
      : border && typeof border === "string"
      ? border
      : "none"};
  border-left: ${({ borderLeft, border }) =>
    borderLeft
      ? borderLeft
      : border && typeof border === "string"
      ? border
      : "none"};
  border-right: ${({ borderRight, border }) =>
    borderRight
      ? borderRight
      : border && typeof border === "string"
      ? border
      : "none"};

      ${({ borderRadius }) => {
        if (typeof borderRadius === "object") {
          const query = new Array<string>();
          const name = "border-radius";

          for (let i = 0; i < borderRadius.length; i++) {
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
              typeof borderRadius[i] === "number"
                ? `${borderRadius[i]}px`
                : borderRadius[i]
                ? borderRadius[i]
                : "auto"
            };
            }`);
          }

          query.push(`@media (min-width: ${
            theme.breakpoints[borderRadius.length - 1]
              ? typeof theme.breakpoints[borderRadius.length - 1] === "number"
                ? `${theme.breakpoints[borderRadius.length - 1]}px`
                : theme.breakpoints[borderRadius.length - 1]
              : `${0}px`
          }) {
                ${name}: ${
            typeof borderRadius[borderRadius.length - 1] === "number"
              ? `${borderRadius[borderRadius.length - 1]}px`
              : borderRadius[borderRadius.length - 1]
              ? borderRadius[borderRadius.length - 1]
              : "auto"
          }};`);

          return `& { ${query.join("")} }`;
        } else {
          return `border-radius: ${
            borderRadius
              ? typeof borderRadius === "number"
                ? `${borderRadius}px`
                : borderRadius
              : "0px"
          };`;
        }
      }}
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ overflowY }) => overflowY && `overflow-y: ${overflowY};`}
  ${({ overflowX }) => overflowX && `overflow-x: ${overflowX};`}
  white-space: ${({ whiteSpace }) => whiteSpace || "unset"};
  z-index: ${({ zIndex }) => zIndex || "unset"};
  animation: ${({ animation }) => animation || "none"};
  pointer-events: ${({ pointerEvents }) => pointerEvents || "auto"};
  filter: ${({ blur }) => (blur ? `blur(2px)` : `none`)};

  &:hover {
    ${({ hover }) => hover && hover};
  }
  }
`;
