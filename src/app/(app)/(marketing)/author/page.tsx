import AllPosts from '@/components/marketing/AllPosts'
import Hero from '@/components/marketing/Hero'
import AuthorHeroImg from '@/public/assets/authors-hero-img.webp'
import { serverClient } from '@/trpc/serverClient'

const heroData = {
  imagePath: AuthorHeroImg,
  title: 'Discover Authors',
  subTitle:
    'Discover the talented individuals shaping our content. Meet our authors, the creative minds bringing our blog to life.',
}

const cardData = [
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/2-1.png',
    title: 'Celestia Lilly',
    noOfPosts: 5,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/1-1.png',
    title: 'Eldritch Thron',
    noOfPosts: 1,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/4-1.png',
    title: 'Evlyn Mitchell',
    noOfPosts: 10,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/3-1.png',
    title: 'Noah Cooper',
    noOfPosts: 0,
  },
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/3-1.png',
    title: 'Patricia Mills',
    noOfPosts: 2,
  },
]

const page = async () => {
  const authors = await serverClient.author.getAllAuthorsWithCount()
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
