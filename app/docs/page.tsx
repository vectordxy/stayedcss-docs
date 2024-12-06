import Content from "@/src/components/docs/Content";
import SideMene from "@/src/components/docs/SideMenu";
import { grayColors } from "@/src/utils/constant";
import { applyStyle } from "@/src/utils/getModule";

export default function Docs() {
  return (
    <div className={style.container}>
      <div className={style.sideMenu}>
        <SideMene />
      </div>
      <div className={style.contentBox}>
        <Content />
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs",
  container: {
    display: "flex",
  },
  sideMenu: {
    paddingTop: 70,
  },
  contentBox: {
    width: "100%",
    paddingTop: 70,
    paddingLeft: 250,
  },
});
