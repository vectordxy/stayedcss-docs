import { boldFont, lightFont } from "@/src/utils/fonts";
import { colors, grayColors, projectTitle } from "../../utils/constant";
import { applyDarkStyle, applyStyle } from "../../utils/getModule";
import Link from "next/link";
import Github from "@/src/assets/svg/Github";
import ModeButton from "./ModeButton";

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
        <div className={style.leftItems}>
          <Link href="/docs/introduction" className={style.leftItem}>
            Docs
          </Link>

          <a
            target="_blank"
            href="https://github.com/vectordxy/stayedcss"
            className={style.leftItem}
          >
            <Github />
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
    backgroundColor: "white",
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
  leftItems: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
  },
  leftItem: {
    margin: 10,
    padding: 10,
    textDecoration: "none",
    ":hover": {
      color: colors[6],
      cursor: "pointer",
    },
  },
});

applyDarkStyle({
  componentId: "components/Global/NavBar",
  container: {
    backgroundColor: grayColors[10],
  },
  title: {
    color: colors[1],
  },
  leftItem: {
    color: grayColors[2],
  },
});
