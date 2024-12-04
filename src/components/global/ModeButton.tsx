"use client";

import { DarkMode, LightMode } from "@/src/assets/svg/Mode";
import { applyClientStyle, changeMode } from "../../utils/getClientModule";
import { grayColors } from "@/src/utils/constant";

export default function ModeButton() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={() => changeMode("light")}>
            <LightMode size={18} />
          </button>
          <button className={style.button} onClick={() => changeMode("dark")}>
            <DarkMode size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

const style = applyClientStyle({
  componentId: "components/global/DarkModeButton",
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // 버튼 간격 추가
  },
  buttonContainer: {
    display: "flex",
    margin: "0 10px",
    backgroundColor: grayColors[0],
  },
  button: {
    padding: 6,
    borderRadius: 15,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      backgroundColor: "#ddd",
      borderColor: "#aaa",
    },
  },
});
