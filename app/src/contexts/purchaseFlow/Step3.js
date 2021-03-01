import React from "react";
import { Input } from "antd";
import { PREVIEW_HEIGHT, PREVIEW_WIDTH } from "./constants";
import { getRectSize } from "./utils";
import { CELL_SIZE } from "../../components/Grid";

const Step3 = ({ image, setLink, setTitle, setLabel, selection }) => {
  const rectProps = getRectSize({
    selection,
    PREVIEW_HEIGHT,
    PREVIEW_WIDTH,
    CELL_SIZE,
  });

  return (
    <>
      <div
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={image}
          style={{ objectFit: "cover" }}
          {...rectProps}
          alt="title"
        />
      </div>
      <Input
        placeholder="Enter your title here"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        placeholder="Enter your label here"
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <Input
        addonBefore="http://"
        placeholder="Enter you URL here"
        onChange={(e) => setLink(e.target.value)}
        required
      />
    </>
  );
};

export default Step3;
