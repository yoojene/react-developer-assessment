import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Author from './Author';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import formatDate from '../helpers/dateFormatter';

const PostDetails = ({ posts }) => {

  let { postId } = useParams();

  const postDetails = posts.find((post) => post.id === postId);
  return (
    <Fade>
      <Card>
        <Card.Title>
          <Author author={postDetails.author}></Author>
        </Card.Title>
        <Card.Body>
          <Card.Title>{postDetails.title}</Card.Title>
          <Card.Text>{postDetails.summary}</Card.Text>
          <Card.Text>{formatDate(postDetails.publishDate)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/">Back</Link>
        </Card.Footer>
      </Card>
    </Fade>
  );
};

PostDetails.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  publishDate: PropTypes.string,
};

export default PostDetails;
