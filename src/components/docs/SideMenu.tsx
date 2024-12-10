"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { colors } from "@/src/utils/constant";
import { boldFont } from "@/src/utils/fonts";
import { applyClientStyle } from "@/src/utils/getClientModule";
import { applyDarkStyle } from "@/src/utils/getModule";

const gettingStarted = ["Introduction", "Installation"];
const setUp = ["Server Components", "Client Components"];
const styles = ["Basic", "Pseudo", "Media Query", "Dark Mode"];
const contribution = ["Guide"];

const makeLowerCase = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "-");
};

export default function SideMenu() {
  const pathname = usePathname().split("/");
  const [currentPathname, setCurrentPathname] = useState("");

  useEffect(() => {
    setCurrentPathname(pathname[pathname.length - 1]);
  }, [pathname]);

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Getting Started
        </div>
        {gettingStarted.map((item, index) => (
          <LinkItem
            category="getting-started"
            name={item}
            currentPathname={currentPathname}
            key={index}
          />
        ))}
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>Set Up</div>
        {setUp.map((item, index) => (
          <LinkItem
            category="set-up"
            name={item}
            currentPathname={currentPathname}
            key={index}
          />
        ))}
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>Styles</div>
        {styles.map((item, index) => (
          <LinkItem
            category="styles"
            name={item}
            currentPathname={currentPathname}
            key={index}
          />
        ))}
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Contribution
        </div>
        {contribution.map((item, index) => (
          <LinkItem
            category="contribution"
            name={item}
            currentPathname={currentPathname}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function LinkItem({
  category,
  name,
  currentPathname,
}: {
  category: string;
  name: string;
  currentPathname: string;
}) {
  const currentName = makeLowerCase(name);
  return (
    <Link
      href={`/docs/${category}/${currentName}`}
      className={
        currentPathname === currentName ? style.selectedContent : style.content
      }
    >
      {name}
    </Link>
  );
}

const style = applyClientStyle({
  componentId: "components/Docs/SideMenu",
  container: {
    width: 300,
    position: "sticky",
    top: "70px",
    fontSize: 14,
    padding: "16px 0",
    height: 400,
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
      color: colors[5],
    },
  },
  selectedContent: {
    padding: "6px 3px",
    display: "block",
    cursor: "pointer",
    textDecoration: "underline",
    color: colors[5],
  },
});

applyDarkStyle({
  componentId: "components/Docs/SideMenu",
  content: {
    color: colors[1],
  },
});
