"use client";

import { changeMode } from "./css-module/getClientModule";

export default function Button() {
  return (
    <div>
      <button onClick={() => changeMode("light")}>Light</button>
      <button onClick={() => changeMode("dark")}>Dark</button>
    </div>
  );
}
