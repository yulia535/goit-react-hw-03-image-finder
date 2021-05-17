import React from 'react';
import style from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images }) => (
  <>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li className={style.ImageGalleryItem} key={id}>
        <img
          className={style.itemImage}
          src={webformatURL}
          url={largeImageURL}
          alt={tags}
        />
      </li>
    ))}
  </>
);
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      id: PropTypes.number,
      tags: PropTypes.string,
    }),
  ),
};
export default ImageGalleryItem;
