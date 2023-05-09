import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const ArrowDown = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M79.4208 32.725C78.8404 32.1442 78.1513 31.6835 77.3927 31.3691C76.6342 31.0548 75.8211 30.893 75 30.893C74.1789 30.893 73.3659 31.0548 72.6073 31.3691C71.8488 31.6835 71.1596 32.1442 70.5792 32.725L51.4708 51.8292C51.0802 52.2197 50.5504 52.4391 49.9979 52.4391C49.4455 52.4391 48.9157 52.2197 48.525 51.8292L29.4208 32.725C28.2489 31.5525 26.6592 30.8936 25.0015 30.8932C23.3437 30.8928 21.7537 31.551 20.5813 32.7229C19.4088 33.8948 18.7499 35.4845 18.7495 37.1423C18.7491 38.8 19.4073 40.39 20.5792 41.5625L39.6875 60.6708C41.0417 62.0252 42.6494 63.0995 44.4189 63.8325C46.1883 64.5655 48.0848 64.9427 50 64.9427C51.9152 64.9427 53.8117 64.5655 55.5812 63.8325C57.3506 63.0995 58.9583 62.0252 60.3125 60.6708L79.4208 41.5625C80.5925 40.3905 81.2508 38.801 81.2508 37.1438C81.2508 35.4865 80.5925 33.8971 79.4208 32.725Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default ArrowDown;
