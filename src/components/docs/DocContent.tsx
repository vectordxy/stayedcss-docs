import { colors, grayColors } from "@/src/utils/constant";
import { boldFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function DocContent() {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <Content title="What is stayedcss?" />
        <Content title="Main Features" />
        {/* <Content /> */}
      </div>
      <OnThisPage />
    </div>
  );
}

function Content({ title }: { title: string }) {
  return (
    <div id={title.replaceAll(" ", "-")} className={style.section}>
      <div className={style.subTitle}>Introduction</div>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.contentBox}>
        <div className={style.content}>
          The powerful and simple CSS library for Next.js.
        </div>
      </div>
    </div>
  );
}

function OnThisPage() {
  return (
    <div className={style.category}>
      <div className={`${boldFont.className} ${style.categoryTitle}`}>
        On this page
      </div>
      <div className={style.categoryBox}>
        <a href="#What-is-stayedcss" className={style.categoryItem}>
          What is stayedcss?
        </a>
        <a href="#Main-Features" className={style.categoryItem}>
          Main Features
        </a>
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
    minWidth: 740,
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
  section: {
    // paddingTop: 70,
  },
  category: {
    display: "block",
    fontSize: 14,
    width: 230,
    paddingTop: 70,
  },
  categoryBox: {
    //
  },
  categoryTitle: {
    padding: "6px 0",
  },
  categoryItem: {
    display: "block",
    textDecoration: "none",
    color: "black",
    padding: "6px 0",
    cursor: "pointer",
    ":hover": {
      color: colors[4],
    },
  },
});
