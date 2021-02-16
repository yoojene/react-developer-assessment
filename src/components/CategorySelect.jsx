import React from 'react';

const CategorySelect = ({ categories }) => {
  return (
    <select>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
