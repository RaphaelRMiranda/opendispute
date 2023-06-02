const DolarMask = (value: string): string => {
  const digits = value.replace(/\D/g, "");

  if (digits && digits.length > 0) {
    const number = parseInt(digits, 10) / 100;
    const formattedValue = number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    return formattedValue;
  }

  return "";
};

export default DolarMask;
