export interface Post {
  id: string,
  title: string,
  publishDate: string,
  author: PostAuthor,
  summary: string,
  categories: Category[]

}

export interface Category {
  id: string,
  name: string
}

export interface PostAuthor {
  name: string,
  avatar: string
}
