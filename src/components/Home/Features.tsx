import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";
import Link from "next/link";

export default function Features() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          <div>
            Not only <span className={style.underline}>Static -</span>
            <br /> But also Dynamic.
          </div>
          <div className={`${lightFont.className} ${style.subTitle}`}>
            Designed by Apple In California” chronicles 20 years of Apple design
            through 450 photographs of our products and the processes used to
            make them. A visual history spanning iMac to Apple Pencil, complete
            with descriptions of innovative materials and techniques, it
            captures every detail with honesty and intention.
            {/* The Modern CSS Library for Next.js. Static First, also Ready for
          Dynamic. */}
          </div>
        </div>
        <div></div>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          No learning curve, you already knows.
        </div>
        <div className={`${lightFont.className} ${style.subTitle}`}>
          Designed by Apple In California” chronicles 20 years of Apple design
          through 450 photographs of our products and the processes used to make
          them. A visual history spanning iMac to Apple Pencil, complete with
          descriptions of innovative materials and techniques, it captures every
          detail with honesty and intention.
        </div>
      </div>
      <div className={style.box}>
        <div className={`${boldFont.className} ${style.title}`}>
          Less Dependencies, Make it lightweight.
        </div>
        <div className={`${lightFont.className} ${style.subTitle}`}>
          Designed by Apple In California” chronicles 20 years of Apple design
          through 450 photographs of our products and the processes used to make
          them. A visual history spanning iMac to Apple Pencil, complete with
          descriptions of innovative materials and techniques, it captures every
          detail with honesty and intention.
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
    // width: "42%",
    fontSize: 18,
    lineHeight: "1.5em",
    // textAlign: "center",
  },
  // "@desktop": {
  //   box: {
  //     width: "100%",
  //   },
  //   title: {
  //     width: "80%",
  //     fontSize: 42,
  //   },
  //   subTitle: {
  //     width: "80%",
  //     margin: "27px 0 70px 0",
  //     fontSize: 16,
  //     lineHeight: "1.5em",
  //   },
  // },
});
