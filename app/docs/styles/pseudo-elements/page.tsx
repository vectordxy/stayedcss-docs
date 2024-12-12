import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import List from "@/src/components/docs/List";

export default function page() {
  return (
    <Article title="Pseudo Elements">
      <Section title="Example">
        To apply pseudo-elements, simply define them as properties within the
        style object for the class. Each pseudo-element is written as a key
        (e.g., "::before") with its styles defined in an inner object. The
        content property is required for most pseudo-elements, as it specifies
        what the pseudo-element should display.
        <CodeBlock language="jsx" copy={false} code={codeExample} />
      </Section>
      <Section title="Available Pseudo-Classes">
        <List input={validPseudoElements} />
      </Section>
    </Article>
  );
}

const codeExample = `const style = stayedcss({
  componentId: "components/docs/pseudo-elements-example",
  container: {
    position: "relative",
    "::before": {
      content: '"Start"',
      position: "absolute",
      top: "-20px",
      left: "0",
    },
    "::after": {
      content: '"End"',
      position: "absolute",
      bottom: "-20px",
      right: "0",
    },
  },
  highlightedText: {
    "::first-line": {
      fontWeight: "bold",
    },
    "::selection": {
      backgroundColor: "yellow",
    },
  },
});
`;

const validPseudoElements = [
  "::before",
  "::after",
  "::first-line",
  "::first-letter",
  "::placeholder",
  "::selection",
  "::marker",
  "::file-selector-button",
  "::backdrop",
  "::cue",
];
