import { colors } from "@/app/utils/constant";
import { boldFont, lightFont } from "@/app/utils/fonts";
import { applyStyle } from "@/app/utils/getModule";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={`${boldFont.className} ${style.title}`}>
        The Powerful CSS Library for Next.js
      </div>
      <div className={`${lightFont.className} ${style.subTitle}`}>
        <span className={`${boldFont.className}`}>
          Static First, Also Ready for Dynamic.
        </span>{" "}
        Easily combine static and dynamic styles for your needs. Make your
        projects better with simple CSS tools.
      </div>
      <div className={style.buttonContainer}>
        <div className={style.startButton}>Get Started</div>
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
  },
  title: {
    fontSize: 60,
  },
  subTitle: {
    width: 900,
    margin: "27px 0 70px 0",
    fontSize: 18,
    color: colors[7],
    lineHeight: "1.5em",
  },
  buttonContainer: {
    display: "flex",
  },
  startButton: {
    padding: "18px 20px",
    backgroundColor: colors[0],
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    borderRadius: 10,
    fontSize: 14,
    transition: "background-color 0.2s ease-in-out",
    ":hover": {
      backgroundColor: colors[1],
      cursor: "pointer",
    },
  },
});
