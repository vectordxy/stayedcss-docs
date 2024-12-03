import {
  ConfigType,
  MainInputType,
} from "../../../stayedcss/src/types/client/input";
import { stayedStyle, stayedDarkStyle } from "../../../stayedcss/src";

const config: ConfigType = {};

export const applyStyle = (input: MainInputType) => {
  return stayedStyle(input, config);
};
export const applyDarkStyle = (input: MainInputType) => {
  return stayedDarkStyle(input, config);
};
