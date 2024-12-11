"use client";

import { useState } from "react";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { applyClientStyle } from "@/src/utils/getClientModule";
import { grayColors } from "@/src/utils/constant";
import Copy from "@/src/assets/svg/Copy";
import Check from "@/src/assets/svg/Check";

export default function CodeBlock({
  language,
  copy = true,
  code,
}: {
  language: string;
  copy?: boolean;
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
        style={vscDarkPlus}
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
      {copy && (
        <div className={style.button} onClick={handleCopy}>
          {copied ? <Check /> : <Copy />}
        </div>
      )}
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
    cursor: "pointer",
  },
});
