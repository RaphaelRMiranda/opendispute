import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Check = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_19_14)">
      <path
        d="M32.2883 86.0944C29.4497 86.0956 26.7274 84.9673 24.7219 82.9585L1.84609 60.0912C-0.615362 57.6289 -0.615362 53.6376 1.84609 51.1754C4.30832 48.7139 8.29961 48.7139 10.7618 51.1754L32.2883 72.7018L89.2382 15.752C91.7004 13.2905 95.6917 13.2905 98.1539 15.752C100.615 18.2142 100.615 22.2055 98.1539 24.6677L39.8547 82.9585C37.8492 84.9673 35.1269 86.0956 32.2883 86.0944Z"
        fill={color || theme.colors.base.secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_19_14">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Check;
