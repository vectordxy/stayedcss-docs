import {
  stayedClientStyle,
  changeScreenMode,
  saveScreenMode,
} from "../../node_modules/stayedcss/src/client";

export const setModeServer = (mode: string) => {
  return saveScreenMode(mode);
};

export const changeMode = (mode: "light" | "dark") => {
  return changeScreenMode(mode);
};

export const applyClientStyle = (input: any) => {
  return stayedClientStyle(input);
};
