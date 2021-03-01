import React from 'react';
import { Typography } from 'antd';
import { PREVIEW_HEIGHT, PREVIEW_WIDTH } from './constants';
import { getRectSize } from './utils';
import { CELL_SIZE } from '../../components/Grid';

const { Text, Title, Link } = Typography;

const Step4 = ({ image, link, title, label, selection }) => {
  const { width, height } = getRectSize({
    selection,
    PREVIEW_HEIGHT,
    PREVIEW_WIDTH,
    CELL_SIZE,
  });

  return (
    <>
      <div
        style={{
          border: 1,
          margin: 8,
          padding: 8,
          borderStyle: 'dashed',
          display: 'flex',
        }}
      >
        <img
          width={width}
          height={height}
          style={{ objectFit: 'cover' }}
          src={image}
          alt={title}
        />
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
          <Text>{title}</Text>
          <Text>{label}</Text>
          <Link href={link}>Go to link</Link>
        </div>
      </div>
    </>
  );
};

export default Step4;
