import React from "react";
import { Rect } from "react-konva";

export const CELL_SIZE = 20;

const getCellProps = ({ image, link, width, height, ...otherProps }) => {
  if (!image && !link) {
    return { fill: "rgba(255,255,255,.3)" };
  }

  const fillPatternImage = new window.Image();
  fillPatternImage.src = image;

  const scale = height / fillPatternImage.height;

  const imageProps = image && {
    fillPatternImage,
    fillPatternScaleX: scale,
    fillPatternScaleY: scale,
    // fillPatternOffsetX: -(width * scale - (width / 2) * scale),
    // fillPatternOffsetY: -(height * scale - (height / 2) * scale),
  };

  const linkProps = link && {
    onMouseEnter: (e) => {
      // style stage container:
      const container = e.target.getStage().container();
      container.style.cursor = "pointer";
    },
    onMouseLeave: (e) => {
      const container = e.target.getStage().container();
      container.style.cursor = "default";
    },
  };

  if (image || link) {
    return {
      ...imageProps,
      ...linkProps,
    };
  }
};

export const GridCell = ({ x, y, width, height, image, link }) => {
  return (
    <Rect
      key={`${x}${y}`}
      x={x}
      y={y}
      cornerRadius={1}
      height={height - 2}
      width={width - 2}
      margin={1}
      cursor="pointer"
      {...getCellProps({ image, link, width, height })}
    />
  );
};

export default GridCell;
