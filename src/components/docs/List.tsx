import { grayColors } from "@/src/utils/constant";
import { applyStyle } from "@/src/utils/getModule";

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

const style = applyStyle({
  componentId: "components/docs/list",
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  item: {
    fontSize: 14,
    padding: "4px 8px",
    backgroundColor: grayColors[9],
    borderRadius: 2,
    color: grayColors[3],
  },
});
