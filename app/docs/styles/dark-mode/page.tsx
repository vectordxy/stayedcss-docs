import Article from "@/src/components/docs/Article";
import Section from "@/src/components/docs/Section";
import CodeBlock from "@/src/components/docs/CodeBlock";
import Content from "@/src/components/docs/Content";

export default function page() {
  return (
    <Article title="Dark Mode">
      <Section title="Set Up">
        <Content title="1. Create cookieStore in app/layout.tsx">
          Use cookieStore to retrieve the current theme mode from cookies or set
          a default.
          <CodeBlock language="jsx" code={code1} />
        </Content>
        <Content title="2. Create an API">
          Create an API to save the theme mode (Light or Dark) from the client.
          <CodeBlock language="jsx" code={code2} />
        </Content>
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
  const cookieStore = await cookies();
  const mode = cookieStore.get("mode")?.value || "light";

  return (
  // your code
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
