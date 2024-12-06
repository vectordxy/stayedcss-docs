import Content from "@/src/components/docs/Content";
import SideMene from "@/src/components/docs/SideMenu";
import { applyStyle } from "@/src/utils/getModule";

export default function Docs() {
  return (
    <div className={style.container}>
      <SideMene />
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
  contentBox: {
    paddingTop: 80,
    paddingLeft: 320,
  },
});
