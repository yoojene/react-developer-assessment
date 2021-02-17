import { React } from 'react';
import PropTypes from 'prop-types';
import FilterBar from './FilterBar';
import Post from './Post';
import cx from 'classnames';
import styles from '../styles/PostList.module.css';

const PostList = ({ posts, categories, onCategoryChange }) => {
  const handleCategoryChange = (category) => {
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
          <Post key={post.id} post={post}></Post>
        ))}
      </section>
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
