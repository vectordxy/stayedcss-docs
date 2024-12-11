import {
  changeScreenMode,
  MainInput,
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

export const applyClientStyle = (input: MainInput) => {
  return stayedClientStyle(input);
};

export const applyClientDarkStyle = (input: MainInput) => {
  return stayedClientDarkStyle(input);
};
