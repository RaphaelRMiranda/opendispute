import { theme } from "@/global/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
};

const Card = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_12_594)">
      <path
        d="M7.33337 22.6667C8.43794 22.6667 9.33337 21.7713 9.33337 20.6667C9.33337 19.5621 8.43794 18.6667 7.33337 18.6667C6.2288 18.6667 5.33337 19.5621 5.33337 20.6667C5.33337 21.7713 6.2288 22.6667 7.33337 22.6667Z"
        fill={color || theme.colors.base.black}
      />
      <path
        d="M25.3333 4H6.66667C4.89921 4.00212 3.20474 4.70518 1.95496 5.95496C0.705176 7.20474 0.00211714 8.89921 0 10.6667L0 21.3333C0.00211714 23.1008 0.705176 24.7953 1.95496 26.045C3.20474 27.2948 4.89921 27.9979 6.66667 28H25.3333C27.1008 27.9979 28.7953 27.2948 30.045 26.045C31.2948 24.7953 31.9979 23.1008 32 21.3333V10.6667C31.9979 8.89921 31.2948 7.20474 30.045 5.95496C28.7953 4.70518 27.1008 4.00212 25.3333 4ZM6.66667 6.66667H25.3333C26.3942 6.66667 27.4116 7.08809 28.1618 7.83824C28.9119 8.58839 29.3333 9.6058 29.3333 10.6667H2.66667C2.66667 9.6058 3.08809 8.58839 3.83824 7.83824C4.58839 7.08809 5.6058 6.66667 6.66667 6.66667ZM25.3333 25.3333H6.66667C5.6058 25.3333 4.58839 24.9119 3.83824 24.1618C3.08809 23.4116 2.66667 22.3942 2.66667 21.3333V13.3333H29.3333V21.3333C29.3333 22.3942 28.9119 23.4116 28.1618 24.1618C27.4116 24.9119 26.3942 25.3333 25.3333 25.3333Z"
        fill={color || theme.colors.base.black}
      />
    </g>
    <defs>
      <clipPath id="clip0_12_594">
        <rect width="32" height="32" fill="none" />
      </clipPath>
    </defs>
  </svg>
);

export default Card;
