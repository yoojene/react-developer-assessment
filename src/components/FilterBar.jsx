import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CategorySelect from './CategorySelect';
const FilterBar = ({ categories, onCategoryChange }) => {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };
  return (
    <Navbar>
      <Nav.Item>
        <CategorySelect
          onCategoryChange={handleCategoryChange}
          categories={categories}
        ></CategorySelect>
      </Nav.Item>
    </Navbar>
  );
};

FilterBar.propTypes = {
  categories: PropTypes.array,
};

export default FilterBar;
