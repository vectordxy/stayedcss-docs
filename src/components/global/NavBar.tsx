import { boldFont } from "@/src/utils/fonts";
import { colors, projectTitle } from "../../utils/constant";
import { applyStyle } from "../../utils/getModule";
import DarkModeButton from "./DarkModeButton";
import Github from "@/src/assets/svg/Github";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.titleContainer}>
          <div className={`${boldFont.className} ${style.title}`}>
            {projectTitle}
          </div>
          {/* <DarkModeButton /> */}
        </div>

        <div className={style.leftItems}>
          <div className={style.leftItem}>Docs</div>
          <div className={style.leftItem}>Playground</div>
          <a
            target="_blank"
            href="https://github.com/vectordxy/stayedcss"
            className={style.icon}
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/NavBar",
  container: {
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    width: "100%",
    height: 80,
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
    fontSize: 20,
    fontWeight: 500,
  },
  leftItems: {
    display: "flex",
  },
  leftItem: {
    margin: 10,
    padding: 10,
    fontSize: 14,
    ":hover": {
      color: colors[6],
      cursor: "pointer",
    },
  },
  icon: {
    margin: "10px 5px",
    padding: 8,
    borderRadius: 8,
    ":hover": {
      cursor: "pointer",
    },
  },
});
