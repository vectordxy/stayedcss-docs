import { boldFont } from "@/app/utils/fonts";
import { colors, projectTitle } from "../../utils/constant";
import { applyStyle } from "../../utils/getModule";
import DarkModeButton from "./DarkModeButton";
// import GithubIcon from "../../../assets/github.svg";
export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.titleContainer}>
          <div className={`${boldFont.className} ${style.title}`}>
            {projectTitle}
          </div>
          <DarkModeButton />
          {/* <span className={styles.version}>v{projectVersion}</span> */}
        </div>
        <div className={style.leftItems}>
          <div className={style.leftItem}>Docs</div>
          <div className={style.leftItem}>Playground</div>
          {/* <GithubIcon /> */}
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
  version: {
    fontSize: 12,
    padding: "5px 10px",
    margin: 5,
    backgroundColor: colors[1],
    borderRadius: 10,
  },
  leftItems: {
    display: "flex",
  },
  leftItem: {
    margin: 10,
    padding: 10,
    fontSize: 14,
    ":hover": {
      color: colors[4],
      cursor: "pointer",
    },
  },
});
