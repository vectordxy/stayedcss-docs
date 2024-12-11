import {
  changeScreenMode,
  saveScreenMode,
  stayedcssClientDark,
  stayedcssClient,
  MainInput,
} from "../../node_modules/stayedcss/src/client";

export const setModeServer = (mode: string) => {
  return saveScreenMode(mode);
};

export const changeMode = (mode: "light" | "dark") => {
  return changeScreenMode(mode);
};

export const applyClientStyle = (input: MainInput) => {
  return stayedcssClient(input);
};

export const applyClientDarkStyle = (input: MainInput) => {
  return stayedcssClientDark(input);
};
