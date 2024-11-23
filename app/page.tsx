import { lib } from "./lib";

export default function Home() {
  const mainStyle = {
    name: "button",
    component: "Home",
    style: {
      backgroundColor: "blue",
      color: "white",
      padding: "100px",
    },
  };
  return <div className={lib(mainStyle)}>hello world</div>;
}
