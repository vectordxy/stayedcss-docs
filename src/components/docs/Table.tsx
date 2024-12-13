import { grayColors } from "@/src/constants/colors";
import { st, stDark } from "stayedcss";

export default function Table() {
  return (
    <div className={style.table}>
      <div className={style.thead}>
        <div className={style.th1}>Property</div>
        <div className={style.th2}>Type</div>
        <div className={style.th3}>Description</div>
      </div>
      <div className={style.tbody}>
        <div className={style.tr}>
          <div className={style.td1}>componentId</div>
          <div className={style.td2}>string</div>
          <div className={style.td3}>
            A unique identifier for the component.
          </div>
        </div>
        <div className={style.tr}>
          <div className={`${style.italic} ${style.td1}`}>className</div>
          <div className={style.td2}>object</div>
          <div className={style.td3}>
            User-defined class names representing style objects. Fully
            customizable.
          </div>
        </div>
      </div>
    </div>
  );
}

const style = st({
  componentId: "components/docs/table",
  table: {
    width: "100%",
    fontSize: 13,
    borderCollapse: "collapse",
    marginTop: 21,
    textAlign: "center",
    borderRadius: 5,
  },
  thead: {
    display: "flex",
    padding: "8px 0",
    borderRadius: 2,
  },
  th1: {
    width: "20%",
    color: grayColors[3],
  },
  th2: {
    width: "20%",
    color: grayColors[3],
  },
  th3: {
    width: "60%",
    color: grayColors[3],
  },
  tr: {
    display: "flex",
    width: "100%",
    marginTop: 18,
    backgroundColor: grayColors[10],
  },
  td1: {
    width: "20%",
  },
  td2: {
    width: "20%",
  },
  td3: {
    width: "60%",
  },
  tbody: {
    width: "100%",
  },
  italic: {
    fontStyle: "italic",
  },
});

stDark({
  componentId: "components/docs/table",
  table: {
    color: grayColors[2],
  },
  thead: {
    color: grayColors[2],
    backgroundColor: grayColors[9],
  },
  td: {
    backgroundColor: grayColors[9],
  },
});
