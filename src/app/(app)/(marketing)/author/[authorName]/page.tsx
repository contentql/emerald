import AuthorView from '@/components/marketing/AuthorView'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    authorName: string
  }
  searchParams: {
    tag: string
  }
}

const Author = async ({ params, searchParams }: PageProps) => {
  const author = await serverClient.author.getAuthorByName({
    authorName: params?.authorName,
  })
  const authorBlogs = await serverClient.author.getBlogsByAuthorName({
    authorName: params?.authorName,
  })
  // return <AuthorPostsView author={author as User} blogsData={authorBlogs} />
  return <AuthorView />
}

export default Author
