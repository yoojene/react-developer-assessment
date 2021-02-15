import { React, useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import PostList from './PostList';


function App() {

  let [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('/api/posts')
      .then(res => res.json())
      .then(json => setPosts(json.posts))
  }, [])

  return  (
    <ListGroup>
      <PostList posts={posts}></PostList>
    </ListGroup>
  )
}

export default App;
