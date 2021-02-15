import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
const Post = ({post}) => {
  return (
    <Card>
      <Card.Text>{post.title}</Card.Text>
    </Card>
  )
}

Post.propTypes = {
  title: PropTypes.string

}

export default Post

