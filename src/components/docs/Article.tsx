import { boldFont } from "@/src/constants/fonts";
import { st } from "stayedcss";

export default function Article({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}

const style = st({
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
