import AllPosts from '@/components/marketing/AllPosts'
import Hero from '@/components/marketing/Hero'
import TagHeroImg from '@/public/assets/tags-hero-img.webp'
import { serverClient } from '@/trpc/serverClient'

const cardData = [
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-1-2.png',
    title: 'Celestia Lilly',
    noOfPosts: 5,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-2-1.png',
    title: 'Eldritch Thron',
    noOfPosts: 1,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-3-1.png',
    title: 'Evlyn Mitchell',
    noOfPosts: 10,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-5-1.png',
    title: 'Noah Cooper',
    noOfPosts: 0,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-6-1.png',
    title: 'Patricia Mills',
    noOfPosts: 2,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-7-1.png',
    title: 'Patricia Mills',
    noOfPosts: 9,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-8-1.png',
    title: 'Patricia Mills',
    noOfPosts: 3,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-4--2-.png',
    title: 'Patricia Mills',
    noOfPosts: 7,
  },
]

const heroData = {
  imagePath: TagHeroImg,
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
      <AllPosts cardData={cardData} />
    </div>
  )
}

export default page
