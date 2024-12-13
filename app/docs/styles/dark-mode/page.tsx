import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Content from "@/src/components/docs/Content";

export default function page() {
  return (
    <Article title="Dark Mode">
      <Section title="Set Up">
        <Content title="1. Create cookieStore in app/layout.tsx">
          <CodeBlock language="jsx" code={code1} />
          Use cookieStore to retrieve the current theme mode from cookies or set
          a default.
        </Content>
        <Content title="2. Create an API">
          <CodeBlock language="jsx" code={code2} />
          Create an API to save the theme mode (Light or Dark) from the client.
        </Content>
        <Content title="3. Use darkmode function">
          Create an API to save the theme mode (Light or Dark) from the client.
        </Content>
      </Section>
      <Section title="How to import in components">
        <CodeBlock language="jsx" code={codeServer} />
        <CodeBlock language="jsx" code={codeClient} />
      </Section>
      <Section title="Update LightMode/DarkMode">
        Use the changeScreenMode function to toggle between light and dark modes
        by passing the desired mode ("light" or "dark") when the button is
        clicked.
        <CodeBlock language="jsx" code={code3} />
      </Section>
    </Article>
  );
}

const code1 = `import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // add cookieStore in here
  const cookieStore = await cookies();
  const mode = cookieStore.get("mode")?.value || "light";

  return (
    <html>
      { /* add className={mode} in body tag */ }
      <body className={mode}>
        {children}
      </body>
    </html>
  );
}
`;

const code2 = `// app/api/set-mode
import { saveScreenMode } from "stayedcss/client";

export async function POST(request: Request) {
  const { mode } = await request.json();
  return saveScreenMode(mode);
}
`;

const codeServer = `import { stayedcss, stayedcssDark } from "stayedcss";

export default function DarkModeExample() {
  return (
    <div className={style.container}>
      { /* your code */ }
    </div>
  );
}

const style = stayedcss({
  componentId: "component/darkmode-example",
  container: {
    backgroundColor: "white",
  },
});

stayedcssDark({
  componentId: "component/darkmode-example", // same componentId with lightmode.
  container: {
    backgroundColor: "black",
  },
});
`;

const codeClient = `"use client";

import { stayedcssClient, stayedcssClientDark } from "stayedcss/client";

export default function DarkModeClientExample() {
  return (
    <div className={style.container}>
      { /* your code */ }
    </div>
  );
}

const style = stayedcssClient({
  componentId: "component/darkmode-client-example",
  container: {
    backgroundColor: "white",
  },
});

stayedcssClientDark({
  componentId: "component/darkmode-client-example", // same componentId with lightmode.
  container: {
    backgroundColor: "black",
  },
});
`;

const code3 = `"use client";

import { changeScreenMode } from "stayedcss/client";

export default function ModeButton() {
  return (
    <div className={style.container}>
      <button onClick={() => changeScreenMode("light")}>
        LightMode
      </button>
      <button onClick={() => changeScreenMode("dark")}>
        DarkMode
      </button>
    </div>
  );
}`;
