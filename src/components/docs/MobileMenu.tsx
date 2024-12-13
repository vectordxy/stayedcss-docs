"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowDropDown, ArrowDropUp } from "@/src/assets/svg/ArrowDrop";
import { colors, grayColors } from "@/src/constants/colors";
import {
  community,
  gettingStarted,
  setUp,
  styles,
} from "@/src/constants/category";
import { stClient, stClientDark } from "stayedcss/client";

const convertToTitleCase = (str: string): string => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export default function MobileMenu() {
  const pathname = usePathname().split("/");
  const [currentPathname, setCurrentPathname] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPathname(pathname[pathname.length - 1]);
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className={style.container}>
      <div className={style.box} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={style.title}>{convertToTitleCase(currentPathname)}</div>
        {isMenuOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </div>
      {isMenuOpen && (
        <div className={style.categoryBox}>
          {gettingStarted.map((item, index) => (
            <LinkItem
              category="getting-started"
              name={item}
              currentPathname={currentPathname}
              key={index}
            />
          ))}
          {setUp.map((item, index) => (
            <LinkItem
              category="set-up"
              name={item}
              currentPathname={currentPathname}
              key={index}
            />
          ))}
          {styles.map((item, index) => (
            <LinkItem
              category="styles"
              name={item}
              currentPathname={currentPathname}
              key={index}
            />
          ))}
          {community.map((item, index) => (
            <LinkItem
              category="community"
              name={item}
              currentPathname={currentPathname}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const makeLowerCase = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "-");
};

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

const style = stClient({
  componentId: "components/Docs/mobilemenu",
  container: {
    zIndex: 50,
    display: "none",
    position: "fixed",
    top: 70,
    backgroundColor: grayColors[0],
    width: "100%",
  },
  box: {
    height: 60,
    cursor: "pointer",
    width: "100%",
    display: "flex",
    paddingLeft: 21,
    alignItems: "center",
    borderTop: `solid 1px ${grayColors[6]}`,
    borderBottom: `solid 1px ${grayColors[6]}`,
    backgroundColor: grayColors[0],
  },
  title: {
    marginRight: 8,
  },
  categoryBox: {
    height: "100vh",
    padding: "27px 21px",
    backgroundColor: grayColors[0],
  },
  content: {
    padding: "10px 5px",
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
    color: colors[5],
  },
  "@laptop": {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
});

stClientDark({
  componentId: "components/Docs/mobilemenu",
  box: {
    borderTop: `solid 1px ${grayColors[6]}`,
    borderBottom: `solid 1px ${grayColors[6]}`,
    backgroundColor: grayColors[10],
  },
  title: {
    marginRight: 8,
  },
  categoryBox: {
    backgroundColor: grayColors[10],
  },
  content: {
    color: grayColors[3],
    ":hover": {
      color: colors[5],
    },
  },
});
