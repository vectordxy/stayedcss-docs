import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Section from "@/src/components/docs/Section";

export default function page() {
  return (
    <Article title="Client Components">
      <Section title="1. Create app/api/client-style">
        <CodeBlock language="jsx" copy={false} code={postExample} />
      </Section>
      <Section title="2. Use stayedcssClient in components">
        <CodeBlock language="jsx" copy={false} code={componentExample} />
      </Section>
    </Article>
  );
}

const postExample = `import { postStyles } from "stayedcss";

export async function POST(request: Request) {
  return await postStyles(request);
}
`;

const componentExample = `'use client'

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
