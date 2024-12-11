import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Section from "@/src/components/docs/Section";

export default function page() {
  return (
    <>
      <Article title="What is StayedCSS?">
        StayedCSS is a static CSS library designed for Next.js projects. It
        provides full support for both server and client components, offering
        various styling.
      </Article>
      <Article title="Main Features">
        <Section title="1. Full Support for Server and Client Components">
          It provides seamless support for both Next.js server and client
          components. It generates CSS optimized for each environment, ensuring
          a stable styling experience. You can use it without worrying about
          compatibility between server and client components.
        </Section>
        <Section title="2. Familiar CSS Syntax">
          With the same syntax as standard CSS, StayedCSS eliminates the
          learning curve. If you're familiar with CSS, you can start using it
          right away without additional learning, integrating it naturally into
          your Next.js projects.
          <CodeBlock
            language="jsx"
            copy={false}
            code={`const style = stayedcss({
  componentId: "components/global/footer",
  container: {
    width: "100%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
  },
  box: {
    fontSize: 12,
    padding: "50px 0",
  },
});
    `}
          />
        </Section>
        <Section title="3. Various Styling">
          Beyond basic styling, pseudo-elements, media queries, and dark mode
          are all supported. Dark mode, in particular, is applied smoothly
          without flickering, allowing for simple implementation even in complex
          conditions.
          <CodeBlock
            language="jsx"
            copy={false}
            code={`const style = stayedcss({
  componentId: "components/global/footer",
  container: {
    display: "flex",
    justifyContent: "center",

  },
  box: {
    padding: "50px 0",
    ":hover":{
      backgroundColor: "red",         
    }
    "::after": {
      content: "'Hovered'",
      color: "green",
    },
    "~ p": {
      color: "blue", 
    },
  },
  // Media Query
  "@desktop":{
    container: {
      width: "50%",
    },
    box: {
      backgroundColor: "black",
    },
  }
});
    `}
          />
        </Section>
        <Section title="4. Dark Mode without flickering">
          It supports dark mode and solves the common SSR challenge of screen
          flickering during reloads. It ensures a clean and consistent user
          experience.
        </Section>
        <Section title="5. Lightweight">
          It is extremely lightweight with minimal dependencies. It minimizes
          its impact on project performance while delivering powerful styling
          capabilities. It strikes a perfect balance between performance and
          flexibility.
          <CodeBlock
            language="jsx"
            copy={false}
            code={`"dependencies": {
  "next": "^15.0.3"
},
"devDependencies": {
  "@types/node": "^22.9.1",
  "typescript": "^5.6.3"
}
`}
          />
        </Section>
        StayedCSS provides efficient and powerful CSS styling for your Next.js
        projects. Try it out today!
      </Article>
    </>
  );
}
