const DateMask = (value: string | undefined): string => {
  if (value?.match(/[a-zA-Z]/g)) return "";

  const digits = value?.replace(/\D/g, "");
  if (digits && digits.length > 0)
    return digits
      ?.replace(/^(\d{2})/, "$1/")
      ?.replace(/\/(\d{2})/, "/$1/")
      ?.replace(/\/(\d{4})$/, "/$1");

  return "";
};

export default DateMask;
