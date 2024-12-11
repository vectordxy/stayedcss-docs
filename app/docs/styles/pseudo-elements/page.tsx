import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <Article title="Pseudo Elements">
      <Section title="Install via npm or yarn">
        StayedCSS can be easily installed using npm or yarn.
        <br />
        <br /> with npm
        <CodeBlock language="plaintext" code="npm install stayedcss" />
        or with yarn
        <CodeBlock language="plaintext" code="yarn add stayedcss" />
      </Section>
    </Article>
  );
}
