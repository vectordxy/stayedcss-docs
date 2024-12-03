import { colors } from "@/src/utils/constant";
import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={`${boldFont.className} ${style.title}`}>
        The Powerful CSS Library for Next.js
      </div>
      <div className={`${lightFont.className} ${style.subTitle}`}>
        <span className={`${boldFont.className}`}>
          Static First, also Ready for Dynamic.
        </span>{" "}
        Easily combine static and dynamic styles for your needs. Make your
        projects better with simple CSS tools.
      </div>
      <div className={style.startButton}>Get Started</div>
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
  },
  title: {
    fontSize: 56,
  },
  subTitle: {
    width: 750,
    margin: "27px 0 70px 0",
    fontSize: 18,
    lineHeight: "1.5em",
  },
  startButton: {
    padding: "18px 20px",
    border: "solid 1px black",
    fontSize: 14,
    transition: "background-color 0.2s ease-in-out",
    ":hover": {
      borderColor: colors[6],
      color: colors[6],
      cursor: "pointer",
    },
  },
  "@mobile": {
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
