import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Author from './Author';
import cx from 'classnames';
import styles from '../styles/Book.module.css';
const Book = ({ post }) => {
  return (
    <Card className={cx(styles.Book)}>
      <Card.Title>
        <Author author={post.author}></Author>
      </Card.Title>
      <Card.Body>
        <Card.Text>{post.title}</Card.Text>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
