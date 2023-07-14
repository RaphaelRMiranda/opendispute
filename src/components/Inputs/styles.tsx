import { theme } from "@/styles/theme";
import styled from "styled-components";

type TInput = {
  padding?: number | string | Array<number | string>;
  fontSize?: number | string;
};

export const Input = styled.input<TInput>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.gray[300]};
  border: none;
  border-radius: 6px;
  font-size: ${({ theme, fontSize }) => fontSize || theme.fonts.sizes.md};
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
        typeof padding === "number"
          ? `${padding}px`
          : padding
          ? padding
          : "12px"
      };`;
    }
  }}
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.base.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.gray[400]};
  }
`;
