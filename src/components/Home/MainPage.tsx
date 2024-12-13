import Link from "next/link";

import { boldFont, lightFont } from "@/src/constants/fonts";
import { grayColors } from "@/src/constants/colors";
import { st, stDark } from "stayedcss";

export default function MainPage() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>stayedcss:</div>
        <div className={`${lightFont.className} ${style.subTitle}`}>
          StayedCSS is a static CSS library for the Next.js App Router. It
          supports both server and client components seamlessly, offering
          advanced styling features like pseudo-elements, media queries, and a
          flicker-free dark mode. With its syntax fully aligned with standard
          CSS, StayedCSS provides a powerful way to integrate styling into your
          projects.
          <br />
        </div>
        <Link
          href="/docs/getting-started/introduction"
          className={`${lightFont.className} ${style.startButton}`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

const style = st({
  componentId: "components/Home/MainPage",
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  box: {
    width: 1082,
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
    backgroundColor: grayColors[11],
    color: "white",
    ":hover": {
      backgroundColor: grayColors[7],
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
  },
  "@laptop": {
    title: {
      fontSize: 46,
    },
    startButton: {
      fontSize: 11,
    },
  },
});

stDark({
  componentId: "components/Home/MainPage",
  startButton: {
    backgroundColor: grayColors[8],
    ":hover": {
      backgroundColor: grayColors[6],
    },
  },
});
