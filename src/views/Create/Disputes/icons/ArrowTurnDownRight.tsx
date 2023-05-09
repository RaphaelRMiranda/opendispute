import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const ArrowTurnDownRight = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_16_6)">
      <path
        d="M96.375 53.7083L73.8333 30.4166C72.25 28.75 69.5833 28.7083 67.9583 30.3333C66.2917 31.9166 66.25 34.5833 67.875 36.2083L89.2917 58.2916H20.8333C13.9583 58.2916 8.33333 52.6666 8.33333 45.7916V12.5C8.33333 10.2083 6.45833 8.33331 4.16667 8.33331C1.875 8.33331 0 10.2083 0 12.5V45.8333C0 57.3333 9.33333 66.6667 20.8333 66.6667H89.25L67.8333 88.75C66.25 90.4166 66.2917 93.0416 67.9167 94.625C68.7083 95.4166 69.75 95.7917 70.8333 95.7917C71.9167 95.7917 73 95.375 73.8333 94.5417L96.3333 71.2917C101.208 66.4167 101.208 58.5 96.375 53.6667V53.7083Z"
        fill={color || theme.colors.base.secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_16_6">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowTurnDownRight;
