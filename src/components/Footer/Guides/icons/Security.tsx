import { theme } from "@/global/theme";

type TRegularIcon = {
  size: number | string;
  maxSize?: number | string;
  color?: string;
  margin?: number | string;
};

const Security = ({ size, maxSize, color, margin }: TRegularIcon) => (
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
    <g clipPath="url(#clip0_12_628)">
      <path
        d="M15.9306 32.012L15.4586 31.8027C14.9333 31.572 2.66663 26.032 2.66663 16V7.30136C2.66709 6.46425 2.93167 5.64863 3.42268 4.97065C3.91369 4.29267 4.60609 3.7869 5.40129 3.52536L16 0.0120239L26.5986 3.52536C27.3938 3.7869 28.0862 4.29267 28.5772 4.97065C29.0682 5.64863 29.3328 6.46425 29.3333 7.30136V16C29.3333 27.436 16.9493 31.6734 16.4213 31.8494L15.9306 32.012ZM16 2.80802L6.24529 6.04269C5.97989 6.12938 5.74872 6.29783 5.5849 6.52392C5.42108 6.75002 5.333 7.02215 5.33329 7.30136V16C5.33329 23.3254 13.92 28.0774 16.0626 29.148C18.2013 28.288 26.6666 24.3507 26.6666 16V7.30136C26.6669 7.02215 26.5788 6.75002 26.415 6.52392C26.2512 6.29783 26.02 6.12938 25.7546 6.04269L16 2.80802Z"
        fill={color || theme.colors.base.black}
      />
      <path
        d="M14.8146 19.3893H14.7706C14.4331 19.3842 14.1002 19.3106 13.7919 19.1731C13.4837 19.0356 13.2066 18.837 12.9773 18.5893L9.90259 15.3893L11.8239 13.5467L14.8159 16.6667L21.7239 9.75867L23.6093 11.644L16.5946 18.6587C16.3609 18.8921 16.0833 19.0769 15.7778 19.2023C15.4722 19.3277 15.1449 19.3913 14.8146 19.3893Z"
        fill={color || theme.colors.base.black}
      />
    </g>
    <defs>
      <clipPath id="clip0_12_628">
        <rect width="32" height="32" fill="none" />
      </clipPath>
    </defs>
  </svg>
);

export default Security;
