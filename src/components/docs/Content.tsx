import CodeBlock from "@/app/CodeBlock";
import { colors, grayColors } from "@/src/utils/constant";
import { boldFont, lightFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function Content() {
  return (
    <div className={style.container}>
      <div className={`${lightFont.className} ${style.subTitle}`}>
        Introduction
      </div>
      <div
        id="what-is-stayedcss"
        className={`${boldFont.className} ${style.title}`}
      >
        What is stayedcss?
      </div>
      <div className={style.contentBox}>
        <div className={style.content}>
          The powerful and simple CSS library for Next.js.
        </div>
        <div className={style.category}>
          <div className={`${boldFont.className}`}>On this page</div>
          <div>What is stayedcss?</div>
          <div>Main Features</div>
        </div>
      </div>
      <div className={style.code}>
        {/* <CodeBlock
          code={`const hello = "world";            
console.log(hello);`}
          language="javascript"
        /> */}
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Content",
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "42px 0 0 42px",
    borderTop: `solid 1px ${grayColors[5]}`,
  },
  subTitle: {
    fontSize: 14,
    color: grayColors[7],
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
  },
  contentBox: {
    display: "flex",
  },
  content: {
    marginTop: 32,
    color: grayColors[9],
    lineHeight: "1.5em",
  },
  category: {
    position: "fixed",
    right: 0,
    top: 110,
    fontSize: 14,
    width: 200,
  },

  code: {
    width: "90%",
  },
});
