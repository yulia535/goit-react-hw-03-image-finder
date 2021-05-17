import React from 'react';
import style from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, onClick }) => (
  <div className={style.Overlay} onClick={onClick}>
    <div className={style.Modal}>
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);
Modal.propTypes = {
  webformatURL: PropTypes.string,
  onClick: PropTypes.func,
};
export default Modal;
