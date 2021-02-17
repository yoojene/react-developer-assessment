import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import { Author }  from './Author';
import cx from 'classnames';
import styles from '../styles/Post.module.css';
import { IPost } from '../model/types';

type Props = {
  post: IPost
}
export const Post: React.FC<Props> = ({ post }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/posts/${post.id}`);
  };
  return (
    <Fade>
      <Card className={cx(styles.Post)} onClick={handleClick}>
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