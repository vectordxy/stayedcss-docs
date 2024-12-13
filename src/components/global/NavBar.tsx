import Link from "next/link";

import ModeButton from "./ModeButton";

import { applyDarkStyle, applyStyle } from "../../utils/getModule";
import { projectTitle } from "@/src/constants/title";
import { boldFont, lightFont } from "@/src/constants/fonts";
import { colors, grayColors } from "@/src/constants/colors";

export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.titleContainer}>
          <Link href="/" className={`${boldFont.className} ${style.title}`}>
            {projectTitle}
          </Link>
          <div className={`${lightFont.className} ${style.beta}`}>beta</div>
          <ModeButton />
        </div>
        <div className={style.linkItems}>
          <Link
            href="/docs/getting-started/introduction"
            className={style.linkItem}
          >
            Docs
          </Link>
          <a
            target="_blank"
            href="https://github.com/vectordxy/stayedcss"
            className={style.linkItem}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Global/NavBar",
  container: {
    zIndex: 100,
    backgroundColor: grayColors[0],
    position: "fixed",
    top: 0,
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
  },
  box: {
    width: "100%",
    padding: "0 36px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    textDecoration: "none",
  },
  beta: {
    fontSize: 12,
    margin: 6,
    paddingTop: 1,
  },
  linkItems: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
  },
  linkItem: {
    marginLeft: 10,
    padding: 10,
    cursor: "pointer",
    ":hover": {
      color: colors[6],
    },
  },
});

applyDarkStyle({
  componentId: "components/Global/NavBar",
  container: {
    backgroundColor: grayColors[10],
  },
  title: {
    color: grayColors[2],
  },
  linkItem: {
    color: grayColors[2],
    ":hover": {
      color: colors[5],
    },
  },
});
