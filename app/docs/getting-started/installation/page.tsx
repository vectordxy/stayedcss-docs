import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <Article title="Installation">
      <Section title="1. Install via npm or yarn">
        StayedCSS can be easily installed using npm or yarn.
        <br />
        <br /> with npm
        <CodeBlock language="plaintext" code="npm install stayedcss" />
        or with yarn
        <CodeBlock language="plaintext" code="yarn add stayedcss" />
      </Section>
      <Section title="2. Create StayedCSS folder">
        <CodeBlock language="plaintext" code={`npx stayedcss`} />
        Run the npx command in your terminal to generate the setup files for
        StayedCSS. It will create a stayedcss folder with an index.css file in
        the root directory of your project.
      </Section>
      <Section title="3. Import StayedCSS in global.css">
        <CodeBlock
          language="plaintext"
          code={`@import "../stayedcss/index.css";`}
        />
        Import the file into your project’s app/global.css.
      </Section>
      Now you are ready to start it.
    </Article>
  );
}
