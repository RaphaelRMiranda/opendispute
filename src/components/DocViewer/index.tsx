import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import mammoth from "mammoth";
import {
  EditorState,
  ContentState,
  ContentBlock,
  genKey,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { List } from "immutable";

type DocxViewerProps = {
  base64Data: string;
};

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const DocxViewerServer: React.FC = () => null;

const DocxViewerClient: React.FC<DocxViewerProps> = ({ base64Data }) => {
  const [editorState, setEditorState] = useState(() => {
    const serializedEditorState = document
      .getElementById("serializedEditorState")
      ?.getAttribute("value");
    const contentState = serializedEditorState
      ? convertFromRaw(JSON.parse(serializedEditorState))
      : ContentState.createFromText("");

    return EditorState.createWithContent(contentState);
  });

  useEffect(() => {
    const convertDocxAndSetEditorState = async () => {
      const buffer = Buffer.from(base64Data, "base64");
      const html = await convertDocxToHtml(buffer);
      const contentState = convertHtmlToContentState(html);
      setEditorState(EditorState.createWithContent(contentState));
    };

    convertDocxAndSetEditorState();
  }, []);

  return (
    <div>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
};

const DocxViewer: React.FC<DocxViewerProps> = ({ base64Data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <DocxViewerClient base64Data={base64Data} />}
      {!isClient && <DocxViewerServer />}
      <input
        type="hidden"
        id="serializedEditorState"
        value={
          isClient
            ? ""
            : JSON.stringify(
                convertToRaw(EditorState.createEmpty().getCurrentContent())
              )
        }
      />
    </>
  );
};

const convertDocxToHtml = async (docxData: Buffer) => {
  const result = await mammoth.extractRawText({ buffer: docxData });
  const html = result.value;
  return html;
};

const convertHtmlToContentState = (html: string) => {
  const contentBlocks = html
    ? html.split("\n").map(
        (text) =>
          new ContentBlock({
            key: genKey(),
            type: "unstyled",
            text: text,
            characterList: List(),
          })
      )
    : [];

  const contentState = ContentState.createFromBlockArray(contentBlocks);
  return contentState;
};

export default DocxViewer;
