import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import List from "@/src/components/docs/List";

export default function page() {
  return (
    <Article title="Pseudo Classes">
      <Section title="Example">
        To apply pseudo-classes, simply define them as properties within the
        style object for the class. Each pseudo-class is written as a key (e.g.,
        ":hover") with its styles defined in an inner object.
        <CodeBlock language="jsx" copy={false} code={codeExample} />
      </Section>
      <Section title="Available Pseudo-Classes">
        <List input={validPseudoClasses} />
      </Section>
    </Article>
  );
}

const codeExample = `const style = st({
  componentId: "components/docs/pseudo-classes",
  container: {
    backgroundColor: "black",
    ":hover":{
      backgroundColor: "green",         
    },
  },
});`;

const validPseudoClasses = [
  ":hover",
  ":focus",
  ":active",
  ":visited",
  ":link",
  ":focus-visible",
  ":focus-within",

  ":checked",
  ":disabled",
  ":enabled",
  ":required",
  ":optional",
  ":read-only",
  ":read-write",
  ":indeterminate",
  ":invalid",
  ":valid",
  ":in-range",
  ":out-of-range",
  ":placeholder-shown",
  ":fullscreen",
  ":picture-in-picture",

  ":first-child",
  ":last-child",
  ":only-child",
  ":first-of-type",
  ":last-of-type",
  ":only-of-type",
  ":empty",

  ":not",
  ":root",
  ":target",
  ":is",
  ":where",
  ":has",
  ":scope",
];
