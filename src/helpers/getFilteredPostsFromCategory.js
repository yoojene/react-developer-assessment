const getFilteredPostsFromCategory = (category, posts) => {
  const filteredPosts = [];
  posts.forEach((post, i) => {
    post.categories.forEach((cat) => {
      if (cat.name === category) {
        filteredPosts.push(post);
      }
    });
  });

  return filteredPosts;
};

export default getFilteredPostsFromCategory;
