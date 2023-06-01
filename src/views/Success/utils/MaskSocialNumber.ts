const MaskSocialNumber = (socialNumber?: string) => {
  if (socialNumber) {
    const masked = socialNumber.replace(/.(?=.{4})/g, "*");
    return masked;
  }

  return "";
};

export default MaskSocialNumber;
