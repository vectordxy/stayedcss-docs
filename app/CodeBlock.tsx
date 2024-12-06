"use client";
import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // 원하는 테마

interface Props {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={language}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
