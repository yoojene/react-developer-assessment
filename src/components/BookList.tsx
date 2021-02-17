import React, { ChangeEventHandler } from 'react';
import { FilterBar }  from './FilterBar';
import {Book} from './Book';
import cx from 'classnames';
import styles from '../styles/BookList.module.css';
import { Category, Post } from '../model/types';

type BookListProps = {
  posts: Post[],
  categories: Category[],
  onCategoryChange: ChangeEventHandler
}
export const BookList = ({ posts, categories, onCategoryChange }: BookListProps) => {
  const handleCategoryChange = (category: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(category);
  };

  return (
    <>
      <header className={cx(styles.BookListHeader)}>
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

