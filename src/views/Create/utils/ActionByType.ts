import { DefaultPerTypeProps } from "@/context/Settings/types";

const ActionByType = (
  actions: DefaultPerTypeProps,
  type: string
) => {
  return actions[type];
};

export default ActionByType;
