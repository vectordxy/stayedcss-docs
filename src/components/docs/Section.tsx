import { boldFont } from "@/src/utils/fonts";
import { applyStyle } from "@/src/utils/getModule";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.children}>{children}</div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Section",
  title: {
    fontSize: 21,
  },
  children: {
    margin: "12px 0 36px 0",
  },
});
