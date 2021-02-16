import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const CategoryBar = ({ posts }) => {
  return (
    <Nav fill>
      {posts.map((category) => (
        <Nav.Item key={category.id}>{category.name}</Nav.Item>
      ))}
    </Nav>
  );
};

CategoryBar.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default CategoryBar;
