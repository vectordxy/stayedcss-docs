"use client";

import { useState } from "react";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { applyClientStyle } from "@/src/utils/getClientModule";
import { grayColors } from "@/src/utils/constant";

export default function CodeBlock({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className={style.container}>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        customStyle={{
          padding: "16px 18px",
          margin: "16px 0",
          fontSize: 14,
          borderRadius: 3,
          lineHeight: "1.25em",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button className={style.button} onClick={handleCopy}>
        {copied ? "copied!" : "copy"}
      </button>
    </div>
  );
}

const style = applyClientStyle({
  componentId: "components/docs/CodeBlock",
  container: {
    position: "relative",
  },
  button: {
    position: "absolute",
    top: "17px",
    right: "18px",
    fontSize: 12,
    borderRadius: 2,
    padding: "3px 5px",
    backgroundColor: grayColors[7],
    transition: "background-color 0.3s ease-in-out",
    color: grayColors[3],
    border: "none",
    cursor: "pointer",
    ":hover": {
      backgroundColor: grayColors[6],
    },
  },
});
