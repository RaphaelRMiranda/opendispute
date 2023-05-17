import Box from "@/components/Box";
import InputText from "@/components/Inputs/Text";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import ArrowTurnUpRight from "../icons/ArrowTurnUpRight";
import { Button } from "@/components/Buttons";
import ArrowTurnDownRight from "../icons/ArrowTurnDownRight";
import { useState, useEffect } from "react";
import Copy from "../icons/Copy";
import { TDisputeBureau, TDisputeTemplate } from "./types";
import { useDocument } from "@/context/Document";
import Checkbox from "@/components/Inputs/Checkbox";

const ChargeOffTemplate = ({
  index,
  disputeId,
  register,
}: TDisputeTemplate) => {
  const { duplicateDispute, removeDispute, letterErrors, letterValues } =
    useDocument();

  const [bureau, setBureau] = useState<string>("waiting");

  const [eq, setEq] = useState<boolean>(false);
  const [ex, setEx] = useState<boolean>(false);
  const [tu, setTu] = useState<boolean>(false);

  const [reverse, setReverse] = useState<boolean>(false);

  const validBureau = () => {
    if (!eq && !ex && !tu) {
      setBureau("invalid");
    } else {
      setBureau("valid");
    }
  };

  useEffect(() => {
    console.log("eq", eq);
    console.log("ex", ex);
    console.log("tu", tu);
    console.log(!eq && !ex && !tu)

    if (!eq && !ex && !tu) {
      letterErrors.setError(`dispute[${index}].equifax`, {
        type: "manual",
        message: "At least one bureau must be selected",
      });
    } else {
      letterErrors.resetField(`dispute[${index}].equifax`);
      letterErrors.clean(`dispute[${index}].equifax`);
    }
  }, [eq, ex, tu]);

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
        <Checkbox
          label="Equifax"
          onChange={() => {
            setEq(!eq);
          }}
          checked={eq}
          marginRight={10}
          reg={register(`dispute[${index}].equifax`)}
        />
        <Checkbox
          label="Experian"
          onChange={() => {
            setEx(!ex);
          }}
          checked={ex}
          marginRight={10}
          reg={register(`dispute[${index}].experian`)}
        />
        <Checkbox
          label="TransUnion"
          onChange={() => {
            setTu(!tu);
          }}
          checked={tu}
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
          error={String(
            (letterErrors?.errors?.dispute as unknown as Array<any>) &&
              (letterErrors?.errors?.dispute as unknown as Array<any>)[index]
                ?.dataFunisher?.message
          )}
        />
        <InputText
          wid="45%"
          label="Account#"
          placeholder="1234567890"
          marginRight={10}
          reg={register(`dispute[${index}].accountNumber`)}
          error={String(
            (letterErrors?.errors?.dispute as unknown as Array<any>) &&
              (letterErrors?.errors?.dispute as unknown as Array<any>)[index]
                ?.accountNumber?.message
          )}
        />
        <InputText
          wid="20%"
          label="Balance"
          placeholder="$1,000.00"
          reg={register(`dispute[${index}].balance`)}
          error={String(
            (letterErrors?.errors?.dispute as unknown as Array<any>) &&
              (letterErrors?.errors?.dispute as unknown as Array<any>)[index]
                ?.balance?.message
          )}
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
              error={String(
                (letterErrors?.errors?.dispute as unknown as Array<any>) &&
                  (letterErrors?.errors?.dispute as unknown as Array<any>)[
                    index
                  ]?.action?.message
              )}
            />
          ) : (
            <InputText
              wid="100%"
              label="Justifyer for action"
              placeholder="Account is not mine"
              marginLeft={10}
              reg={register(`dispute[${index}].justifyer`)}
              error={String(
                (letterErrors?.errors?.dispute as unknown as Array<any>) &&
                  (letterErrors?.errors?.dispute as unknown as Array<any>)[
                    index
                  ]?.justifyer?.message
              )}
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
              error={String(
                (letterErrors?.errors?.dispute as unknown as Array<any>) &&
                  (letterErrors?.errors?.dispute as unknown as Array<any>)[
                    index
                  ]?.justifyer?.message
              )}
            />
          ) : (
            <InputText
              wid="100%"
              label="Action to be taken"
              placeholder="Delete this account"
              marginLeft={10}
              reg={register(`dispute[${index}].action`)}
              error={String(
                (letterErrors?.errors?.dispute as unknown as Array<any>) &&
                  (letterErrors?.errors?.dispute as unknown as Array<any>)[
                    index
                  ]?.action?.message
              )}
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
          error={String(
            (letterErrors?.errors?.dispute as unknown as Array<any>) &&
              (letterErrors?.errors?.dispute as unknown as Array<any>)[index]
                ?.shows?.experian?.message
          )}
        />
        <InputText
          wid="33%"
          label="EQUIFAX Shows"
          placeholder="5/5/2023"
          marginRight={10}
          reg={register(`dispute[${index}].shows.equifax`)}
          error={String(
            (letterErrors?.errors?.dispute as unknown as Array<any>) &&
              (letterErrors?.errors?.dispute as unknown as Array<any>)[index]
                ?.shows?.equifax?.message
          )}
        />
        <InputText
          wid="33%"
          label="TRANSUNION Shows"
          placeholder="5/5/2023"
          reg={register(`dispute[${index}].shows.transunion`)}
          error={String(
            (letterErrors?.errors?.dispute as unknown as Array<any>) &&
              (letterErrors?.errors?.dispute as unknown as Array<any>)[index]
                ?.shows?.transunion?.message
          )}
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
