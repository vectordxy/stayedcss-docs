import { grayColors } from "@/src/utils/constant";
import { boldFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function DocContent() {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.subTitle}>Introduction</div>
        <Content title="What is stayedcss?" />
        <Content title="Main Features" />
      </div>
    </div>
  );
}

function Content({ title }: { title: string }) {
  return (
    <div id={title.replaceAll(" ", "-")}>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.contentBox}>
        <div className={style.content}>
          The powerful and simple CSS library for Next.js.
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Content",
  container: {
    display: "flex",
  },
  contentContainer: {
    color: grayColors[9],
    lineHeight: "1.5em",
    paddingTop: 70,
    minWidth: 900,
  },
  content: {
    marginTop: 32,
    height: "90vh",
    color: grayColors[9],
    lineHeight: "1.5em",
  },
  subTitle: {
    fontSize: 14,
    color: grayColors[7],
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
  },
});
