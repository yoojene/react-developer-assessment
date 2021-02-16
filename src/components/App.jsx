import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import PostList from './PostList';
import cx from 'classnames';
import styles from '../styles/App.module.css';
const App = () => {

  let [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('/api/posts')
      .then(res => res.json())
      .then(json => setPosts(json.posts))
  }, [])

  return  (
    <>
      <header>
        <h1 className={cx(styles.AppHeader)}>NetConstruct Robot Books</h1>
      </header>
      <PostList posts={posts}></PostList>
      <footer>
        <h6 className={cx(styles.AppFooter)}>Eugene Cross</h6>
      </footer>
    </>
  )

}

PostList.propTypes = {
  posts: PropTypes.array
}

export default App;
