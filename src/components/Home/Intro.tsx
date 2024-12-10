import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";
import Link from "next/link";
import { text } from "./dummydata";
import { grayColors } from "@/src/utils/constant";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>stayedcss:</div>
        <div className={`${lightFont.className} ${style.subTitle}`}>{text}</div>
        <Link
          href="/docs/introduction"
          className={`${lightFont.className} ${style.startButton}`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Home/Intro",
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  box: {
    width: 1200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
  },
  subTitle: {
    width: "80%",
    margin: "32px 0 42px 0",
    fontSize: 16,
    lineHeight: "1.5em",
    textAlign: "center",
  },
  startButton: {
    padding: "18px 20px",
    fontSize: 12,
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
    textDecoration: "none",
    borderRadius: 3,
    // boxShadow: shadow,
    backgroundColor: "black",
    color: "white",
    ":hover": {
      backgroundColor: grayColors[7],
      // color: "white",
    },
  },
  "@desktop": {
    box: {
      width: "100%",
    },
    title: {
      fontSize: 60,
    },
    subTitle: {
      fontSize: 14,
    },
    startButton: {
      fontSize: 12,
    },
  },
});
