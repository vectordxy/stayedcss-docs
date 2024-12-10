"use client";

import Link from "next/link";
import { colors } from "@/src/utils/constant";
import { boldFont } from "@/src/utils/fonts";
import { stayedClientStyle } from "../../../node_modules/stayedcss/src/client";
import { useParams, usePathname } from "next/navigation";

export default function SideMenu() {
  const p = usePathname();

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Getting Started
        </div>
        <Link
          href="/docs/getting-started/introduction"
          className={style.content}
        >
          Introduction
        </Link>
        <Link
          href="/docs/getting-started/installation"
          className={style.content}
        >
          Installation
        </Link>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>Set Up</div>
        <Link href="/docs/set-up/server-components" className={style.content}>
          Server Components
        </Link>
        <Link href="/docs/set-up/client-components" className={style.content}>
          Client Components
        </Link>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>Styles</div>
        <Link href="/docs/styles/basic" className={style.content}>
          Basic
        </Link>
        <Link href="/docs/styles/pseudo" className={style.content}>
          Pseudo
        </Link>
        <Link href="/docs/styles/media-query" className={style.content}>
          Media Query
        </Link>
        <Link href="/docs/styles/dark-mode" className={style.content}>
          Dark Mode
        </Link>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Contribution
        </div>
        <Link href="/docs/contribution/guide" className={style.content}>
          Guide
        </Link>
      </div>
    </div>
  );
}

const style = stayedClientStyle({
  componentId: "components/Docs/SideMenu",
  container: {
    width: 300,
    position: "sticky",
    top: "70px",
    fontSize: 14,
    padding: "16px 0",
    height: 400,
    // backgroundColor: "blue",
  },
  box: {
    padding: "6px 27px",
  },
  title: {
    margin: "8px 0",
  },
  content: {
    padding: "6px 3px",
    display: "block",
    cursor: "pointer",
    ":hover": {
      color: colors[4],
    },
  },
});
