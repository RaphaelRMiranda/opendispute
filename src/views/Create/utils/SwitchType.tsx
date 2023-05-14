import { UseFormRegister, FieldValues } from "react-hook-form";

import ChargeOffTemplate from "../Disputes/templates/ChargeOff";

const SwitchTemplate = (
  index: number,
  type: string,
  id: string,
  register: UseFormRegister<FieldValues>
) => {
  switch (type) {
    case "Charge-offs":
      return (
        <ChargeOffTemplate index={index} disputeId={id} register={register} />
      );
    default:
      return (
        <ChargeOffTemplate index={index} disputeId={id} register={register} />
      );
  }
};

export default SwitchTemplate;
