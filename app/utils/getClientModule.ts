import {
  saveScreenMode,
  changeScreenMode,
  stayedClientStyle,
} from "../../../stayedcss/src/client";
import { MainInputType } from "../../../stayedcss/src/types/client/input";

export const setModeServer = (mode: string) => {
  return saveScreenMode(mode);
};

export const changeMode = (mode: "light" | "dark") => {
  return changeScreenMode(mode);
};
export const applyClientStyle = (input: MainInputType) => {
  return stayedClientStyle(input);
};
