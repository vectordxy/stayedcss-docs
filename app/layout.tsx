import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import NavBar from "../src/components/global/NavBar";
import { regularFont } from "../src/utils/fonts";
import Footer from "../src/components/global/Footer";

export const metadata: Metadata = {
  title: "stayedcss",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const mode = cookieStore.get("mode")?.value || "light";

  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css"
        />
      </head>
      <body className={mode}>
        <div className={regularFont.className}>
          <NavBar />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
