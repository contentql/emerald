import Hero from '@/components/marketing/Hero'
import Recommendations from '@/components/marketing/Recommendations'

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/4-3.png',
  title: 'Recommendations',
  subTitle:
    'Discover handpicked recommendations from our curated list of favorite websites. Explore these suggested sites for a diverse online experience. Find our top picks below.',
}

const page = () => {
  return (
    <div>
      <Hero
        imagePath={heroData?.imagePath}
        subTitle={heroData?.subTitle}
        title={heroData?.title}
      />
      <Recommendations />
    </div>
  )
}

export default page
