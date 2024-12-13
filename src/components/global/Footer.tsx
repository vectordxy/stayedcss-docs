import { grayColors } from "@/src/constants/colors";
import { applyClientDarkStyle } from "@/src/utils/getClientModule";
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
  componentId: "components/global/footer",
  container: {
    width: "100%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    backgroundColor: grayColors[11],
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    padding: "50px 0",
    color: grayColors[3],
  },
});
