import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Edit = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M4.90091 79.5893C1.76384 82.7254 0.000947354 86.9792 0 91.415L0 99.9999H8.58495C13.0208 99.999 17.2746 98.2361 20.4107 95.099L76.2066 39.3031L60.6968 23.7933L4.90091 79.5893Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M96.7846 3.21542C95.7663 2.19607 94.5571 1.38743 93.2261 0.835703C91.8951 0.283979 90.4685 0 89.0276 0C87.5868 0 86.1601 0.283979 84.8291 0.835703C83.4981 1.38743 82.2889 2.19607 81.2706 3.21542L66.6097 17.8805L82.1195 33.3903L96.7846 18.7294C97.804 17.7111 98.6126 16.5019 99.1643 15.1709C99.716 13.8399 100 12.4132 100 10.9724C100 9.53158 99.716 8.10489 99.1643 6.7739C98.6126 5.4429 97.804 4.2337 96.7846 3.21542Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default Edit;
