import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from '../../styles.module.css';

const Spinner = () => {
  return (
    <div className={styles.loading}>
      <Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />
    </div>
  );
};

Spinner.defaultProps = {
  type: 'Audio',
  color: '000000',
  height: 80,
  width: 80,
};

Spinner.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spinner;
