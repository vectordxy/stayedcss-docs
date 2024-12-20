import Article from "@/src/components/docs/Article";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Section from "@/src/components/docs/Section";
import TextBlock from "@/src/components/docs/TextBlock";

export default function page() {
  return (
    <Article title="What is StayedCSS?">
      StayedCSS is a static CSS library designed for Next.js App Router. It
      provides full support for both server and client components, offering
      various styling. It automatically creates a{" "}
      <TextBlock>stayedcss</TextBlock> folder in the root directory of your
      project and generates CSS files within it. Each component's styles are
      stored in this folder, organized based on their component ID.
      <Section title="1. Supports Both Server and Client">
        It provides support for both Next.js server and client components. It
        generates CSS optimized for each environment, ensuring a stable styling
        experience. You can use it without worrying about compatibility between
        server and client components.
      </Section>
      <Section title="2. No Learning Curve, You Already Know">
        With the same syntax as standard CSS, StayedCSS eliminates the learning
        curve. If you're familiar with CSS, you can start using it right away
        without additional learning, integrating it naturally into your Next.js
        projects.
        <CodeBlock language="jsx" copy={false} code={code1} />
      </Section>
      <Section title="3. From Basic Styling to Advanced Selectors">
        Beyond basic styling, pseudo-elements, pseudo-classes, media queries,
        and dark mode are all supported. Dark mode, in particular, is applied
        smoothly without flickering, allowing for simple implementation even in
        complex conditions.
        <CodeBlock language="jsx" copy={false} code={code2} />
      </Section>
      <Section title="4. Dark Mode without Flickering">
        It supports dark mode and solves the common SSR challenge of screen
        flickering during reloads. It ensures a clean and consistent user
        experience.
      </Section>
      <Section title="5. Lightweight with Simple Dependencies">
        It is extremely lightweight with minimal dependencies. It minimizes its
        impact on project performance while delivering powerful styling
        capabilities. It strikes a perfect balance between performance and
        flexibility.
        <CodeBlock language="jsx" copy={false} code={code3} />
      </Section>
      StayedCSS provides efficient and powerful CSS styling for your Next.js
      projects. Try it out today!
    </Article>
  );
}

const code1 = `const style = st({
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
    `;

const code2 = `const style = st({
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
    `;

const code3 = `"dependencies": {
  "next": "^15.0.3"
},
"devDependencies": {
  "@types/node": "^22.9.1",
  "typescript": "^5.6.3"
}
`;
