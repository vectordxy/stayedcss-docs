import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import GithubCard from "@/src/components/docs/GithubCard";

export default function page() {
  return (
    <Article title="Contribution">
      Thank you for your interest in contributing to this project. I truly
      appreciate your support and ideas to make it even better. Whether it's
      fixing a bug, suggesting a feature, or improving the documentation, every
      contribution matters.
      <Section title="1. Report Issues">
        {" "}
        If you find a bug or have suggestions or questions, please open an issue
        on GitHub.
        <GithubCard
          link="https://github.com/vectordxy/stayedcss/issues"
          projectTitle="stayedcss"
          description="This is Issue page."
        />
      </Section>
      <Section title="2. Submit Pull Requests">
        Feel free to fork this repository and submit a Pull Request.
      </Section>
      <Section title="3. Improve the Documentation">
        If you notice any missing or unclear information, I'd love your help
        improving it.
      </Section>
      'm always happy to hear from contributors. Thank you for helping improve
      this library.
    </Article>
  );
}
