import React from 'react';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import styles from '../styles/LoadMoreButton.module.css';

const LoadMoreButton = ({ onButtonClick }) => {
  const handleClick = (e) => {
    onButtonClick(e);
  };
  return (
    <div className={cx(styles.LoadMoreButton)}>
      <Button size="lg" onClick={handleClick} variant="light">
        Load More
      </Button>
    </div>
  );
};

export default LoadMoreButton;
