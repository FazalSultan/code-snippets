"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./button";
import UpdateSnippet from '@/action/index'
type snp = {
  id: number
  title: string
  code: string
};

type CreateEditorFormProps = {
  snippet: snp;
};

export default function CreateEditorForm({ snippet }: CreateEditorFormProps) {
  const [code, setCode] = useState(snippet.code);
  function handleChange(value: string | undefined) {
    setCode(value ?? "");
  }

  const updateAction = UpdateSnippet.bind(null, snippet.id , code)
  return (
    <div className="flex flex-col gap-10">
      <div >
        <form className="flex justify-between" action={updateAction}>
          <h3 className="font-bold text-3xl">Edit Your code Here Like a Pro 🛠💻: </h3>
          <Button>Save</Button>
        </form>
      </div>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={handleChange}
      />
    </div>
  );
}
