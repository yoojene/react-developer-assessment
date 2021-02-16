import { React, useState, useEffect } from 'react';
import BookList from './BookList';
import LoadMoreButton from './LoadMoreButton';
import Loading from './Loading';
import Fade from 'react-reveal/Fade';
import cx from 'classnames';
import styles from '../styles/App.module.css';
import getUniqueCategoryNames from '../helpers/getUniqueCategoryNames';
import getFilteredPostsFromCategory from '../helpers/getFilteredPostsFromCategory';
import timeout from '../helpers/timeout';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [resetPosts, setResetPosts] = useState(false);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await timeout(1000);
      const res = await fetch('/api/posts');
      const json = await res.json();
      const data = json.posts;
      const pageData = data.slice(offset, offset + perPage);
      setPosts(pageData);
      setIsLoading(false);
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
    <Fade>
      <header>
        <h1 className={cx(styles.AppHeader)}>NetConstruct Robot Books</h1>
      </header>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <BookList
            onCategoryChange={handleCategoryChange}
            categories={categories}
            posts={posts}
          ></BookList>
        </>
      )}
      <LoadMoreButton onButtonClick={handleClick}></LoadMoreButton>

      <footer>
        <h6 className={cx(styles.AppFooter)}>Eugene Cross</h6>
      </footer>
    </Fade>
  );
};

export default App;
