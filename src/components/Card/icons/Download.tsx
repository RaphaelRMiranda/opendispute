import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Download = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
      d="M41.1584 75.5084C46.0385 80.3916 53.9529 80.3941 58.8361 75.5141C58.8381 75.5121 58.8398 75.5104 58.8418 75.5084L72.2209 62.1293C73.7642 60.4225 73.6316 57.7875 71.9248 56.2441C70.3355 54.8072 67.9156 54.8098 66.3293 56.25L54.1377 68.4459L54.1668 4.1668C54.1666 1.86543 52.3012 0 50 0C47.6988 0 45.8334 1.86543 45.8334 4.1666L45.7959 68.3666L33.6709 56.25C32.0428 54.623 29.4041 54.624 27.7771 56.2521C26.1502 57.8803 26.1512 60.5189 27.7793 62.1459L41.1584 75.5084Z"
      fill={color || theme.colors.base.secondary}
    />
    <path
      d="M95.8334 66.6666C93.5322 66.6666 91.6668 68.5321 91.6668 70.8332V87.5C91.6668 89.8012 89.8014 91.6666 87.5002 91.6666H12.5C10.1988 91.6666 8.3334 89.8012 8.3334 87.5V70.8334C8.3334 68.5322 6.46797 66.6668 4.1668 66.6668C1.86543 66.6666 0 68.5322 0 70.8334V87.5C0 94.4035 5.59648 100 12.5 100H87.5C94.4035 100 100 94.4035 100 87.5V70.8334C100 68.5322 98.1346 66.6666 95.8334 66.6666Z"
      fill={color || theme.colors.base.secondary}
    />
  </svg>
);

export default Download;
