import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

interface TextEditorProps {
  width: string;
  height: string;
  value?: string;
  onChange?: (e: any) => void;
}

const TextEditor: React.FunctionComponent<TextEditorProps> = ({
  width,
  height,
  value,
  onChange,
}) => (
  <ReactQuill
    style={{ width, height }}
    modules={quillModules}
    formats={formats}
    value={value}
    onChange={onChange}
    theme="snow"
  />
);

export default TextEditor;
