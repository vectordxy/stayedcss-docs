import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Section from "@/src/components/docs/Section";

export default function page() {
  return (
    <Article title="Client Components">
      <Section title="1. Create an API">
        First, start by creating a file named app/api/client-style. This file
        acts as a Next.js API route and uses the postStyles function to handle
        use-client style.
        <CodeBlock language="jsx" code={postExample} />
      </Section>
      <Section title="2. Use stayedcssClient in Components">
        And import the stayedcssClient into your components to define and manage
        styles. The client generates styles based on a unique componentId and
        the style definitions provided.
        <CodeBlock language="jsx" copy={false} code={componentExample} />
      </Section>
      Now you can add client-styles.
    </Article>
  );
}

const postExample = `// app/api/client-style
import { postStyles } from "stayedcss";

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
