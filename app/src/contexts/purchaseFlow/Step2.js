import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from 'antd';

import { PREVIEW_HEIGHT, PREVIEW_WIDTH } from './constants';
import { getRectSize } from './utils';
import { CELL_SIZE } from '../../components/Grid';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const baseStyle = {
  flex: 1,
  width: '100%',
  display: 'flex',
  minHeight: '200px',
  marginBottom: '50px',
  marginTop: '30px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  border: '2px #eee dashed',
  borderRadius: 2,
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const Dropzone = ({ image, setImage, selection }) => {
  const rectProps = getRectSize({
    selection,
    PREVIEW_HEIGHT,
    PREVIEW_WIDTH,
    CELL_SIZE,
  });

  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: rectProps.width,
    height: rectProps.height,
    padding: 4,
    boxSizing: 'border-box',
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  const thumbnail = (
    <div style={thumb}>
      <div style={thumbInner}>
        <img src={image} style={img} alt="alt" />
      </div>
    </div>
  );

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  return (
    <div
      style={{
        width: PREVIEW_WIDTH,
        height: PREVIEW_HEIGHT,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div {...getRootProps({ className: 'dropzone' })} style={{ ...style }}>
        <input {...getInputProps()} />
        {image
          ? `This is what your ad will look like.`
          : `Drag 'n' drop your image file here, or click to select`}
        <aside style={thumbsContainer}>{image && thumbnail}</aside>
      </div>
    </div>
  );
};

export default Dropzone;
