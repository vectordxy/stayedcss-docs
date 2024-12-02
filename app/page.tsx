import Button from "./Button";
import { style, darkStyle } from "./css-module/getModule";

export default function Home() {
  const styles = style({
    componentName: "Home",
    button: {
      backgroundColor: "yellow",
      padding: 10,
      ":hover": {
        backgroundColor: "red",
      },
    },
  });

  darkStyle({
    componentName: "Home",
    button: {
      backgroundColor: "blue",
      padding: 10,
      ":hover": {
        backgroundColor: "black",
      },
    },
  });

  return (
    <div>
      <div className={styles.button}>hello</div>
      <Button />
    </div>
  );
}
