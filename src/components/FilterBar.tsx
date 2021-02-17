import React, { MouseEventHandler } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { CategorySelect } from './CategorySelect';
import { Category } from '../model/types';

type FilterBarProps = {
  categories: Category[],
  onCategoryChange: MouseEventHandler
}
export const FilterBar = ({ categories, onCategoryChange }: FilterBarProps) => {
  const handleCategoryChange = (category : React.MouseEvent<Element, MouseEvent>) => {
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
