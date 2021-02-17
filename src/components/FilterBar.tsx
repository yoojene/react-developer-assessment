import React, { ChangeEventHandler } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { CategorySelect } from './CategorySelect';

type Props = {
  categories: string[],
  onCategoryChange: ChangeEventHandler
}
export const FilterBar: React.FC<Props> = ({ categories, onCategoryChange }) => {
  const handleCategoryChange = (evt : React.ChangeEvent<HTMLSelectElement>) => {
    console.log(evt.target.value)
    onCategoryChange(evt);
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
