import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Dots = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M50 16.6668C54.6024 16.6668 58.3334 12.9358 58.3334 8.3334C58.3334 3.73099 54.6024 0 50 0C45.3976 0 41.6666 3.73099 41.6666 8.3334C41.6666 12.9358 45.3976 16.6668 50 16.6668Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M50 58.3334C54.6024 58.3334 58.3334 54.6024 58.3334 50C58.3334 45.3976 54.6024 41.6666 50 41.6666C45.3976 41.6666 41.6666 45.3976 41.6666 50C41.6666 54.6024 45.3976 58.3334 50 58.3334Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M50 100C54.6024 100 58.3334 96.269 58.3334 91.6666C58.3334 87.0642 54.6024 83.3332 50 83.3332C45.3976 83.3332 41.6666 87.0642 41.6666 91.6666C41.6666 96.269 45.3976 100 50 100Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default Dots;
