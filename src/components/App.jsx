import { React, useState, useEffect } from 'react';
import BookList from './BookList';
import LoadMoreButton from './LoadMoreButton';
import cx from 'classnames';
import styles from '../styles/App.module.css';
import getUniqueCategoryNames from '../helpers/getUniqueCategoryNames';
import getFilteredPostsFromCategory from '../helpers/getFilteredPostsFromCategory';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [resetPosts, setResetPosts] = useState(false);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  let [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/posts');
      const json = await res.json();

      const data = json.posts;
      const pageData = data.slice(offset, offset + perPage);
      setPosts(pageData);
      setPageCount(Math.ceil(data.length / perPage));
    };
    fetchData();
  }, [resetPosts, offset, perPage]);

  useEffect(() => {
    setCategories(getUniqueCategoryNames(posts));
  }, [posts]);

  const handleCategoryChange = (category) => {
    const [...filteredPosts] = getFilteredPostsFromCategory(category, posts);

    if (filteredPosts && filteredPosts.length > 0) {
      setPosts([...filteredPosts]);
    } else {
      resetPosts ? setResetPosts(false) : setResetPosts(true);
    }
  };

  const handleClick = (e) => {
    setOffset(offset + 5);
    setCategories(getUniqueCategoryNames(posts));
  };

  return (
    <>
      <header>
        <h1 className={cx(styles.AppHeader)}>NetConstruct Robot Books</h1>
      </header>
      <BookList
        onCategoryChange={handleCategoryChange}
        categories={categories}
        posts={posts}
      ></BookList>
      <LoadMoreButton onButtonClick={handleClick}></LoadMoreButton>
      <footer>
        <h6 className={cx(styles.AppFooter)}>Eugene Cross</h6>
      </footer>
    </>
  );
};

export default App;
