import { stayedDarkStyle, stayedStyle } from "../../node_modules/stayedcss/src";

import { MainInput } from "../../node_modules/stayedcss/src/client";

export const applyStyle = (input: MainInput) => {
  return stayedStyle(input);
};

export const applyDarkStyle = (input: MainInput) => {
  return stayedDarkStyle(input);
};
