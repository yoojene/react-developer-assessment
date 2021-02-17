import React, { ChangeEventHandler } from 'react';
import { FilterBar }  from './FilterBar';
import {Book} from './Book';
import cx from 'classnames';
import styles from '../styles/PostList.module.css';
import { Category, IPost } from '../model/types';

type Props = {
  posts: IPost[],
  categories: Category[],
  onCategoryChange: ChangeEventHandler
}
export const PostList: React.FC<Props> = ({ posts, categories, onCategoryChange }) => {
  const handleCategoryChange = (category: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(category);
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
          <Book key={post.id} post={post}></Book>
        ))}
      </section>
    </>
  );
};
