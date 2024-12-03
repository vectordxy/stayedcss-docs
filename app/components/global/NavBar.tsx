import { colors, projectTitle } from "../../utils/constant";
import { applyStyle } from "../../utils/getModule";
// import GithubIcon from "../../../assets/github.svg";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <span className={styles.title}>{projectTitle}</span>
          {/* <span className={styles.version}>v{projectVersion}</span> */}
        </div>
        <div className={styles.leftItems}>
          <div className={styles.leftItem}>Playground</div>
          <div className={styles.leftItem}>Docs</div>
          {/* <GithubIcon /> */}
        </div>
      </div>
    </div>
  );
}

const styles = applyStyle({
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
