import { useLoaderData } from 'react-router-dom'

import PostList from '../components/PostList'

const BlogPage = () => {
  const posts = useLoaderData()

  return <PostList posts={posts} />
}

export default BlogPage

export const loader = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}
