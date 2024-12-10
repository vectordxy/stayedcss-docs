import { ReactNode } from "react";
import { boldFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={title.replaceAll(" ", "-")}>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Section",
  content: {
    marginTop: 32,
    height: "90vh",
    lineHeight: "1.5em",
  },
  title: {
    fontSize: 32,
    marginTop: 9,
  },
});
