import React, { MouseEventHandler }from 'react';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import styles from './styles/LoadMoreButton.module.css';

type Props = {
  onButtonClick: MouseEventHandler
}
export const LoadMoreButton: React.FC<Props> = ({ onButtonClick }) => {
  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    onButtonClick(event);
  };
  return (
    <div className={cx(styles.LoadMoreButton)}>
      <Button size="lg" onClick={handleClick} variant="light">
        Load More
      </Button>
    </div>
  );
};

