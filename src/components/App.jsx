import { React, useState, useEffect } from 'react';
import BookList from './BookList';
import cx from 'classnames';
import styles from '../styles/App.module.css';
import getUniqueCategoryNames from '../helpers/getUniqueCategoryNames';
import getFilteredPostsFromCategory from '../helpers/getFilteredPostsFromCategory';

const App = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((json) => setPosts(json.posts));
  }, []);

  const categories = getUniqueCategoryNames(posts);

  const handleCategoryChange = (category) => {
    const filteredPosts = getFilteredPostsFromCategory(category, posts);

    if (filteredPosts && filteredPosts.length > 0) {
      setPosts(filteredPosts);
    }
  }

  return (
    <>
    {posts.length}
      <header>
        <h1 className={cx(styles.AppHeader)}>NetConstruct Robot Books</h1>
      </header>
      <BookList
        onCategoryChange={handleCategoryChange}
        categories={categories}
        posts={posts}
      ></BookList>
      <footer>
        <h6 className={cx(styles.AppFooter)}>Eugene Cross</h6>
      </footer>
    </>
  );
};

export default App;
