import { colors, grayColors } from "@/src/utils/constant";
import { boldFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function SideMenu() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Getting Started
        </div>
        <div className={style.content}>Introduction</div>
        <div className={style.content}>Installation</div>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Documentation
        </div>
        <div className={style.content}>Basic</div>
        <div className={style.content}>Pseudo</div>
        <div className={style.content}>Media Query</div>
        <div className={style.content}>Keyframes</div>
        <div className={style.content}>Dark Mode</div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/SideMenu",
  container: {
    width: 250,
    height: "100vh",
    position: "fixed",
    fontSize: 14,
    paddingTop: 21,
    borderTop: `solid 1px ${grayColors[5]}`,
    borderRight: `solid 1px ${grayColors[5]}`,
  },
  box: {
    padding: "6px 32px",
  },
  title: {
    margin: "8px 0",
  },
  content: {
    padding: 6,
    cursor: "pointer",
    ":hover": {
      color: colors[4],
    },
  },
});
