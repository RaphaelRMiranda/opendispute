import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const AddUser = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M95.8333 45.8334H87.4999V37.5C87.4999 35.1988 85.6345 33.3334 83.3333 33.3334C81.0322 33.3334 79.1667 35.1988 79.1667 37.5V45.8334H70.8333C68.5322 45.8334 66.6667 47.6988 66.6667 50C66.6667 52.3012 68.5322 54.1666 70.8333 54.1666H79.1667V62.5C79.1667 64.8012 81.0322 66.6666 83.3333 66.6666C85.6345 66.6666 87.4999 64.8012 87.4999 62.5V54.1666H95.8333C98.1345 54.1666 99.9999 52.3012 99.9999 50C99.9999 47.6988 98.1345 45.8334 95.8333 45.8334Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M37.5 50C51.3071 50 62.5 38.8071 62.5 25C62.5 11.1929 51.3071 0 37.5 0C23.6929 0 12.5 11.1929 12.5 25C12.5 38.8071 23.6929 50 37.5 50Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M37.5 58.3334C16.7988 58.3565 0.0230469 75.1322 0 95.8334C0 98.1346 1.86543 100 4.1666 100H70.8332C73.1344 100 74.9998 98.1346 74.9998 95.8334C74.977 75.1322 58.2012 58.3563 37.5 58.3334Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default AddUser;
