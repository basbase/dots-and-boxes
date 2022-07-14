import { FC } from "react";
import { Dot } from "./Dot";
import "./Grid.css";
import { BOX_SIZE } from "../config";
import { Horizontal } from "./HorizontalLine";
import { Vertical } from "./VerticalLine";
import { Box } from "./Box";

type Props = {
  columns: number;
  rows: number;
};

const range = (r: number): number[] =>
  Array(r)
    .fill(0)
    .map((v, i) => i);

const horizontalLines = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
const verticalLines = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const boxes = [
  [0, 0, 0, 0, 0],
  [0, 3, 0, 2, 0],
  [0, 0, 0, 2, 0],
  [0, 4, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

const onClick = (x: number, y: number, dir: "h" | "v") => {
  console.log("click", x, y, dir);
};

export const Grid: FC<Props> = ({ columns, rows }) => (
  <div
    className="grid"
    style={{
      width: `${BOX_SIZE * columns + 20}px`,
      height: `${BOX_SIZE * rows + 20}px`,
    }}
  >
    {boxes.map((row, y) => (
      <>
        {row.map((owner, x) => (
          <Box x={x} y={y} owner={owner} />
        ))}
      </>
    ))}
    {horizontalLines.map((row, y) => (
      <>
        {row.map((filled, x) => (
          <Horizontal x={x} y={y} filled={filled} onClick={onClick} />
        ))}
      </>
    ))}
    {verticalLines.map((row, y) => (
      <>
        {row.map((filled, x) => (
          <Vertical x={x} y={y} filled={filled} onClick={onClick} />
        ))}
      </>
    ))}

    {range(rows + 1).map((y) => (
      <>
        {range(columns + 1).map((x) => (
          <Dot x={x} y={y} />
        ))}
      </>
    ))}
  </div>
);
