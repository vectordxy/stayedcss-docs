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
        <Table />
      </Section>
      <Section title="Recommended Component ID Format">
        <Content title="1. Unique ID">
          Component IDs must be unique across your project. This is essential
          because the Component ID serves as the foundation for the generated
          class names in your styles. Even if multiple components define the
          same class names within their style objects, their content will not
          overlap as long as their Component IDs differ.
        </Content>
        <Content title="2. File Path">
          It is highly recommended to use the file path of the component as its
          ID. This approach allows the library to automatically generate CSS
          files aligned with the component's location. In case of any errors,
          this convention makes debugging significantly easier, as you can
          quickly trace the issue back to the relevant component.
        </Content>
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
        <Content title="4. Multiple ClassName">
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
