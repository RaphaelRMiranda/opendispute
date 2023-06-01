import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const UserIcon = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M37.5 50C51.3071 50 62.5 38.8071 62.5 25C62.5 11.1929 51.3071 0 37.5 0C23.6929 0 12.5 11.1929 12.5 25C12.5 38.8071 23.6929 50 37.5 50Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M37.5 58.3334C16.7988 58.3565 0.0230469 75.1322 0 95.8334C0 98.1346 1.86543 100 4.1666 100H70.8332C73.1344 100 74.9998 98.1346 74.9998 95.8334C74.977 75.1322 58.2012 58.3563 37.5 58.3334Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default UserIcon;
