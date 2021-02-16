import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Author from './Author';
import cx from 'classnames';
import styles from '../styles/Book.module.css';
const Book = ({ post }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/books/${post.id}`);
  };
  return (
    <Fade>
      <Card className={cx(styles.Book)} onClick={handleClick}>
        <Card.Title>
          <Author author={post.author}></Author>
        </Card.Title>
        <Card.Body>
          <Card.Text>{post.title}</Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Fade>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
