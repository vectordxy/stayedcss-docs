import { colors, grayColors, shadow } from "@/src/utils/constant";
import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyDarkStyle, applyStyle } from "@/src/utils/getModule";
import Link from "next/link";

export default function Features() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.leftBox}>
          <div className={`${boldFont.className} ${style.title}`}>
            The CSS Library for Next.js
          </div>
          <div className={`${lightFont.className} ${style.subTitle}`}>
            <span className={`${boldFont.className}`}>
              Static First, also Ready for Dynamic.
            </span>{" "}
            Easily combine static and dynamic styles for your needs. Make your
            projects better with simple CSS tools.
          </div>
          <Link href="/docs" className={style.startButton}>
            Get Started
          </Link>
        </div>
        <div className={style.rightBox}>
          <div className="cube-wrapper">
            <div className="cube">
              <div className="face front">Front</div>
              <div className="face back">Back</div>
              <div className="face left">Left</div>
              <div className="face right">Right</div>
              <div className="face top">Top</div>
              <div className="face bottom">Bottom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Home/Intro",
  container: {
    minHeight: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 1200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftBox: {
    width: "55%",
  },
  rightBox: {
    width: "40%",
  },
  title: {
    fontSize: 48,
  },
  subTitle: {
    margin: "27px 0 70px 0",
    fontSize: 18,
    lineHeight: "1.5em",
  },
  startButton: {
    padding: "18px 20px",
    fontSize: 14,
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
    textDecoration: "none",
    border: "solid 1px black",
    color: "black",
    ":hover": {
      backgroundColor: "black",
      color: "white",
    },
  },

  "@tablet": {
    box: {
      width: "100%",
    },
    title: {
      width: "80%",
      fontSize: 42,
    },
    subTitle: {
      width: "80%",
      margin: "27px 0 70px 0",
      fontSize: 16,
      lineHeight: "1.5em",
    },
  },
});

// applyDarkStyle({
//   componentId: "components/Home/Intro",
//   container: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "blue",
//   },
//   title: {
//     fontSize: 56,
//   },
//   subTitle: {
//     width: 750,
//     margin: "27px 0 70px 0",
//     fontSize: 18,
//     lineHeight: "1.5em",
//   },
//   startButton: {
//     padding: "18px 20px",
//     border: "solid 1px black",
//     fontSize: 14,
//     transition: "background-color 0.2s ease-in-out",
//     ":hover": {
//       borderColor: colors[6],
//       color: colors[6],
//       cursor: "pointer",
//     },
//   },
//   "@tablet": {
//     title: {
//       width: "80%",
//       fontSize: 42,
//     },
//     subTitle: {
//       width: "80%",
//       margin: "27px 0 70px 0",
//       fontSize: 16,
//       lineHeight: "1.5em",
//     },
//   },
// });
