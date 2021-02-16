import { React } from 'react';
import PropTypes from 'prop-types';
import FilterBar from './FilterBar';
import Book from './Book';

const BookList = ({ posts, categories }) => {
  return (
    <>
      <header>
        <FilterBar categories={categories}></FilterBar>
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
