import { colors } from "@/app/utils/constant";
import { boldFont } from "@/app/utils/fonts";
import { applyStyle } from "@/app/utils/getModule";

export default function Intro() {
  return (
    <div className={style.container}>
      <div className={`${boldFont.className} ${style.title}`}>
        The Static CSS Library for Next.js
      </div>
      <div className={style.subTitle}>
        Don't need to import 'use client'. Optimized for server-side rendering
        and performance.
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
    fontWeight: 600,
  },
  subTitle: {
    margin: 30,
    fontSize: 18,
    color: colors[5],
  },
  buttonContainer: {
    display: "flex",
  },
  startButton: {
    padding: "18px 20px",
    backgroundColor: colors[2],
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
