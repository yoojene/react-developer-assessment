import React, { ChangeEventHandler, useState } from 'react';
import { Category } from '../model/types';


type CategorySelectProps = {
  categories: Category[],
  onCategoryChange: ChangeEventHandler
}
export const CategorySelect = ({ categories, onCategoryChange }: CategorySelectProps) => {
  const [value, setValue] = useState('Select Categories');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onCategoryChange(e);
  };
  return (
    <select onChange={handleSelectChange} value={value}>
      {categories.map((category, i) => (
        <option key={i} value={category.name}>
          {category}
        </option>
      ))}
    </select>
  );
};

