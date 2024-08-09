import AllPosts from '@/components/marketing/AllPosts'
import Hero from '@/components/marketing/Hero'
import { serverClient } from '@/trpc/serverClient'

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/5-2.png',
  title: 'Discover Authors',
  subTitle:
    'Discover the talented individuals shaping our content. Meet our authors, the creative minds bringing our blog to life.',
}

const page = async () => {
  const authors = await serverClient.author.getAllAuthorsWithCount()
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
