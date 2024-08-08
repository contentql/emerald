import { notFound } from 'next/navigation'

import FeaturedPost from '@/components/marketing/FeaturedPost'
import Hero from '@/components/marketing/Hero'
import LatestPosts from '@/components/marketing/LatestPosts'
import { serverClient } from '@/trpc/serverClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const Page = async ({ params }: { params: { route: string[] } }) => {
  try {
    const pageData = await serverClient.page.getPageData({
      path: params?.route,
    })

    return (
      <>
        <Hero />
        <FeaturedPost />
        <LatestPosts />
      </>
    )
    // <RenderBlocks pageInitialData={pageData as PageType} slug={params} />
  } catch (error) {
    console.error('Error: Page not found')
    notFound()
  }
}

export default Page
