import Container from "@/src/components/docs/Container";
import Content from "@/src/components/docs/DocContent";
import SideMene from "@/src/components/docs/SideMenu";
import { grayColors } from "@/src/utils/constant";
import { applyStyle } from "@/src/utils/getModule";

export default function Docs() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.sideMenu}>
          <SideMene />
        </div>
        <div className={style.contentBox}>
          <Container />
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs",
  container: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  box: {
    width: 1200,
    display: "flex",
  },
  sideMenu: {
    // position: "sticky",
    // top: "120px",
  },
  contentBox: {
    width: "100%",
    // paddingTop: 70,
  },
});
