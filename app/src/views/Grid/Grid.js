import React, { useRef, useCallback } from 'react';
import { Grid, GridRef, useSelection } from '@rowsncolumns/grid';
import { Row, Col } from 'antd';

import { CELL_SIZE, GridCell } from '../../components/Grid';
import { usePurchase } from '../../contexts/purchase';
import { useAdvertise } from '../../contexts/advertise';

import SelectionRenderer from './SelectionRenderer';
import {
  selectionContainsMergedCells,
  areCoordsWithinSelection,
} from './utils';

const rowCount = 35;
const columnCount = 50;

const GridView = ({ mergedCells, cellData, handleAddCell }) => {
  const { setCurrentAdvertisement, advertise } = useAdvertise();
  const { purchase, select } = usePurchase({
    handleAddCell,
  });
  const gridRef = useRef(GridRef);
  const {
    selections,
    onMouseDown,
    clearSelections,
    setActiveCell,
  } = useSelection({
    gridRef,
    rowCount,
    columnCount,
    mouseDownInterceptor: async (e, coords, selectionStart, selectionEnd) => {
      if (gridRef.current.isMergedCell(coords)) {
        const { rowIndex, columnIndex } = coords;
        setCurrentAdvertisement(cellData?.[[rowIndex, columnIndex]]);
        advertise();
        setActiveCell(null);
        clearSelections();
        return false;
      }

      // disable for invalid selections
      if (
        areCoordsWithinSelection(coords, selectionStart, selectionEnd) &&
        selections?.[0]
      ) {
        purchase();
        return false;
      }
      return true;
    },
  });

  const selectionNotAllowed = useCallback(() => {
    return (
      selections.length > 0 &&
      selectionContainsMergedCells(selections[0]?.bounds, mergedCells)
    );
  }, [mergedCells, selections]);

  return (
    <Row gutter={[16, 16]} align="middle">
      <Col span={24}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Grid
            ref={gridRef}
            selections={selections}
            rowCount={rowCount}
            height={rowCount * CELL_SIZE}
            width={columnCount * CELL_SIZE}
            columnCount={columnCount}
            rowHeight={() => CELL_SIZE}
            columnWidth={() => CELL_SIZE}
            mergedCells={mergedCells}
            itemRenderer={(props) => {
              const { rowIndex, columnIndex } = props;
              const currentCellData = cellData?.[[rowIndex, columnIndex]];
              return GridCell({
                ...props,
                ...currentCellData,
              });
            }}
            selectionRenderer={SelectionRenderer}
            stageProps={{
              onMouseUp: () => {
                select(selections[0]);
                selectionNotAllowed && clearSelections() && setActiveCell(null);
              },
            }}
            selectionBorderColor={
              selectionNotAllowed ? 'rgb(235, 30, 14)' : 'rgb(0, 255, 163)'
            }
            selectionBackgroundColor={
              selectionNotAllowed
                ? 'rgba(235, 30, 14, 0.1)'
                : 'rgba(0, 255, 163, 0.2)'
            }
            onMouseDown={onMouseDown}
          />
        </div>
      </Col>
      <Col span={24}>
        <div className="builton" />
      </Col>
    </Row>
  );
};

export default GridView;
