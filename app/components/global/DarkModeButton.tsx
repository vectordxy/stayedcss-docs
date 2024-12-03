"use client";

import LightMode from "@/app/assets/svg/LightMode";
import { changeMode, applyClientStyle } from "../../utils/getClientModule";
import DarkMode from "@/app/assets/svg/DarkMode";

export default function DarkModeButton() {
  return (
    <div className={style.container}>
      <span onClick={() => changeMode("light")}>
        <LightMode />
      </span>
      <span className={style.button} onClick={() => changeMode("dark")}>
        <DarkMode />
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
