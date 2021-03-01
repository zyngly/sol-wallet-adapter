export const areaIntersects = (area1, area2) => {
  if (area1.left > area2.right || area2.left > area1.right) {
    return false;
  }
  if (area1.top > area2.bottom || area2.top > area1.bottom) {
    return false;
  }
  return true;
};

export const selectionContainsMergedCells = (area, mergedCells) => {
  for (const bounds of mergedCells) {
    if (areaIntersects(area, bounds)) {
      return true;
    }
  }
  return false;
};

export const areCoordsWithinSelection = (
  coords,
  selectionStart,
  selectionEnd,
) => {
  if (
    ((coords.rowIndex >= selectionStart.current?.rowIndex &&
      coords.rowIndex <= selectionEnd.current?.rowIndex) ||
      (coords.rowIndex <= selectionStart.current?.rowIndex &&
        coords.rowIndex >= selectionEnd.current?.rowIndex)) &&
    ((coords.columnIndex >= selectionStart.current?.columnIndex &&
      coords.columnIndex <= selectionEnd.current?.columnIndex) ||
      (coords.columnIndex <= selectionStart.current?.columnIndex &&
        coords.columnIndex >= selectionEnd.current?.columnIndex))
  ) {
    return true;
  }
  return false;
};

export const getCellData = (data) => {
  const cellData = {};
  const mergedCells = [];

  data.forEach((item) => {
    const { image, link, title, label, signature } = item;
    cellData[[`${item.bounds.top}`, `${item.bounds.left}`]] = {
      title,
      label,
      image,
      link,
      signature,
    };
    mergedCells.push(item.bounds);
  });

  return { cellData, mergedCells };
};
