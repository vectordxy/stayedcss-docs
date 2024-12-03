"use client";

import { applyStyle } from "@/app/utils/getModule";
import { changeMode, applyClientStyle } from "../../utils/getClientModule";

export default function DarkModediv() {
  return (
    <>
      <div className={style.container}>
        <div onClick={() => changeMode("light")}>Light</div>
        <div className={style.button} onClick={() => changeMode("dark")}>
          Dark
        </div>
      </div>
    </>
  );
}

const style = applyClientStyle({
  componentId: "components/global/DarkModediv",
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
  },
});
