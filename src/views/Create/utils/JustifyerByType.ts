import { DefaultPerTypeProps } from "@/context/Settings/types";

const JustifyerByType = (justifyer: DefaultPerTypeProps, type: string) => {
  return justifyer[type];
};

export default JustifyerByType;
