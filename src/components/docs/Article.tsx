import { ReactNode } from "react";
import { boldFont } from "@/src/constants/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function Article({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Article",
  title: {
    fontSize: 36,
    marginTop: 9,
  },
  content: {
    marginTop: 24,
    lineHeight: "1.5em",
  },
  "@tablet": {
    title: {
      fontSize: 24,
    },
    content: {
      fontSize: 14,
    },
  },
});
