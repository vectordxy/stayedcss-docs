import { colors } from "@/app/utils/constant";
import { applyStyle } from "@/app/utils/getModule";

export default function Intro() {
  return (
    <div className={style.container}>
      <p className={style.title}>A Static CSS Library for Next.js</p>
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
    fontSize: 60,
    fontWeight: 600,
  },
  startButton: {
    backgroundColor: colors[4],
    padding: "18px 20px",
    color: colors[0],
    borderRadius: 10,
    transition: "background-color 0.3s ease-in-out",
    ":hover": {
      backgroundColor: "black",
      cursor: "pointer",
    },
  },
});
