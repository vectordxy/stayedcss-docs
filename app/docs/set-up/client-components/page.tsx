import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <Article title="Client Components">
      <CodeBlock language="jsx" code={example} />
    </Article>
  );
}

const example = `'use client'

import { stayedcssClient } from "stayedcss/client";

export default function ArticleClient() {
  return (
    <div className={style.container}>
      <div className={style.title}>title</div>
      <div className={style.content}>content</div>
    </div>
  );
}

const style = stayedcssClient({
  componentId: "components/docs/article-client",
  container: {
    marginBottom: 60,
  },
  title:{
    fontSize: 27,
  },
  content: {
    marginTop: 32,
    lineHeight: "1.5em",
  },
});
`;
