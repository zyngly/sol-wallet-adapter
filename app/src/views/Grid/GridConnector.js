import React, { useState, useContext, useEffect } from "react";
import Grid from "./Grid";
import { getCellData } from "./utils";
import { useApi } from "../../contexts/api";

const GridConnector = (props) => {
  const { data, handleAddCell } = useApi();
  const [mergedCells, setMergedCells] = useState();
  const [cellData, setCellData] = useState();

  useEffect(() => {
    const { mergedCells, cellData } = getCellData(data);
    setMergedCells(mergedCells);
    setCellData(cellData);
  }, [data]);

  return (
    <Grid
      mergedCells={mergedCells}
      cellData={cellData}
      handleAddCell={handleAddCell}
      {...props}
    />
  );
};

export default GridConnector;
