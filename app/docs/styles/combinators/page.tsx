import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import List from "@/src/components/docs/List";

export default function page() {
  return (
    <Article title="Combinators">
      <Section title="Example">
        To use combinators, simply define them as properties within the style
        object for the desired class. Each selector is written as a key with its
        styles defined in an inner object.
        <CodeBlock language="jsx" copy={false} code={codeExample} />
      </Section>
      <Section title="Available Combinators">
        <List input={validCombinators} />
      </Section>
    </Article>
  );
}

const codeExample = `const style = stayedcss({
  componentId: "components/docs/selector-example",
  container: {
    display: "flex",
    flexDirection: "column",
    "> span": { 
      color: "blue",
      fontSize: "14px",
    },
    "+ p": { 
      marginTop: "8px",
      color: "green",
    },
    "~ div": { 
      border: "1px solid gray",
      padding: "8px",
    },
  },
});
`;

const validCombinators = [">", "+", "~"];
