import { st, stDark } from "stayedcss";
import { grayColors } from "@/src/constants/colors";

export default function TextBlock({ children }: { children: string }) {
  return <span className={style.text}>{children}</span>;
}

const style = st({
  componentId: "components/docs/textblock",
  text: {
    fontSize: 14,
    padding: "2px 5px",
    margin: "0 1px",
    borderRadius: 3,
    backgroundColor: grayColors[2],
  },
});

stDark({
  componentId: "components/docs/textblock",
  text: {
    fontSize: 14,
    padding: "2px 5px",
    margin: "0 1px",
    borderRadius: 3,
    backgroundColor: grayColors[8],
  },
});
