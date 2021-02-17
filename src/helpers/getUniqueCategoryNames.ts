import { IPost } from "../model/types";

export const getUniqueCategoryNames = (posts: IPost[]) => {
  const allCategories = posts.map((post) => post.categories).flat();
  const categories = [...new Set(allCategories.map((data) => data.name))];
  categories.unshift('Select Category');

  return categories;
};

