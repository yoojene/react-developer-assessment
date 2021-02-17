import React from 'react';
import {Author} from './Author';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import formatDate from '../helpers/dateFormatter';
import { IPost } from '../model/types';

type Props = {
  posts: IPost[]
}
interface ParamTypes {
  postId: string
}
export const PostDetails: React.FC<Props> = ({ posts }) => {
  console.log(posts);

  let { postId } = useParams<ParamTypes>();

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
