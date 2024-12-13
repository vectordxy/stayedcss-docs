import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <Article title="Media Query">
      <Section title="Example">
        To define media queries, include them as top-level keys in your style
        object. Each media query is defined as a key (e.g., "@desktop") and
        contains styles that apply only when the specified condition is met.
        Breakpoints are predefined for consistency across your project.
        <CodeBlock language="jsx" copy={false} code={codeExample} />
      </Section>
      <Section title="Default Breakpoints">
        <CodeBlock language="jsx" copy={false} code={breakpointsExample} />
      </Section>
    </Article>
  );
}

const codeExample = `const style = st({
  componentId: "components/docs/media-query",
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "lightgray",
  },
  "@mobile": {
    container: {
      backgroundColor: "pink", 
      padding: "10px",
    },
  },
  "@tablet": {
    container: {
      backgroundColor: "lightblue", 
      padding: "15px",
    },
  },
  "@desktop": {
    container: {
      backgroundColor: "lightgreen",
      width: "50%",
    },
  },
});

`;

const breakpointsExample = `const defaultBreakpoints = {
  "@mobile": "(max-width: 500px)",
  "@tablet": "(max-width: 800px)",
  "@laptop": "(max-width: 1024px)",
  "@desktop": "(max-width: 1280px)",
}`;
