import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <Article title="Server Components">
      <CodeBlock language="jsx" copy={false} code={example} />
    </Article>
  );
}

const example = `import { stayedcss } from "stayedcss";

export default function Article() {
  return (
    <div className={style.container}>
      <div className={style.title}>title</div>
      <div className={style.content}>content</div>
    </div>
  );
}

const style = stayedcss({
  componentId: "components/docs/article",
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
