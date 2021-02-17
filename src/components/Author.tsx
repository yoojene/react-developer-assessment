import React from 'react';
import { IonAvatar } from '@ionic/react';
import cx from 'classnames';
import styles from '../styles/Author.module.css';
import { PostAuthor } from '../model/types'

type Props = {
  author: PostAuthor
}
export const Author : React.FC<Props>= ({ author }) => {
  return (
    <div className={cx(styles.Author)}>
      <IonAvatar>
        <img src={author.avatar} alt={author.avatar}></img>
      </IonAvatar>
      <h4 className={cx(styles.AuthorHeading)}>{author.name}</h4>
    </div>
  );
};

