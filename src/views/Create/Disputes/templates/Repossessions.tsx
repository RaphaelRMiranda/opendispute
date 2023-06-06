import Box from "@/components/Box";
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
import Checkbox from "@/components/Inputs/Checkbox";
import SelectText from "@/components/Selects/Text";
import ActionByType from "../../utils/ActionByType";
import JustifyerByType from "../../utils/JustifyerByType";
import DateMaskOptional from "../../utils/DateMaskOptional";
import DolarMask from "../../utils/DolarMask";

const RepossessionsTemplate = ({ index, disputeId }: TDisputeTemplate) => {
  const { duplicateDispute, removeDispute, object, setObject, errors } =
    useDocument();

  const [balance, setBalance] = useState<string>("");

  const [eq, setEq] = useState<boolean>(false);
  const [ex, setEx] = useState<boolean>(false);
  const [tu, setTu] = useState<boolean>(false);

  const [reverse, setReverse] = useState<boolean>(false);

  const [EXShows, setEXShows] = useState<string>("");
  const [EQShows, setEQShows] = useState<string>("");
  const [TUShows, setTUShows] = useState<string>("");

  const handleChangeEXShows = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEXShows(DateMaskOptional(value));
  };

  const handleChangeEQShows = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEQShows(DateMaskOptional(value));
  };

  const handleChangeTUShows = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTUShows(DateMaskOptional(value));
  };

  const handleBalance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBalance(DolarMask(value));
  };

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
            <InputText defaultValue={"Repossessions"} />
          </Box>
          <Text
            fontSize={theme.fonts.sizes.md}
            color={theme.colors.base.secondary}
            weight={500}
          >
            Repossessions
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
              setObject((prev) => ({
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
              setObject((prev) => ({
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
              setObject((prev) => ({
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
          wid="35%"
          label="Data Furnisher"
          placeholder="Bank of America"
          marginRight={10}
          onChange={(e) => {
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index ? { ...item, dataFunisher: e.target.value } : item
              ),
            }));
          }}
          error={
            errors?.dispute && errors?.dispute[index]?.dataFunisher?.message
          }
          defaultValue={object?.dispute[index]?.dataFunisher}
        />
        <InputText
          wid="45%"
          label="Account#"
          placeholder="1234567890"
          marginRight={10}
          onChange={(e) => {
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index ? { ...item, accountNumber: e.target.value } : item
              ),
            }));
          }}
          error={
            errors?.dispute && errors?.dispute[index]?.accountNumber?.message
          }
          defaultValue={object?.dispute[index]?.accountNumber}
        />
        <InputText
          wid="20%"
          label="Balance"
          placeholder="$1,000.00"
          onChange={(e) => {
            handleBalance(e);
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index ? { ...item, balance: e.target.value } : item
              ),
            }));
          }}
          error={errors?.dispute && errors?.dispute[index]?.balance?.message}
          value={balance || DolarMask(String(object?.dispute[index]?.balance))}
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
              options={ActionByType("Repossessions")}
              marginLeft={10}
              onChange={(e) =>
                setObject((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, action: e.target.value } : item
                  ),
                }))
              }
              error={errors?.dispute && errors?.dispute[index]?.action?.message}
              defaultValue={object?.dispute[index]?.action}
            />
          ) : (
            <SelectText
              wid="100%"
              label="Justifyer for action"
              options={JustifyerByType("Repossessions")}
              marginLeft={10}
              onChange={(e) =>
                setObject((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, justifyer: e.target.value } : item
                  ),
                }))
              }
              error={
                errors?.dispute && errors?.dispute[index]?.justifyer?.message
              }
              defaultValue={object?.dispute[index]?.justifyer}
            />
          )}
        </Box>
        <Button
          fontSize={theme.fonts.sizes.md}
          onClick={() => {
            setReverse(!reverse);
            setObject((prev) => ({
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
              options={JustifyerByType("Repossessions")}
              marginLeft={10}
              onChange={(e) =>
                setObject((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, justifyer: e.target.value } : item
                  ),
                }))
              }
              error={
                errors?.dispute && errors?.dispute[index]?.justifyer?.message
              }
              defaultValue={object?.dispute[index]?.justifyer}
            />
          ) : (
            <SelectText
              wid="100%"
              label="Action to be taken"
              options={ActionByType("Repossessions")}
              marginLeft={10}
              onChange={(e) =>
                setObject((prev) => ({
                  ...prev,
                  dispute: prev.dispute.map((item, i) =>
                    i === index ? { ...item, action: e.target.value } : item
                  ),
                }))
              }
              error={errors?.dispute && errors?.dispute[index]?.action?.message}
              defaultValue={object?.dispute[index]?.action}
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
          onChange={(e) => {
            handleChangeEXShows(e);
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index
                  ? {
                      ...item,
                      shows: { ...item?.shows, experian: e.target.value },
                    }
                  : item
              ),
            }));
          }}
          value={
            EXShows
              ? DateMaskOptional(EXShows)
              : DateMaskOptional(object?.dispute[index]?.shows?.experian) || ""
          }
          maxLength={10}
        />
        <InputText
          wid="33%"
          label="EQUIFAX Shows"
          placeholder="5/5/2023"
          marginRight={10}
          onChange={(e) => {
            handleChangeEQShows(e);
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index
                  ? {
                      ...item,
                      shows: { ...item?.shows, equifax: e.target.value },
                    }
                  : item
              ),
            }));
          }}
          value={
            EQShows
              ? DateMaskOptional(EQShows)
              : DateMaskOptional(object?.dispute[index]?.shows?.equifax) || ""
          }
          maxLength={10}
        />
        <InputText
          wid="33%"
          label="TRANSUNION Shows"
          placeholder="5/5/2023"
          onChange={(e) => {
            handleChangeTUShows(e);
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index
                  ? {
                      ...item,
                      shows: { ...item?.shows, transunion: e.target.value },
                    }
                  : item
              ),
            }));
          }}
          value={
            TUShows
              ? DateMaskOptional(TUShows)
              : DateMaskOptional(object?.dispute[index]?.shows?.transunion) ||
                ""
          }
          maxLength={10}
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
          onChange={(e) => {
            setObject((prev) => ({
              ...prev,
              dispute: prev.dispute.map((item, i) =>
                i === index ? { ...item, comment: e.target.value } : item
              ),
            }));
          }}
          defaultValue={object?.dispute[index]?.comment}
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
          onClick={() => duplicateDispute("Repossessions", disputeId)}
        >
          Duplicate this dispute
        </Button>
      </Box>
    </Box>
  );
};

export default RepossessionsTemplate;
