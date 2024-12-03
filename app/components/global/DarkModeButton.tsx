"use client";

import { DarkMode, LightMode } from "@/app/assets/svg/Mode";
import { changeMode, applyClientStyle } from "../../utils/getClientModule";

export default function DarkModeButton() {
  return (
    <div className={style.container}>
      <span onClick={() => changeMode("light")}>
        <LightMode size={18} />
      </span>
      <span className={style.button} onClick={() => changeMode("dark")}>
        <DarkMode size={18} />
      </span>
    </div>
  );
}

const style = applyClientStyle({
  componentId: "components/global/DarkModeButton",
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    // backgroundColor: "blue",
  },
});
