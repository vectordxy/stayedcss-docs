import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";
import Link from "next/link";
import { text } from "./dummydata";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>stayedcss:</div>
        <div className={`${lightFont.className} ${style.subTitle}`}>{text}</div>
        <Link
          href="/docs"
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
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  box: {
    width: 1000,
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
    fontSize: 14,
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
    textDecoration: "none",
    border: "solid 1px black",
    borderRadius: 2,
    color: "black",
    ":hover": {
      backgroundColor: "black",
      color: "white",
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
