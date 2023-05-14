import { createContext, useContext, useState } from "react";
import { TContext } from "../types";
import { DocumentProps, TDisputeObject, TEditDispute } from "./types";
import GenerateId from "@/views/Create/utils/GenerateId";
import SwitchTemplate from "@/views/Create/utils/SwitchType";

const DocumentContext = createContext<DocumentProps>({} as DocumentProps);

export const DocumentProvider = ({ children }: TContext) => {
  const [disputes, setDisputes] = useState<TDisputeObject[]>([]);
  const [lastDispute, setLastDispute] = useState<TDisputeObject>(
    {} as TDisputeObject
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
      template: SwitchTemplate(type, newId),
    } as TDisputeObject;

    if (duplicateDispute && editedDispute)
      setDisputes((prev) => [...prev, editedDispute]);
  };

  const removeDispute = (id: string) => {
    const removeDispute = disputes.filter((item) => item.id !== id);
    setDisputes(removeDispute);
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
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => useContext(DocumentContext);
