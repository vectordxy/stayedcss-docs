import SideMenu from "@/src/components/docs/SideMenu";
import { applyStyle } from "@/src/utils/getModule";
import { ReactNode } from "react";

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={style.acontainer}>
      <div className={style.box}>
        <SideMenu />
        <div className={style.layout}>
          <div className={style.frame}>{children}</div>
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Layout",
  acontainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  box: {
    width: 1200,
    display: "flex",
    paddingTop: 70,
  },
  layout: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 24,
  },
  frame: {
    lineHeight: "1.5em",
    minWidth: 900,
  },
});
