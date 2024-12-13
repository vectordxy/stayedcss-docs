import { applyStyle } from "@/src/utils/getModule";
import { boldFont } from "@/src/constants/fonts";

export default function Content({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.children}>{children}</div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/docs/content",
  container: {
    margin: "12px 0",
  },
  title: {
    paddingTop: 5,
    fontSize: 18,
  },
  children: {
    padding: "5px 0",
  },
});
