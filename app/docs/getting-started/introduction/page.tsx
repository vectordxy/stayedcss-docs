import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";

export default function page() {
  return (
    <>
      <Article title="What is StayedCSS?">
        StayedCSS is a static CSS library designed for Next.js projects. It
        provides full support for both server and client components, offering
        various styling features such as pseudo-elements, media queries, and
        dark mode with no flickering. Additionally, it adopts the same syntax as
        standard CSS, making it easy to integrate into your projects. Currently,
        StayedCSSis available in beta version, and it will be more stable and
        efficient. Stay tuned!
      </Article>
      <Article title="Main Features">
        <Section title="1. Full Support for Server and Client Components">
          StayedCSS provides seamless support for both Next.js server and client
          components. It generates CSS optimized for each environment, ensuring
          a stable styling experience. You can use it without worrying about
          compatibility between server and client components.
        </Section>
        <Section title="2. Extensive Styling">
          Beyond basic styling, pseudo-elements, media queries, and dark mode
          are all supported. Dark mode, in particular, is applied smoothly
          without flickering, allowing for simple implementation even in complex
          conditions.
        </Section>
        <Section title="3. Familiar CSS Syntax">
          With the same syntax as standard CSS, StayedCSS eliminates the
          learning curve. If you're familiar with CSS, you can start using it
          right away without additional learning, integrating it naturally into
          your Next.js projects.
        </Section>
        <Section title="4. Lightweight Library">
          The library is extremely lightweight with minimal dependencies. It
          minimizes its impact on project performance while delivering powerful
          styling capabilities. It strikes a perfect balance between performance
          and flexibility.
        </Section>
        This library provides efficient and robust CSS styling for your Next.js
        projects. Try it out today!
      </Article>
    </>
  );
}
