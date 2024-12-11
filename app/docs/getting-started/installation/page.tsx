import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";

export default function page() {
  const installationExample = `npm install stayedcss`;

  return (
    <>
      <Section title="Installation">
        <CodeBlock language="plaintext" code={installationExample} />
      </Section>
      <Section title="Main Features">
        <div></div>
      </Section>
    </>
  );
}
