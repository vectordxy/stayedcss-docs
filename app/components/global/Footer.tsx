import { colors } from "@/app/utils/constant";
import { applyStyle } from "@/app/utils/getModule";

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          Copyright 2024. vectordxy All Rights Reserved.
        </div>
      </div>
    </>
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
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    color: colors[5],
    borderTop: `solid 1px ${colors[1]}`,
  },
});
