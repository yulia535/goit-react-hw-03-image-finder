import React from 'react';
import LoaderSpiner from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';

const Loader = () => (
  <div className={style.Loader}>
    <LoaderSpiner type="Oval" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
