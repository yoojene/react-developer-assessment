import { React }  from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({posts}) => {
  return (
    <section>
      {posts.map(post => (
      <Post key={post.id} post={post}></Post>)
      )}
    </section>
  )
}

PostList.propTypes = {
  posts: PropTypes.array


}

export default PostList

