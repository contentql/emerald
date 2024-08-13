import Hero from '@/components/marketing/Hero'
import StyleGuide from '@/components/marketing/StyleGuide'

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/2-3.png',
  title: 'Style Guide',
  subTitle:
    'Explore our style guide for a cohesive blog look. We aim for a consistent, impactful, and unique reader experience. Discover key content creation principles below.',
}

const page = () => {
  return (
    <div>
      <Hero
        imagePath={heroData?.imagePath}
        subTitle={heroData?.subTitle}
        title={heroData?.title}
      />
      <StyleGuide />
    </div>
  )
}

export default page
