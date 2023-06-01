import { createContext, useContext, useState } from "react";
import { TContext } from "../types";
import {
  DocumentProps,
  TDisputeDownload,
  TDisputeList,
  TDisputeObject,
} from "./types";
import GenerateId from "@/views/Create/utils/GenerateId";
import SwitchTemplate from "@/views/Create/utils/SwitchType";
import { DisputeInterface, TToken } from "@/views/Create/types";
import { TObjectErrors } from "@/views/Create/validation/types";
import { Api } from "@/services/Api";

const DocumentContext = createContext<DocumentProps>({} as DocumentProps);

export const handleCreateDocument = async ({
  token,
  ...data
}: DisputeInterface & TToken) => {
  return await Api.post(
    `/dispute/create`,
    {
      ...data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const handleDownloadDocument = async ({
  _id,
  token,
}: TDisputeDownload & TToken) => {
  return await Api.get(`/dispute/download/${_id}`, {
    responseType: "blob",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getDisputes = async ({
  page,
  limit,
  sort,
  since,
  until,
  search,
  token,
}: TDisputeList & TToken) => {
  return await Api.get(`/dispute/list`, {
    params: {
      page,
      limit,
      sort,
      since,
      until,
      search,
    },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteDispute = async ({
  _id,
  token,
}: TDisputeDownload & TToken) => {
  return await Api.delete(`/dispute/delete/${_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const DocumentProvider = ({ children }: TContext) => {
  const [object, setObject] = useState<DisputeInterface>(
    {} as DisputeInterface
  );

  const [disputes, setDisputes] = useState<TDisputeObject[]>([]); // Não usado

  const [errors, setErrors] = useState<TObjectErrors>({} as TObjectErrors);
  const [lastDispute, setLastDispute] = useState<DisputeInterface>(
    {} as DisputeInterface
  );

  const duplicateDispute = (type: string, id: string) => {
    const duplicateDispute = object.dispute.find((item) =>
      item?._id ? item._id === id : item.id === id
    );

    const newId = GenerateId();

    const editedDispute = {
      ...duplicateDispute,
      id: newId,
      _id: newId,
      template: SwitchTemplate(object.dispute.length, type, newId),
    } as TDisputeObject;

    if (duplicateDispute && editedDispute) {
      setObject((prev) => ({
        ...prev,
        dispute: [...prev.dispute, editedDispute],
      }));
    }
  };

  const removeDispute = (id: string) => {
    setObject((prev) => ({
      ...prev,
      dispute: prev.dispute.filter((item) =>
        item?._id ? item._id !== id : item.id !== id
      ),
    }));
  };

  return (
    <DocumentContext.Provider
      value={{
        disputes,
        setDisputes,
        duplicateDispute,
        removeDispute,
        errors,
        setErrors,
        lastDispute,
        setLastDispute,
        object,
        setObject,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => useContext(DocumentContext);
