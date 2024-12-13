"use client";

import { DarkMode, LightMode } from "@/src/assets/svg/Mode";
import {
  applyClientDarkStyle,
  applyClientStyle,
  changeMode,
} from "../../utils/getClientModule";
import { grayColors } from "@/src/constants/colors";

export default function ModeButton() {
  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={() => changeMode("light")}>
          <LightMode size={15} />
        </button>
        <button className={style.button} onClick={() => changeMode("dark")}>
          <DarkMode size={15} />
        </button>
      </div>
    </div>
  );
}

const style = applyClientStyle({
  componentId: "components/global/ModeButton",
  container: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    margin: "0 10px",
  },
  button: {
    padding: 4,
    margin: 3,
    borderRadius: 15,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      backgroundColor: grayColors[2],
    },
  },
});

applyClientDarkStyle({
  componentId: "components/global/ModeButton",
  button: {
    backgroundColor: grayColors[8],
    ":hover": {
      backgroundColor: grayColors[6],
    },
  },
});
