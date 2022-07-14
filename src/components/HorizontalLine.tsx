import { FC } from "react";
import "./HorizontalLine.css";
import { BOX_SIZE } from "../config";

type Props = {
  x: number;
  y: number;
  filled: number;
  onClick: (x: number, y: number, dir: "h" | "v") => void;
};

export const Horizontal: FC<Props> = ({ x, y, filled, onClick }) => (
  <div
    className="hori"
    style={{
      left: `${BOX_SIZE * x}px`,
      top: `${BOX_SIZE * y}px`,
      width: `${BOX_SIZE - 3}px`,
      backgroundColor: filled ? "#777" : "#ccc",
    }}
    onClick={() => onClick(x, y, "h")}
  />
);
