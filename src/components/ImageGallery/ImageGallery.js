import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import style from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => (
  <ul className={style.ImageGallery} onClick={onClick}>
    <ImageGalleryItem images={images} />
  </ul>
);
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      id: PropTypes.number,
      tags: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
};
export default ImageGallery;
