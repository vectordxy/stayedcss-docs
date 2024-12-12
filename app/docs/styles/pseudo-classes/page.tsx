import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Content from "@/src/components/docs/Content";
import { applyStyle } from "@/src/utils/getModule";
import { grayColors } from "@/src/utils/constant";

export default function page() {
  return (
    <Article title="Pseudo Classes">
      <Section title="Example">
        To apply pseudo-classes, simply define them as properties within the
        style object for the desired class. Each pseudo-class is written as a
        key (e.g., ":hover") with its styles defined in an inner object.
        <CodeBlock language="jsx" copy={false} code={codeExample} />
      </Section>
      <Section title="Available Pseudo-Classes">
        <div className={style.container}>
          {validPseudoClasses.sort().map((pseudoClass, index) => (
            <div key={index} className={style.item}>
              {pseudoClass}
            </div>
          ))}
        </div>
      </Section>
    </Article>
  );
}

const style = applyStyle({
  componentId: "components/docs/pseudoClasses",
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  item: {
    fontSize: 14,
    padding: "4px 8px",
    backgroundColor: grayColors[9],
    borderRadius: 3,
    color: grayColors[3],
  },
});

const codeExample = `const style = stayedcss({
  componentId: "components/docs/article",
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
