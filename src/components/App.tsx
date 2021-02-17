import  React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PostList} from './PostList';
import {LoadMoreButton} from './LoadMoreButton';
import {PostDetails} from './PostDetails';
import {Loading} from './Loading';
import Fade from 'react-reveal/Fade';
import cx from 'classnames';
import styles from '../styles/App.module.css';
import getUniqueCategoryNames from '../helpers/getUniqueCategoryNames';
import getFilteredPostsFromCategory from '../helpers/getFilteredPostsFromCategory';
import timeout from '../helpers/timeout';
import { IPost } from '../model/types';

const App = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [resetPosts, setResetPosts] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const [perPage] = React.useState(5);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
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

  React.useEffect(() => {
    setCategories(getUniqueCategoryNames(posts));
  }, [posts]);

  const handleCategoryChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const category = evt.target.value;
    const [...filteredPosts] = getFilteredPostsFromCategory(category, posts);

    if (filteredPosts && filteredPosts.length > 0) {
      setPosts([...filteredPosts]);
    } else {
      resetPosts ? setResetPosts(false) : setResetPosts(true);
    }
  };

  const handleClick = () => {
    setOffset(offset + 5);
    setCategories(getUniqueCategoryNames(posts));
  };

  return (
    <Router>
      <Fade>
        <header>
          <h1 className={cx(styles.AppHeader)}>NetConstruct Robot Books</h1>
        </header>
        <Switch>
          <Route path="/posts/:postId">
            <PostDetails posts={posts}></PostDetails>
          </Route>

          <Route exact path="/">
            {isLoading ? (
              <Loading></Loading>
            ) : (
              <>
                <PostList
                  onCategoryChange={handleCategoryChange}
                  categories={categories}
                  posts={posts}
                ></PostList>
              </>
            )}
            <LoadMoreButton onButtonClick={handleClick}></LoadMoreButton>
          </Route>
        </Switch>
        <footer>
          <h6 className={cx(styles.AppFooter)}>Eugene Cross</h6>
        </footer>
      </Fade>
    </Router>
  );
};

export default App;
