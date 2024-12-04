import Arrow from "@/src/assets/svg/Arrow";
import { colors, grayColors, shadow } from "@/src/utils/constant";
import { boldFont, lightFont, regularFont } from "@/src/utils/fonts";
import { applyDarkStyle, applyStyle } from "@/src/utils/getModule";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>stayedcss:</div>
        <div className={`${lightFont.className} ${style.subTitle}`}>
          Designed by Apple In California” chronicles 20 years of Apple design
          through 450 photographs of our products and the processes used to make
          them. A visual history spanning iMac to Apple Pencil, complete with
          descriptions of innovative materials and techniques, it captures every
          detail with honesty and intention.
          {/* The Modern CSS Library for Next.js. Static First, also Ready for
          Dynamic. */}
        </div>
        <Link
          href="/docs"
          className={`${lightFont.className} ${style.startButton}`}
        >
          Get Started
        </Link>
      </div>
      <div className={style.moreinfo}>
        <Arrow />
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Home/Intro",
  container: {
    minHeight: 800,
    paddingTop: 30,
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
    fontSize: 100,
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
    color: "black",
    ":hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  moreinfo: {
    marginTop: 60,
    padding: 30,
    animation: "bounce 1.5s ease-in-out infinite",
    cursor: "pointer",
  },
  "@desktop": {
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
