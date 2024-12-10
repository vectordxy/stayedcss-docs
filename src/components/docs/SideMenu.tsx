"use client";

import { colors } from "@/src/utils/constant";
import { boldFont } from "@/src/utils/fonts";
import { applyClientStyle } from "@/src/utils/getClientModule";
import Link from "next/link";

export default function SideMenu() {
  const style = applyClientStyle({
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

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Getting Started
        </div>
        <Link href="/docs/introduction" className={style.content}>
          Introduction
        </Link>
        <Link href="/docs/installation" className={style.content}>
          Installation
        </Link>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>Styles</div>
        <Link href="/docs/basic" className={style.content}>
          Basic
        </Link>
        <Link href="/docs/pseudo" className={style.content}>
          Pseudo
        </Link>
        <Link href="/docs/media-query" className={style.content}>
          Media Query
        </Link>
        <Link href="/docs/keyframes" className={style.content}>
          Keyframes
        </Link>
        <Link href="/docs/dark-mode" className={style.content}>
          Dark Mode
        </Link>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>Cummunity</div>
        <Link href="/docs/basic" className={style.content}>
          Contribution
        </Link>
      </div>
    </div>
  );
}

// const style = applyClientStyle({
//   componentId: "components/Docs/SideMenu",
//   container: {
//     width: 300,
//     position: "sticky",
//     top: "70px",
//     fontSize: 14,
//     padding: "16px 0",
//     height: 200,
//   },
//   box: {
//     padding: "6px 27px",
//   },
//   title: {
//     margin: "8px 0",
//   },
//   content: {
//     padding: "6px 3px",
//     display: "block",
//     cursor: "pointer",
//     ":hover": {
//       color: colors[4],
//     },
//   },
// });
