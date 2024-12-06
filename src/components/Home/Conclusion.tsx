import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function ConClusion() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Like it? Try it.
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Home/Features",
  container: {
    // minHeight: 800,
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  box: {
    width: 1000,
    minHeight: 600,
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  title: {
    fontSize: 48,
    width: "48%",
  },
  underline: {
    textDecoration: "none",
  },
  subTitle: {
    width: "42%",
    fontSize: 18,
    lineHeight: "1.5em",
    // textAlign: "center",
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
