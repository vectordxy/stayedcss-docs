import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Content from "@/src/components/docs/Content";
import List from "@/src/components/docs/List";
import Table from "@/src/components/docs/Table";

export default function page() {
  return (
    <Article title="Basic Styles">
      <Section title="Example">
        The stayedcss function allows you to define styles in a simple and
        intuitive way, similar to writing traditional CSS. Instead of writing
        styles in a .css file, you define them as JavaScript objects. This keeps
        your styles co-located with your component logic.
        <CodeBlock language="jsx" code={example} />
      </Section>
      <Section title="Structure">
        <CodeBlock language="jsx" code={codeExample} />
        <Table />
      </Section>
      <Section title="Guidelines for Component Id">
        When creating a component Id in your project, it is recommended to use
        the current path of the component within your project directory. This
        approach ensures that the corresponding CSS file is generated in
        alignment with the component's location, making debugging and
        maintenance significantly more straightforward. For Example: By
        following this convention, you can easily locate and manage the
        generated CSS file for each component. However, this is merely a
        guideline to enhance organization and efficiency. You are free to define
        component IDs in any format you prefer, as long as the value provided is
        a **string type**. **Key Notes**: - Component IDs must be unique within
        the project to avoid conflicts. - Using meaningful and descriptive IDs
        improves clarity and helps in debugging. Feel free to adapt this
        guideline to suit your project's requirements!
      </Section>
      <Section title="Syntax">
        <Content title="1. Write styles as object using camelCase">
          <CodeBlock language="jsx" code={codeExample1} />
          Style properties are defined in camelCase format instead of the
          kebab-case used in CSS.
        </Content>
        <Content title="2. Numeric values default to px">
          <CodeBlock language="jsx" code={codeExample2} />
          When a numeric value is provided without a unit, it is automatically
          interpreted as pixels. When a numeric value is provided without a
          unit, it is automatically interpreted as pixels. If you want to
          specify a different unit, provide the value as a string.
        </Content>
        <Content title="Available Properties for Default px">
          <List input={unitRequiredProps} />
        </Content>
        <Content title="3. Use strings for multiple values with units">
          <CodeBlock language="jsx" code={codeExample3} />
          To define multiple values (e.g., for shorthand properties like
          padding), use a string and explicitly specify the unit for each value.
        </Content>
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

const codeExample = `const style = st({
  componentId: "components/docs/basic-styles",
  container: {
    backgroundColor: "black",
  },
  title: {
    fontSize: 27,
    lineHeight: "1.5em",
  },
  content: {
    margin: "16px 12px",
    padding: "12px 8px 16px 2px",
  },
});`;

const codeExample1 = `container: {
  backgroundColor: "black",
}`;

const codeExample2 = `title: {
  fontSize: 27, // font-size: 27px;
  lineHeight: "1.5em", // line-height: 1.5em;
},`;

const codeExample3 = `content: {
  margin: "16px 12px",
  padding: "12px 8px 16px 2px",
},`;

const unitRequiredProps = [
  "width",
  "height",
  "min-width",
  "max-width",
  "min-height",
  "max-height",
  "margin",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "font-size",
  "top",
  "right",
  "bottom",
  "left",
  "inset",
  "inset-block",
  "inset-inline",
  "border-width",
  "border-radius",
  "border-top-width",
  "border-right-width",
  "border-bottom-width",
  "border-left-width",
  "outline-width",
  "grid-gap",
  "grid-row-gap",
  "grid-column-gap",
  "flex-basis",
  "backdrop-filter",
];
