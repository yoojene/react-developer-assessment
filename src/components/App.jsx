import { React, useState, useEffect } from 'react';
import BookList from './BookList';
import cx from 'classnames';
import styles from '../styles/App.module.css';
import getUniqueCategoryNames from '../helpers/getUniqueCategoryNames';
import getFilteredPostsFromCategory from '../helpers/getFilteredPostsFromCategory';

const App = () => {
  let [posts, setPosts] = useState([]);
  let [resetPosts, setResetPosts] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/posts');
      const json = await res.json();
      setPosts(json.posts);
    };
    fetchData();
  }, [resetPosts]);

  const categories = getUniqueCategoryNames(posts);

  const handleCategoryChange = (category) => {
    const [...filteredPosts] = getFilteredPostsFromCategory(category, posts);

    if (filteredPosts && filteredPosts.length > 0) {
      setPosts([...filteredPosts]);
    } else {
      setResetPosts(true);
    }
  };

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
        // filteredPosts={filteredPosts}
      ></BookList>
      <footer>
        <h6 className={cx(styles.AppFooter)}>Eugene Cross</h6>
      </footer>
    </>
  );
};

export default App;
