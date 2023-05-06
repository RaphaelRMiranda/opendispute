import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const List = ({ size, maxSize, color, margin }: TRegularIcon) => (
  <svg
    width={size ? (typeof size === "string" ? size : `${size}px`) : 24}
    style={{
      margin: margin
        ? typeof margin === "string"
          ? margin
          : `${margin}px`
        : 0,
      maxWidth: maxSize
        ? typeof maxSize === "string"
          ? maxSize
          : `${maxSize}px`
        : "100%",
    }}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6666 0H29.1666C38.3713 0 45.8332 7.46191 45.8332 16.6666V29.1666C45.8332 38.3713 38.3713 45.8332 29.1666 45.8332H16.6666C7.46191 45.8334 0 38.3715 0 29.1666V16.6666C0 7.46191 7.46191 0 16.6666 0Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M70.8333 0H83.3333C92.538 0 99.9999 7.46191 99.9999 16.6666V29.1666C99.9999 38.3713 92.538 45.8332 83.3333 45.8332H70.8333C61.6287 45.8332 54.1667 38.3713 54.1667 29.1666V16.6666C54.1666 7.46191 61.6285 0 70.8333 0Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M16.6666 54.1666H29.1666C38.3713 54.1666 45.8332 61.6285 45.8332 70.8332V83.3332C45.8332 92.5379 38.3713 99.9998 29.1666 99.9998H16.6666C7.46191 100 0 92.5381 0 83.3334V70.8334C0 61.6285 7.46191 54.1666 16.6666 54.1666Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M70.8333 54.1666H83.3333C92.538 54.1666 99.9999 61.6285 99.9999 70.8332V83.3332C99.9999 92.5381 92.538 100 83.3333 100H70.8333C61.6287 100 54.1667 92.5381 54.1667 83.3334V70.8334C54.1666 61.6285 61.6285 54.1666 70.8333 54.1666Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default List;
