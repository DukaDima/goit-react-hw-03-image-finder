import React from 'react';
import '../../components/styles.css';

const ImageGalleryItem = ({ src }) => {
  return (
    <>
      <img src={src} alt="" className="ImageGalleryItem-image" />
    </>
  );
};
export default ImageGalleryItem;
