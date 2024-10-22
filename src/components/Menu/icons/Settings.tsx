import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Settings = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <path
      d="M2.14267 24C3.24555 25.9141 5.69136 26.5718 7.60548 25.4689C7.6068 25.4681 7.60805 25.4674 7.60936 25.4666L8.20267 25.1239C9.32267 26.0822 10.61 26.8253 12 27.3159V28C12 30.2091 13.7909 32 16 32C18.2091 32 20 30.2091 20 28V27.316C21.3901 26.8246 22.6775 26.0806 23.7973 25.1213L24.3933 25.4653C26.3079 26.5699 28.7554 25.9132 29.86 23.9986C30.9645 22.0841 30.3079 19.6365 28.3933 18.5319L27.8013 18.1906C28.0678 16.7406 28.0678 15.2541 27.8013 13.8039L28.3933 13.4626C30.3079 12.3581 30.9645 9.91056 29.86 7.99594C28.7554 6.08137 26.3079 5.42469 24.3933 6.52925L23.8 6.87194C22.6789 5.91487 21.3906 5.17313 20 4.684V4C20 1.79087 18.2091 0 16 0C13.7909 0 12 1.79087 12 4V4.684C10.6099 5.17544 9.32242 5.91944 8.20267 6.87869L7.60667 6.53337C5.69205 5.42875 3.24455 6.08544 2.13998 8C1.03542 9.91456 1.69205 12.3621 3.60667 13.4667L4.19867 13.808C3.93217 15.2581 3.93217 16.7446 4.19867 18.1947L3.60667 18.536C1.69736 19.6435 1.04286 22.0862 2.14267 24ZM16 10.6667C18.9455 10.6667 21.3333 13.0545 21.3333 16C21.3333 18.9455 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9455 10.6667 16C10.6667 13.0545 13.0545 10.6667 16 10.6667Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default Settings;
