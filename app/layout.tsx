import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import NavBar from "./components/global/NavBar";

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
      <body className={mode}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
