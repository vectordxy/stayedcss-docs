import { applyDarkStyle, applyStyle } from "@/src/utils/getModule";
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

const style = applyStyle({
  componentId: "components/docs/list",
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    margin: "16px 0",
  },
  item: {
    fontSize: 14,
    padding: "4px 8px",
    backgroundColor: grayColors[1],
    borderRadius: 2,
    color: grayColors[8],
  },
});

applyDarkStyle({
  componentId: "components/docs/list",
  item: {
    backgroundColor: grayColors[9],
    color: grayColors[3],
  },
});
