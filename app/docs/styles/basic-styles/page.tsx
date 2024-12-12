import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Content from "@/src/components/docs/Content";

export default function page() {
  return (
    <Article title="Basic Styles">
      <Section title="Example">
        The stayedcss function allows you to define styles in a simple and
        intuitive way, similar to writing traditional CSS. Instead of writing
        styles in a .css file, you define them as JavaScript objects. This keeps
        your styles co-located with your component logic.
        <CodeBlock language="jsx" code={codeExample} />
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
        <Content title="3. Use strings for multiple values with units">
          <CodeBlock language="jsx" code={codeExample3} />
          To define multiple values (e.g., for shorthand properties like
          padding), use a string and explicitly specify the unit for each value.
        </Content>
      </Section>
    </Article>
  );
}

const codeExample = `const style = stayedcss({
  componentId: "components/docs/article",
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
