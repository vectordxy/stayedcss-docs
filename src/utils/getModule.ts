import { stayedcssDark, stayedcss } from "../../node_modules/stayedcss/src";

import { MainInput } from "../../node_modules/stayedcss/src/client";

export const applyStyle = (input: MainInput) => {
  return stayedcss(input);
};

export const applyDarkStyle = (input: MainInput) => {
  return stayedcssDark(input);
};
