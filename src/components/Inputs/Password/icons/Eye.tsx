import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Eye = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M50 66.6604C59.2013 66.6604 66.6604 59.2013 66.6604 50C66.6604 40.7987 59.2013 33.3396 50 33.3396C40.7987 33.3396 33.3396 40.7987 33.3396 50C33.3396 59.2013 40.7987 66.6604 50 66.6604Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M96.9451 39.2498C90.485 28.7288 75.7905 11.0769 50 11.0769C24.2096 11.0769 9.51505 28.7288 3.05495 39.2498C-1.01815 45.8378 -1.01815 54.1621 3.05495 60.7503C9.51505 71.2714 24.2096 88.9232 50 88.9232C75.7905 88.9232 90.485 71.2714 96.9451 60.7503C101.018 54.1621 101.018 45.8378 96.9451 39.2498ZM50 74.9907C36.1981 74.9907 25.0093 63.8019 25.0093 50C25.0093 36.198 36.1981 25.0092 50 25.0092C63.8019 25.0092 74.9908 36.198 74.9908 50C74.9769 63.7962 63.7963 74.9768 50 74.9907Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default Eye;
