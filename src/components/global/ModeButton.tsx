"use client";

import { grayColors } from "@/src/constants/colors";
import { DarkMode, LightMode } from "@/src/assets/svg/Mode";
import { changeScreenMode, stClient, stClientDark } from "stayedcss/client";

export default function ModeButton() {
  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          onClick={() => changeScreenMode("light")}
        >
          <LightMode size={15} />
        </button>
        <button
          className={style.button}
          onClick={() => changeScreenMode("dark")}
        >
          <DarkMode size={15} />
        </button>
      </div>
    </div>
  );
}

const style = stClient({
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

stClientDark({
  componentId: "components/global/ModeButton",
  button: {
    backgroundColor: grayColors[8],
    ":hover": {
      backgroundColor: grayColors[6],
    },
  },
});
