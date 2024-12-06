import { grayColors } from "@/src/utils/constant";
import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function Content() {
  return (
    <div className={style.container}>
      <div className={`${lightFont.className} ${style.subTitle}`}>
        Introduction
      </div>
      <div className={`${boldFont.className} ${style.title}`}>
        What is stayedcss?
      </div>
      <div className={style.content}>
        The Library, stayedcss, is a powerful, modern and simple css library for
        Next.js.
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Content",
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 32,
  },
  subTitle: {
    fontSize: 14,
    color: grayColors[7],
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
  },
  content: {
    marginTop: 32,
    lineHeight: "1.5em",
  },
});
