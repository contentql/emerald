import TagView from '@/components/marketing/TagView'

interface PageProps {
  params: {
    tagSlug: string
  }
}

const page = async ({ params }: PageProps) => {
  // try {
  //   const blogs = await serverClient.tag.getBlogs({ tagSlug: params?.tagSlug })

  //   return (
  //     <TagBlogListView
  //       blogs={blogs?.blogsData}
  //       tagDetails={blogs?.tagData?.at(0)}
  //     />
  //   )
  // } catch (error) {
  //   console.error('Error fetching blogs:', error)
  // }
  return <TagView />
}

export default page
