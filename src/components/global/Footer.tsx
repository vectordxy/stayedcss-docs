import { colors, grayColors, shadow } from "@/src/utils/constant";
import { applyStyle } from "@/src/utils/getModule";
import ModeButton from "./ModeButton";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <ModeButton />
        Copyright 2024. vectordxy All Rights Reserved.
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "component/global/Footer",
  container: {
    width: "100%",
    height: 200,
    display: "flex",
    justifyContent: "center",
  },
  box: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    padding: "50px 0",
    // color: grayColors[5],
    borderTop: `solid 1px black`,
  },
});
