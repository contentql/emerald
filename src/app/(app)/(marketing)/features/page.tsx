import Features from '@/components/marketing/Features'
import Hero from '@/components/marketing/Hero'

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/1-3.png',
  title: 'Features',
  subTitle:
    'Explore our features for a seamless, powerful, and enjoyable user experience. Discover the essence of our design below.',
}

const page = () => {
  return (
    <div>
      <Hero
        imagePath={heroData?.imagePath}
        subTitle={heroData?.subTitle}
        title={heroData?.title}
      />
      <Features />
    </div>
  )
}

export default page
