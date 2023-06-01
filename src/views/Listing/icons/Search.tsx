import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Search = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_57_5)">
      <path
        d="M41.6936 83.3736C51.3097 83.3861 60.6318 80.0591 68.0671 73.9612L92.9359 98.8257C94.5919 100.425 97.2307 100.379 98.83 98.7231C100.39 97.1078 100.39 94.547 98.83 92.9315L73.9655 68.0631C88.5312 50.2353 85.8867 23.9751 68.0589 9.40944C50.2312 -5.15622 23.971 -2.51176 9.4053 15.316C-5.16036 33.1438 -2.51589 59.4038 15.3119 73.9696C22.758 80.0532 32.0783 83.3755 41.6936 83.3736Z"
        fill={color || theme.colors.base.secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_57_5">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Search;
