import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const ArrowTurnUpRight = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_16_8)">
      <path
        d="M96.375 46.2917L73.8333 69.5834C72.25 71.25 69.5833 71.2917 67.9583 69.6667C66.2917 68.0834 66.25 65.4167 67.875 63.7917L89.2917 41.7084H20.8333C13.9583 41.7084 8.33333 47.3334 8.33333 54.2084V87.5C8.33333 89.7917 6.45833 91.6667 4.16667 91.6667C1.875 91.6667 0 89.7917 0 87.5V54.1667C0 42.6667 9.33333 33.3333 20.8333 33.3333H89.25L67.8333 11.25C66.25 9.58335 66.2917 6.95835 67.9167 5.37502C68.7083 4.58335 69.75 4.20835 70.8333 4.20835C71.9167 4.20835 73 4.62501 73.8333 5.45834L96.3333 28.7083C101.208 33.5833 101.208 41.5 96.375 46.3333V46.2917Z"
        fill={color || theme.colors.base.secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_16_8">
        <rect
          width="100"
          height="100"
          fill="white"
          transform="matrix(1 0 0 -1 0 100)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowTurnUpRight;
