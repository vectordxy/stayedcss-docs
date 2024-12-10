import DocContent from "./DocContent";
import { applyStyle } from "@/src/utils/getModule";

export default function Container() {
  return (
    <div className={style.container}>
      <DocContent />
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Container",
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 24,
  },
});
