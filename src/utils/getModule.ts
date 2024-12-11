import { stayedDarkStyle, stayedStyle } from "stayedcss";
import { MainInput } from "stayedcss/client";

export const applyStyle = (input: MainInput) => {
  return stayedStyle(input);
};

export const applyDarkStyle = (input: MainInput) => {
  return stayedDarkStyle(input);
};
