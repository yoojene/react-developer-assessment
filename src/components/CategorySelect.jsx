import React, { useState } from 'react';

const CategorySelect = ({ categories, onCategoryChange }) => {
  const [value, setValue] = useState('Select Categories');

  const handleSelectChange = (e) => {
    setValue(e.target.value);
    onCategoryChange(e.target.value);
  };
  return (
    <select onChange={handleSelectChange} value={value}>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
