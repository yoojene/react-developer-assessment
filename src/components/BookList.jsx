import { React } from 'react';
import PropTypes from 'prop-types';
import FilterBar from './FilterBar';
import Book from './Book';
import cx from 'classnames';
import styles from '../styles/BookList.module.css';

const BookList = ({ posts, categories, onCategoryChange }) => {
  const handleCategoryChange = (category) => {
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

BookList.propTypes = {
  posts: PropTypes.array,
};

export default BookList;
