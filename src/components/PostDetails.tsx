import React from 'react';
import Author from './Author';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import formatDate from '../helpers/dateFormatter';
import { Post } from '../model/types';

type BookDetailsProps = {
  posts: Post[]
}
export const BookDetails = ({ posts }: BookDetailsProps) => {
  console.log(posts);

  let { postId } = useParams();

  const postDetails = posts.find((post) => post.id === postId);
  return (
    <Card>
      <Card.Title>
        <Author author={postDetails!.author}></Author>
      </Card.Title>

      <Card.Body>
        <Card.Title>{postDetails!.title}</Card.Title>
        <Card.Text>{postDetails!.summary}</Card.Text>
        <Card.Text>{formatDate(postDetails!.publishDate)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to="/">Back</Link>
      </Card.Footer>
    </Card>
  );
};
