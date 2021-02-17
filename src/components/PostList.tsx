import React, { ChangeEventHandler } from 'react';
import { FilterBar }  from './FilterBar';
import {Post} from './Post';
import cx from 'classnames';
import styles from '../styles/PostList.module.css';
import { IPost } from '../model/types';

type Props = {
  posts: IPost[],
  categories: string[],
  onCategoryChange: ChangeEventHandler
}
export const PostList: React.FC<Props> = ({ posts, categories, onCategoryChange }) => {
  const handleCategoryChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(evt);
  };

  return (
    <>
      <header className={cx(styles.PostListHeader)}>
        <FilterBar
          onCategoryChange={handleCategoryChange}
          categories={categories}
        ></FilterBar>
      </header>
      <section>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </section>
    </>
  );
};

