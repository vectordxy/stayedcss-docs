import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock() {
  const code = `
  const add = (a, b) => {
    return a + b;
  };
  `;

  return (
    <SyntaxHighlighter
      language="typescript"
      style={materialDark}
      customStyle={{
        padding: "9px 15px",
        fontSize: 14,
        borderRadius: 2,
        lineHeight: "1.25em",
        // fontFamily: "'Noto Sans'",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
