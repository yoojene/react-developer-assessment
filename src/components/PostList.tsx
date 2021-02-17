import React, { ChangeEventHandler } from 'react';
import { FilterBar }  from './FilterBar';
import {Book} from './Book';
import cx from 'classnames';
import styles from '../styles/PostList.module.css';
import { Category, Post } from '../model/types';

type PostListProps = {
  posts: Post[],
  categories: Category[],
  onCategoryChange: ChangeEventHandler
}
export const PostList = ({ posts, categories, onCategoryChange }: PostListProps) => {
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

