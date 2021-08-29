import React from 'react';
import '../../components/styles.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src }) => {
  return (
    <>
      <img src={src} alt="" className="ImageGalleryItem-image" />
    </>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};
