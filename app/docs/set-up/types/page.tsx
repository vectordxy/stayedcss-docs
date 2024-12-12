import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <Article title="Types">
      If your project is built with typescript, you can add types. StayedCSS
      provide 2 types, MainInput and Config.
      <CodeBlock language="jsx" code={example} />
    </Article>
  );
}

const example = `import { MainInput } from "stayedcss/client";
`;
