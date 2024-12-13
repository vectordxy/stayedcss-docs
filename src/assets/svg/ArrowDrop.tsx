"use client";

import {
  applyClientDarkStyle,
  applyClientStyle,
} from "@/src/utils/getClientModule";

export function ArrowDropDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width="24px"
      className={style.icon}
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
}

export function ArrowDropUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width="24px"
      className={style.icon}
    >
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  );
}

const style = applyClientStyle({
  componentId: "src/svg/arrowdropdown",
  icon: {
    fill: "black",
  },
});

applyClientDarkStyle({
  componentId: "src/svg/arrowdropdown",
  icon: {
    fill: "#d5d5d5",
  },
});
