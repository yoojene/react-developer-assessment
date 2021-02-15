import { React }  from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Author from './Author';

const PostList = ({posts}) => {

  return (
    <div>
      {posts.map(post => (
      <>
       
      <Author author={post.author}></Author>
      <br></br>
      <Post post={post}></Post>     
      </>)
      )}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array

}

export default PostList

