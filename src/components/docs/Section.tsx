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
    <div className={style.container}>
      <div className={`${boldFont.className} ${style.title}`}>{title}</div>
      <div className={style.children}>{children}</div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Section",
  container: {
    paddingBottom: 48,
  },
  title: {
    fontSize: 21,
  },
  children: {
    margin: "12px 0",
  },
  "@tablet": {
    title: {
      fontSize: 18,
    },
  },
});
