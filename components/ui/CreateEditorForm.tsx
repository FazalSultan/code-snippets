"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./button";

export default async function CreateEditorForm({ snippet }) {
  const [code, setCode] = useState(snippet.code);

  return (
    <div className="flex flex-col gap-10">
      <div >
        <form className="flex justify-between">
          <h3 className="font-bold text-3xl">Edit Your code Here Like a Pro 🛠💻: </h3>
          <Button>Save</Button>
        </form>
      </div>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
      />
    </div>
  );
}
