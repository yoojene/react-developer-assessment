import { IPost } from "../model/types";

export const getFilteredPostsFromCategory = (category: string, posts: IPost[]) => {
  const filteredPosts: IPost[] = [];
  posts.forEach((post, i) => {
    post.categories.forEach((cat) => {
      if (cat.name === category) {
        filteredPosts.push(post);
      }
    });
  });

  // Ensure only unique posts are returned (some duplicate categories)
  return new Set(filteredPosts);
};

