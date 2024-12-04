import { boldFont } from "@/src/utils/fonts";
import { colors, projectTitle } from "../../utils/constant";
import { applyStyle } from "../../utils/getModule";

export default function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.titleContainer}>
          <div className={`${boldFont.className} ${style.title}`}>
            {projectTitle}
          </div>
        </div>

        <div className={style.leftItems}>
          <div className={style.leftItem}>Docs</div>
          <a
            target="_blank"
            href="https://github.com/vectordxy/stayedcss"
            className={style.leftItem}
          >
            Github
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
    fontSize: 17,
    fontWeight: 500,
  },
  leftItems: {
    display: "flex",
    fontSize: 12,
  },
  leftItem: {
    margin: 10,
    padding: 10,
    textDecoration: "none",
    color: "black",
    ":hover": {
      color: colors[6],
      cursor: "pointer",
    },
  },
});
