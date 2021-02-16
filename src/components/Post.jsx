import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Author from './Author';

const Post = ({post}) => {
  return (
    <Card>
      <Card.Title>
      <Author author={post.author}></Author>
      </Card.Title>
      <Card.Body>
        <Card.Text>{post.title}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string

}

export default Post

