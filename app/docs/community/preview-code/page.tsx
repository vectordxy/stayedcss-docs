import Article from "@/src/components/docs/Article";
import GithubCard from "@/src/components/docs/GithubCard";

import Section from "@/src/components/docs/Section";
import TextBlock from "@/src/components/docs/TextBlock";

export default function page() {
  return (
    <Article title="Preview Code">
      <Section title="Project Overview">
        This documentation is fully built with StayedCSS, showcasing the
        practical use of the library's features. From server-side to client-side
        , this project demonstrates StayedCSS's ease of use.
      </Section>
      <Section title="Explore Components">
        Take a closer look at the <TextBlock>src/components</TextBlock>{" "}
        directory to understand how StayedCSS is implemented in real-world
        scenarios. The directory contains practical examples of using
        StayedCSS's features, including pseudo-elements, media queries, and
        dynamic styling. Reviewing these examples can help you quickly grasp how
        to integrate StayedCSS into your own projects.
        <GithubCard
          link="https://github.com/vectordxy/stayedcss-docs/tree/main/src/components"
          projectTitle="stayedcss-docs"
          description="StayedCSS is a static CSS library designed for Next.js projects. It
        provides full support for both server and client components, offering
        various styling features such as pseudo-elements, media queries, and
        dark mode with no flickering. Additionally, it adopts the same syntax as
        standard CSS, making it easy to integrate into your projects."
        />
      </Section>
    </Article>
  );
}
