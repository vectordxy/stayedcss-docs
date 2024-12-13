import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Section from "@/src/components/docs/Section";

export default function page() {
  return (
    <Article title="Component Id">
      <Section title="Guidelines for Component Id">
        When creating a component Id in your project, it is recommended to use
        the current path of the component within your project directory. This
        approach ensures that the corresponding CSS file is generated in
        alignment with the component's location, making debugging and
        maintenance significantly more straightforward. For Example:
        <CodeBlock language="jsx" copy={false} code={example} />
        By following this convention, you can easily locate and manage the
        generated CSS file for each component. However, this is merely a
        guideline to enhance organization and efficiency. You are free to define
        component IDs in any format you prefer, as long as the value provided is
        a **string type**. **Key Notes**: - Component IDs must be unique within
        the project to avoid conflicts. - Using meaningful and descriptive IDs
        improves clarity and helps in debugging. Feel free to adapt this
        guideline to suit your project's requirements!
      </Section>
    </Article>
  );
}

const example = `import { st } from "stayedcss";

export default function Article() {
  return (
    <div className={style.container}>
      <div className={style.title}>title</div>
      <div className={style.content}>content</div>
    </div>
  );
}

const style = st({
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
