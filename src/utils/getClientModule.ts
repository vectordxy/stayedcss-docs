import {
  changeScreenMode,
  saveScreenMode,
  stayedClientDarkStyle,
  stayedClientStyle,
} from "stayedcss/client";

export const setModeServer = (mode: string) => {
  return saveScreenMode(mode);
};

export const changeMode = (mode: "light" | "dark") => {
  return changeScreenMode(mode);
};

export const applyClientStyle = (input: any) => {
  return stayedClientStyle(input);
};

export const applyClientDarkStyle = (input: any) => {
  return stayedClientDarkStyle(input);
};
