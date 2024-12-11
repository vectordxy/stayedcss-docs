import { MainInput } from "../../node_modules/stayedcss/src/client";
import { stayedStyle, stayedDarkStyle } from "../../node_modules/stayedcss/src";

export const applyStyle = (input: MainInput) => {
  return stayedStyle(input);
};

export const applyDarkStyle = (input: MainInput) => {
  return stayedDarkStyle(input);
};
