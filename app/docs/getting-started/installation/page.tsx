import Section from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  return (
    <>
      <Section title="Installation">
        you can install via npm
        <CodeBlock language="plaintext" code="npm install stayedcss" />
        or, if you use yarn
        <CodeBlock language="plaintext" code="yarn add stayedcss" />
      </Section>
    </>
  );
}
