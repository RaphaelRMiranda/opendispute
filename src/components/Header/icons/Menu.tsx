import { theme } from "@/styles/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
  type?: "outline" | "half" | "solid";
};

const Menu = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_62_7)">
      <path
        d="M4.16667 25H95.8333C96.9384 25 97.9982 24.561 98.7796 23.7796C99.561 22.9982 100 21.9384 100 20.8333C100 19.7282 99.561 18.6684 98.7796 17.887C97.9982 17.1056 96.9384 16.6666 95.8333 16.6666H4.16667C3.0616 16.6666 2.00179 17.1056 1.22039 17.887C0.438987 18.6684 0 19.7282 0 20.8333C0 21.9384 0.438987 22.9982 1.22039 23.7796C2.00179 24.561 3.0616 25 4.16667 25Z"
        fill={color || theme.colors.base.secondary}
      />
      <path
        d="M4.16667 45.8333H62.5C63.6051 45.8333 64.6649 45.3943 65.4463 44.6129C66.2277 43.8315 66.6667 42.7717 66.6667 41.6667C66.6667 40.5616 66.2277 39.5018 65.4463 38.7204C64.6649 37.939 63.6051 37.5 62.5 37.5H4.16667C3.0616 37.5 2.00179 37.939 1.22039 38.7204C0.438987 39.5018 0 40.5616 0 41.6667C0 42.7717 0.438987 43.8315 1.22039 44.6129C2.00179 45.3943 3.0616 45.8333 4.16667 45.8333Z"
        fill={color || theme.colors.base.secondary}
      />
      <path
        d="M62.5 79.1666H4.16667C3.0616 79.1666 2.00179 79.6056 1.22039 80.387C0.438987 81.1684 0 82.2282 0 83.3333C0 84.4384 0.438987 85.4982 1.22039 86.2796C2.00179 87.061 3.0616 87.5 4.16667 87.5H62.5C63.6051 87.5 64.6649 87.061 65.4463 86.2796C66.2277 85.4982 66.6667 84.4384 66.6667 83.3333C66.6667 82.2282 66.2277 81.1684 65.4463 80.387C64.6649 79.6056 63.6051 79.1666 62.5 79.1666Z"
        fill={color || theme.colors.base.secondary}
      />
      <path
        d="M95.8333 58.3334H4.16667C3.0616 58.3334 2.00179 58.7724 1.22039 59.5538C0.438987 60.3352 0 61.395 0 62.5C0 63.6051 0.438987 64.6649 1.22039 65.4463C2.00179 66.2277 3.0616 66.6667 4.16667 66.6667H95.8333C96.9384 66.6667 97.9982 66.2277 98.7796 65.4463C99.561 64.6649 100 63.6051 100 62.5C100 61.395 99.561 60.3352 98.7796 59.5538C97.9982 58.7724 96.9384 58.3334 95.8333 58.3334Z"
        fill={color || theme.colors.base.secondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_62_7">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Menu;
