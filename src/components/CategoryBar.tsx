import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Category } from '../model/types';

type Props = {
  categories: Category[]
}
const CategoryBar : React.FC<Props> = ({ categories }) => {

  return (
    <Nav fill>
      {categories.map((category) => (
        <Nav.Item key={category.id}>{category.name}</Nav.Item>
      ))}
    </Nav>
  );
};

export default CategoryBar;
