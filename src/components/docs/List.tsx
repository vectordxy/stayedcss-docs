import { st, stDark } from "stayedcss";
import { grayColors } from "@/src/constants/colors";

export default function List({ input }: { input: string[] }) {
  return (
    <div className={style.container}>
      {input.sort().map((itemName, index) => (
        <div key={index} className={style.item}>
          {itemName}
        </div>
      ))}
    </div>
  );
}

const style = st({
  componentId: "components/docs/list",
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    margin: "16px 0",
  },
  item: {
    fontSize: 12,
    padding: "4px 8px",
    backgroundColor: grayColors[1],
    borderRadius: 2,
    color: grayColors[8],
  },
});

stDark({
  componentId: "components/docs/list",
  item: {
    backgroundColor: grayColors[9],
    color: grayColors[3],
  },
});
