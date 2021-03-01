export const getRectSize = ({
  selection,
  PREVIEW_WIDTH,
  PREVIEW_HEIGHT,
  CELL_SIZE,
}) => {
  const {
    bounds: { left, right, top, bottom },
  } = selection;

  const width = (right - left + 1) * CELL_SIZE;
  const height = (bottom - top + 1) * CELL_SIZE;

  return {
    width,
    height,
    x: PREVIEW_WIDTH / 2 - width / 2,
    y: PREVIEW_HEIGHT / 2 - height / 2,
  };
};
