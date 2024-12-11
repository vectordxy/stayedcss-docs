import SideMenu from "@/src/components/docs/SideMenu";
import { applyStyle } from "@/src/utils/getModule";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.sidemenu}>
          <SideMenu />
        </div>
        <div className={style.layout}>
          <div className={style.frame}>{children}</div>
        </div>
      </div>
    </div>
  );
}

const style = applyStyle({
  componentId: "components/Docs/Layout",
  container: {
    display: "flex",
    justifyContent: "center",
  },
  box: {
    width: 1180,
    display: "flex",
    paddingTop: 70,
  },
  sidemenu: {
    display: "inline-block",
  },
  layout: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 24,
  },
  frame: {
    lineHeight: "1.5em",
    maxWidth: 820,
  },
  "@desktop": {
    box: {
      width: "100%",
    },
    frame: {
      lineHeight: "1.5em",
      minWidth: "100%",
    },
  },
  "@laptop": {
    box: {
      padding: "70px 32px",
    },
    sidemenu: {
      display: "none",
    },
  },
});
