import Box from "@/components/Box";
import Radio from "@/components/Inputs/Radio";
import InputText from "@/components/Inputs/Text";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import ArrowTurnUpRight from "../icons/ArrowTurnUpRight";
import { Button } from "@/components/Buttons";
import ArrowTurnDownRight from "../icons/ArrowTurnDownRight";
import { useState } from "react";
import Copy from "../icons/Copy";
import { TDisputeTemplate } from "./types";
import { useDocument } from "@/context/Document";

const ChargeOffTemplate = ({
  index,
  disputeId,
  register,
}: TDisputeTemplate) => {
  const { editDispute, duplicateDispute, removeDispute } = useDocument();

  const [bureau, setBureau] = useState<string>("");

  const handleBureau = (bureau: string) => {
    setBureau(bureau);
    if (bureau === "equifax")
      editDispute(disputeId, {
        equifax: true,
        experian: false,
        transunion: false,
      });
    if (bureau === "experian")
      editDispute(disputeId, {
        experian: true,
        equifax: false,
        transunion: false,
      });
    if (bureau === "transunion")
      editDispute(disputeId, {
        transunion: true,
        equifax: false,
        experian: false,
      });
  };

  const [reverse, setReverse] = useState<boolean>(false);

  return (
    <Box
      wid="100%"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box wid="100%" justifyContent="space-between">
        <Box wid="50%" flexDirection="column" alignItems="flex-start">
          <Box display="none">
            <InputText
              reg={register(`dispute[${index}].type`)}
              value={"Charge-offs"}
            />
          </Box>
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.secondary}
            weight={500}
          >
            Charge-offs
          </Text>
          <Text
            fontSize={theme.fonts.sizes.xs}
            color={theme.colors.base.gray[300]}
            weight={500}
          >
            ID: {disputeId}
          </Text>
        </Box>
        <Box hover="cursor:pointer;" onClick={() => removeDispute(disputeId)}>
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.red[200]}
            weight={500}
            pointerEvents="none"
          >
            Delete
          </Text>
        </Box>
      </Box>
      <Box wid="30%" marginTop={10} justifyContent="space-between">
        <Radio
          label="Equifax"
          onChange={() => handleBureau("equifax")}
          checked={bureau === "equifax"}
          marginRight={10}
          reg={register(`dispute[${index}].equifax`)}
        />
        <Radio
          label="Experian"
          onChange={() => handleBureau("experian")}
          checked={bureau === "experian"}
          marginRight={10}
          reg={register(`dispute[${index}].experian`)}
        />
        <Radio
          label="TransUnion"
          onChange={() => handleBureau("transunion")}
          checked={bureau === "transunion"}
          marginRight={10}
          reg={register(`dispute[${index}].transunion`)}
        />
      </Box>
      <Box
        wid="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        marginTop={20}
      >
        <InputText
          wid="35%"
          label="Data Furnisher"
          placeholder="Bank of America"
          marginRight={10}
          reg={register(`dispute[${index}].dataFunisher`)}
        />
        <InputText
          wid="35%"
          label="Account#"
          placeholder="1234567890"
          marginRight={10}
          reg={register(`dispute[${index}].accountNumber`)}
        />
        <InputText
          wid="30%"
          label="Balance"
          placeholder="$1,000.00"
          reg={register(`dispute[${index}].balance`)}
        />
      </Box>
      <Box
        wid="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        marginTop={10}
      >
        <Box
          wid="100%"
          justifyContent="flex-start"
          alignItems="flex-end"
          marginBottom={5}
        >
          <ArrowTurnUpRight size={theme.icons.sizes.sm} margin={`0 0 0 10px`} />
          {reverse ? (
            <InputText
              wid="100%"
              label="Action to be taken"
              placeholder="Delete this account"
              marginLeft={10}
              reg={register(`dispute[${index}].action`)}
            />
          ) : (
            <InputText
              wid="100%"
              label="Justifyer for action"
              placeholder="Account is not mine"
              marginLeft={10}
              reg={register(`dispute[${index}].justifyer`)}
            />
          )}
        </Box>
        <Button
          fontSize={theme.fonts.sizes.md}
          onClick={() => setReverse(!reverse)}
        >
          Reverse
        </Button>
        <Box
          wid="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          marginTop={5}
        >
          <ArrowTurnDownRight
            size={theme.icons.sizes.sm}
            margin={`0 0 0 10px`}
          />
          {reverse ? (
            <InputText
              wid="100%"
              label="Justifyer for action"
              placeholder="Account is not mine"
              marginLeft={10}
              reg={register(`dispute[${index}].justifyer`)}
            />
          ) : (
            <InputText
              wid="100%"
              label="Action to be taken"
              placeholder="Delete this account"
              marginLeft={10}
              reg={register(`dispute[${index}].action`)}
            />
          )}
        </Box>
      </Box>
      <Box
        wid="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        marginTop={10}
      >
        <InputText
          wid="33%"
          label="EXPERIAN Shows"
          placeholder="5/5/2023"
          marginRight={10}
          reg={register(`dispute[${index}].shows.experian`)}
        />
        <InputText
          wid="33%"
          label="EQUIFAX Shows"
          placeholder="5/5/2023"
          marginRight={10}
          reg={register(`dispute[${index}].shows.equifax`)}
        />
        <InputText
          wid="33%"
          label="TRANSUNION Shows"
          placeholder="5/5/2023"
          reg={register(`dispute[${index}].shows.transunion`)}
        />
      </Box>
      <Box
        wid="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        marginTop={10}
      >
        <InputText
          wid="100%"
          label="Additional Comment"
          placeholder="This account is not mine"
          reg={register(`dispute[${index}].comment`)}
        />
      </Box>
      <Box
        wid="100%"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        marginTop={10}
      >
        <Button
          icon={<Copy size={theme.icons.sizes.sm} />}
          onClick={() => duplicateDispute("Charge-offs", disputeId)}
        >
          Duplicate this dispute
        </Button>
      </Box>
    </Box>
  );
};

export default ChargeOffTemplate;
