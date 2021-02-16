import React from 'react';

const CategorySelect = ({ categories, onCategoryChange }) => {
  const handleSelectChange = (e) => {
    onCategoryChange(e.target.value);
  };
  return (
    <select onChange={handleSelectChange}>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
