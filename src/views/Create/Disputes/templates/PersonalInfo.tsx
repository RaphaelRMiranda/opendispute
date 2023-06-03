import Box from "@/components/Box";
import InputText from "@/components/Inputs/Text";
import Text from "@/components/Text";
import { theme } from "@/styles/theme";
import ArrowTurnUpRight from "../icons/ArrowTurnUpRight";
import { Button } from "@/components/Buttons";
import ArrowTurnDownRight from "../icons/ArrowTurnDownRight";
import { useEffect, useState } from "react";
import Copy from "../icons/Copy";
import { TDisputeTemplate } from "./types";
import { useDocument } from "@/context/Document";
import Checkbox from "@/components/Inputs/Checkbox";
import SelectText from "@/components/Selects/Text";
import ActionByType from "../../utils/ActionByType";
import JustifyerByType from "../../utils/JustifyerByType";
import { DisputeInterface, TDisputePI } from "../../types";

const PersonalInfoTemplate = ({ index, disputeId }: TDisputeTemplate) => {
  const { duplicateDispute, removeDispute, object, setObject, errors } =
    useDocument();

  const [objectPI, setObjectPI] = useState<DisputeInterface<TDisputePI>>(
    object as unknown as DisputeInterface<TDisputePI>
  );

  useEffect(() => {
    setObject(objectPI as unknown as DisputeInterface);
  }, [objectPI, setObject]);

  const [eq, setEq] = useState<boolean>(false);
  const [ex, setEx] = useState<boolean>(false);
  const [tu, setTu] = useState<boolean>(false);

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
            <InputText defaultValue={"Personal Info"} />
          </Box>
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.secondary}
            weight={500}
          >
            Personal Info
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
      <Box
        wid="30%"
        marginTop={10}
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box wid="100%" justifyContent="space-between">
          <Checkbox
            label="Equifax"
            onChange={() => {
              setEq(!eq);
              setObjectPI((prev) => ({
                ...prev,
                dispute: prev.dispute.map((item, i) =>
                  i === index ? { ...item, equifax: !eq } : item
                ),
              }));
            }}
            checked={eq}
            marginRight={10}
          />
          <Checkbox
            label="Experian"
            onChange={() => {
              setEx(!ex);
              setObjectPI((prev) => ({
                ...prev,
                dispute: prev.dispute.map((item, i) =>
                  i === index ? { ...item, experian: !ex } : item
                ),
              }));
            }}
            checked={ex}
            marginRight={10}
          />
          <Checkbox
            label="TransUnion"
            onChange={() => {
              setTu(!tu);
              setObjectPI((prev) => ({
                ...prev,
                dispute: prev.dispute.map((item, i) =>
                  i === index ? { ...item, transunion: !tu } : item
                ),
              }));
            }}
            checked={tu}
            marginRight={10}
          />
        </Box>
        {errors?.dispute &&
          errors?.dispute[index]?.equifax &&
          errors?.dispute[index]?.equifax?.message !== "undefined" && (
            <Text
              fontSize={theme.fonts.sizes.sm}
              color={theme.colors.base.red[200]}
            >
              {errors?.dispute[index]?.equifax?.message}
            </Text>
          )}
      </Box>
      <Box
        wid="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        marginTop={20}
      >
        <InputText
          wid="100%"
          label="Inaccurate information"
          placeholder="This account is not mine"
          onChange={(e) => {
            setObjectPI((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index
                  ? { ...item, inaccurateInformation: e.target.value }
                  : item
              ),
            }));
          }}
          error={
            errors?.dispute &&
            errors?.dispute[index]?.inaccurateInformation?.message
          }
          defaultValue={objectPI?.dispute[index]?.inaccurateInformation}
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
          {!reverse ? (
            <SelectText
              wid="100%"
              label="Action to be taken"
              options={ActionByType("Personal Info")}
              marginLeft={10}
              onChange={(e) =>
                setObjectPI((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, action: e.target.value } : item
                  ),
                }))
              }
              error={errors?.dispute && errors?.dispute[index]?.action?.message}
              defaultValue={objectPI?.dispute[index]?.action}
            />
          ) : (
            <SelectText
              wid="100%"
              label="Justifyer for action"
              options={JustifyerByType("Personal Info")}
              marginLeft={10}
              onChange={(e) =>
                setObjectPI((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, justifyer: e.target.value } : item
                  ),
                }))
              }
              error={
                errors?.dispute && errors?.dispute[index]?.justifyer?.message
              }
              defaultValue={objectPI?.dispute[index]?.justifyer}
            />
          )}
        </Box>
        <Button
          fontSize={theme.fonts.sizes.md}
          onClick={() => {
            setReverse(!reverse);
            setObjectPI((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index ? { ...item, reverse } : item
              ),
            }));
          }}
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
          {!reverse ? (
            <SelectText
              wid="100%"
              label="Justifyer for action"
              options={JustifyerByType("Personal Info")}
              marginLeft={10}
              onChange={(e) =>
                setObjectPI((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, justifyer: e.target.value } : item
                  ),
                }))
              }
              error={
                errors?.dispute && errors?.dispute[index]?.justifyer?.message
              }
              defaultValue={objectPI?.dispute[index]?.justifyer}
            />
          ) : (
            <SelectText
              wid="100%"
              label="Action to be taken"
              options={ActionByType("Personal Info")}
              marginLeft={10}
              onChange={(e) =>
                setObjectPI((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, action: e.target.value } : item
                  ),
                }))
              }
              error={errors?.dispute && errors?.dispute[index]?.action?.message}
              defaultValue={objectPI?.dispute[index]?.action}
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
          wid="100%"
          label="Additional Comment"
          placeholder="This account is not mine"
          onChange={(e) => {
            setObjectPI((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index ? { ...item, comment: e.target.value } : item
              ),
            }));
          }}
          defaultValue={objectPI?.dispute[index]?.comment}
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
          onClick={() => duplicateDispute("Personal Info", disputeId)}
        >
          Duplicate this dispute
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoTemplate;
