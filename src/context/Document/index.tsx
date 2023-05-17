import { createContext, useContext, useState } from "react";
import { TContext } from "../types";
import {
  DocumentProps,
  TDisputeObject,
  TEditDispute,
  TFormError,
  TFormRegister,
  TFormValues,
} from "./types";
import GenerateId from "@/views/Create/utils/GenerateId";
import SwitchTemplate from "@/views/Create/utils/SwitchType";

const DocumentContext = createContext<DocumentProps>({} as DocumentProps);

export const DocumentProvider = ({ children }: TContext) => {
  const [disputes, setDisputes] = useState<TDisputeObject[]>([]);
  const [lastDispute, setLastDispute] = useState<TDisputeObject>(
    {} as TDisputeObject
  );

  const [letterRegister, setLetterRegister] = useState<TFormRegister>(
    {} as TFormRegister
  );
  const [letterErrors, setLetterErrors] = useState<TFormError>(
    {} as TFormError
  );
  const [letterValues, setLetterValues] = useState<TFormValues>(
    {} as TFormValues
  );

  const editDispute = (id: string, edited: TEditDispute) => {
    const editedDispute = disputes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...edited,
        };
      }
      return item;
    });

    const itemIndex = disputes.findIndex((item) => item.id === id);
    editedDispute.splice(itemIndex, 1, editedDispute[itemIndex]);

    setDisputes(editedDispute);
  };

  const duplicateDispute = (type: string, id: string) => {
    const duplicateDispute = disputes.find((item) => item.id === id);
    const newId = GenerateId();

    const editedDispute = {
      ...duplicateDispute,
      id: newId,
      template: SwitchTemplate(
        disputes.length,
        type,
        newId,
        letterRegister.register
      ),
    } as TDisputeObject;

    if (duplicateDispute && editedDispute)
      setDisputes((prev) => [...prev, editedDispute]);
  };

  const removeDispute = (id: string) => {
    letterErrors.clean();
    letterErrors.resetField(`dispute`);
    setDisputes((prevDisputes) => {
      const updatedDisputes = prevDisputes.filter((item) => item.id !== id);
      return updatedDisputes;
    });
  };

  return (
    <DocumentContext.Provider
      value={{
        disputes,
        setDisputes,
        editDispute,
        duplicateDispute,
        removeDispute,
        lastDispute,
        setLastDispute,
        letterRegister,
        setLetterRegister,
        letterErrors,
        setLetterErrors,
        letterValues,
        setLetterValues,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => useContext(DocumentContext);
