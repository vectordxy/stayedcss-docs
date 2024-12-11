import {
  changeScreenMode,
  saveScreenMode,
  stayedClientDarkStyle,
  stayedClientStyle,
  MainInput,
} from "../../node_modules/stayedcss/src/client";

export const setModeServer = (mode: string) => {
  return saveScreenMode(mode);
};

export const changeMode = (mode: "light" | "dark") => {
  return changeScreenMode(mode);
};

export const applyClientStyle = (input: MainInput) => {
  return stayedClientStyle(input);
};

export const applyClientDarkStyle = (input: MainInput) => {
  return stayedClientDarkStyle(input);
};
