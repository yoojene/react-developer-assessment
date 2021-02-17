import React, { ChangeEventHandler } from 'react';


type Props = {
  categories: string[],
  onCategoryChange: ChangeEventHandler
}
export const CategorySelect: React.FC<Props>  = ({ categories, onCategoryChange }) => {
  const [value, setValue] = React.useState('Select Categories');

  const handleSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(evt.target.value);
    onCategoryChange(evt);
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

