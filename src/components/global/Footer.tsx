import { colors, grayColors } from "@/src/utils/constant";
import { applyStyle } from "@/src/utils/getModule";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        Copyright 2024. vectordxy All Rights Reserved.
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "component/global/Footer",
  container: {
    width: "100%",
    height: 300,
    display: "flex",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    color: grayColors[5],
    borderTop: `solid 1px ${grayColors[2]}`,
  },
});
