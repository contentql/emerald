import AllPosts from '@/components/marketing/AllPosts'
import Hero from '@/components/marketing/Hero'
import { serverClient } from '@/trpc/serverClient'

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/6-1.png',
  title: 'Tags',
  subTitle:
    'Navigate through topics effortlessly with our tags. Click to find related articles and streamline your reading. Discover tag categories below.',
}

const page = async () => {
  const tags = await serverClient.tag.getAllTags()
  return (
    <div>
      <Hero
        imagePath={heroData?.imagePath}
        subTitle={heroData?.subTitle}
        title={heroData?.title}
      />
      <AllPosts />
    </div>
  )
}

export default page
