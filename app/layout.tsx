import { cookies } from "next/headers";

import "./globals.css";
import NavBar from "../src/components/global/NavBar";
import Footer from "../src/components/global/Footer";

import { applyDarkStyle, applyStyle } from "@/src/utils/getModule";
import { regularFont } from "../src/constants/fonts";
import { grayColors } from "@/src/constants/colors";

// const metadata: Metadata = {
//   title: "stayedcss",
//   icons: {z
//     icon: "/icon.png",
//   },
// };

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
        <div className={`${regularFont.className} ${style.container}`}>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

const style = applyStyle({
  componentId: "RootLayout",
  container: {
    color: grayColors[10],
    backgroundColor: grayColors[0],
  },
});

applyDarkStyle({
  componentId: "RootLayout",
  container: {
    color: grayColors[2],
    backgroundColor: grayColors[10],
  },
});
