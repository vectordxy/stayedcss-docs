import { grayColors } from "@/src/utils/constant";
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
  componentId: "component/global/footer",
  container: {
    width: "100%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    padding: "50px 0",
    color: grayColors[5],
  },
});
