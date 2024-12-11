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
    <div className={style.container} id={title.replaceAll(" ", "-")}>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Section",
  container: {
    marginBottom: 60,
  },
  content: {
    marginTop: 32,
    lineHeight: "1.5em",
  },
  title: {
    fontSize: 32,
    marginTop: 9,
  },
});
