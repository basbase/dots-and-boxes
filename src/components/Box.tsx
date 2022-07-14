import { FC } from "react";
import "./Box.css";
import { BOX_SIZE } from "../config";

type Props = {
  x: number;
  y: number;
  owner: number;
};

const colors = ["#E6E6E6FF", "#ff8888", "#88ff88", "#77bbff", "#ffff77"];

export const Box: FC<Props> = ({ x, y, owner }) => (
  <div
    className="box"
    style={{
      left: `${BOX_SIZE * x}px`,
      top: `${BOX_SIZE * y}px`,
      width: `${BOX_SIZE}px`,
      height: `${BOX_SIZE}px`,
      backgroundColor: colors[owner],
    }}
  >
    <div className="label">{owner || ""}</div>
  </div>
);
