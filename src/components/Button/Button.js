import React from 'react';
import style from '../Button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" className={style.Button} onClick={onClick}>
    Load more
  </button>
);
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
