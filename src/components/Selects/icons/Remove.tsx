import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Remove = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_29_13)">
      <path
        d="M50 0C22.4292 0 0 22.4292 0 50C0 77.5708 22.4292 100 50 100C77.5708 100 100 77.5708 100 50C100 22.4292 77.5708 0 50 0ZM65.4458 59.5542C67.075 61.1833 67.075 63.8167 65.4458 65.4458C64.6333 66.2583 63.5667 66.6667 62.5 66.6667C61.4333 66.6667 60.3667 66.2583 59.5542 65.4458L50 55.8917L40.4458 65.4458C39.6333 66.2583 38.5667 66.6667 37.5 66.6667C36.4333 66.6667 35.3667 66.2583 34.5542 65.4458C32.925 63.8167 32.925 61.1833 34.5542 59.5542L44.1083 50L34.5542 40.4458C32.925 38.8167 32.925 36.1833 34.5542 34.5542C36.1833 32.925 38.8167 32.925 40.4458 34.5542L50 44.1083L59.5542 34.5542C61.1833 32.925 63.8167 32.925 65.4458 34.5542C67.075 36.1833 67.075 38.8167 65.4458 40.4458L55.8917 50L65.4458 59.5542Z"
        fill={color || theme.colors.base.secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_29_13">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Remove;
