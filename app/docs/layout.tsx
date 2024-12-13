import { st } from "stayedcss";
import SideMenu from "@/src/components/docs/SideMenu";
import MobileMenu from "@/src/components/docs/MobileMenu";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <MobileMenu />
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

const style = st({
  componentId: "components/docs/layout",
  container: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 100,
    paddingRight: 36,
  },
  box: {
    width: 1180,
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
    container: {
      paddingRight: 0,
    },
    box: {
      width: "90%",
    },
    layout: {
      paddingTop: 84,
    },
    sidemenu: {
      display: "none",
    },
  },
});
