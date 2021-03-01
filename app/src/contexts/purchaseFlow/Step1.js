import React from "react";
import { Grid } from "@rowsncolumns/grid";
import { Layer, Rect } from "react-konva";
import { GridCell, CELL_SIZE } from "../../components/Grid";
import { getRectSize } from "./utils";
import { Typography } from "antd";
import { PREVIEW_HEIGHT, PREVIEW_WIDTH } from "./constants";

const { Text } = Typography;

const Step1 = ({ selection }) => {
  const rectProps = getRectSize({
    selection,
    PREVIEW_HEIGHT,
    PREVIEW_WIDTH,
    CELL_SIZE,
  });

  const { width, height, ...otherProps } = rectProps;

  return (
    <>
      <div style={{ width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT }}>
        <Grid
          rowHeight={() => CELL_SIZE}
          columnWidth={() => CELL_SIZE}
          rowCount={PREVIEW_HEIGHT / CELL_SIZE}
          columnCount={PREVIEW_WIDTH / CELL_SIZE}
          width={PREVIEW_WIDTH}
          height={PREVIEW_WIDTH}
          itemRenderer={(props) => {
            return <GridCell {...props} />;
          }}
        >
          {({ scrollTop, scrollLeft }) => {
            return (
              <Layer>
                <Rect
                  fill="rgb(14, 101, 235, 0.1)"
                  stroke="#1a73e8"
                  strokeWidth={1}
                  width={width - 3}
                  height={height - 3}
                  {...otherProps}
                />
              </Layer>
            );
          }}
        </Grid>
      </div>
      <Text>
        Your selection is {width} by {height} pixels. The estimated cost is{" "}
        {(width * height).toLocaleString()} sols at a rate of 1 sol/pixel.
      </Text>
    </>
  );
};

export default Step1;
