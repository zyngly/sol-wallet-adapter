export const getCellProps = ({ image, href }) => {
  const imageProps = image && {
    fillPatternImage: image,
    fillPatternScaleX: 1,
    fillPatternScaleY: 1,
  };
  const hrefProps = href && {
    onMouseEnter: (e) => {
      // style stage container:
      const container = e.target.getStage().container();
      container.style.cursor = "pointer";
    },
    onMouseLeave: (e) => {
      const container = e.target.getStage().container();
      container.style.cursor = "default";
    },
    onClick: () => window.open(href),
  };

  if (image || href) {
    return {
      ...imageProps,
      ...hrefProps,
    };
  }
  return { fill: "rgba(0,0,0,.3)" };
};
