import { FC } from "react";
import "./VerticalLine.css";
import { BOX_SIZE } from "../config";

type Props = {
  x: number;
  y: number;
  filled: number;
  onClick: (x: number, y: number, dir: "h" | "v") => void;
};

export const Vertical: FC<Props> = ({ x, y, filled, onClick }) => (
  <div
    className="verti"
    style={{
      left: `${BOX_SIZE * x}px`,
      top: `${BOX_SIZE * y}px`,
      height: `${BOX_SIZE}px`,
      backgroundColor: filled ? "#777" : "#ccc",
    }}
    onClick={() => onClick(x, y, "v")}
  />
);
