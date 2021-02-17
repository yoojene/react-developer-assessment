import React from 'react';
import spinningBalls from '../assets/images/spinning-circles.svg';
import cx from 'classnames';
import styles from '../styles/Loading.module.css';

export const Loading:React.FC = () => {
  return (
    <div className={(cx(styles.SpinnerContainer))}>
      <img className={cx(styles.Spinner)} src={spinningBalls} alt="" />
    </div>
  );
}