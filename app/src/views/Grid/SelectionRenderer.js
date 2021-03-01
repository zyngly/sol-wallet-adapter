import React from "react";
import { Selection } from "@rowsncolumns/grid";

const SelectionRenderer = ({
  x,
  y,
  width,
  height,
  inProgress,
  ...otherProps
}) => {
  return (
    <Selection
      width={width - 3}
      height={height - 3}
      x={x}
      y={y}
      key={`${x}${y}`}
      {...otherProps}
    />
  );
};

export default SelectionRenderer;
