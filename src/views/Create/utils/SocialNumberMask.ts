const SocialNumberMask = (value: string | undefined): string => {
  const digits = value?.replace(/\D/g, "");
  if (digits && digits.length > 0)
    return digits
      ?.replace(/^(\d{3})/, "$1-")
      ?.replace(/-(\d{2})/, "-$1-")
      ?.replace(/-(\d{4})$/, "-$1");

  return "";
};

export default SocialNumberMask;
