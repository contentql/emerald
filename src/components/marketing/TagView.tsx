'use client'

import Hero from './Hero'
import TagPosts from './TagPosts'

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/tags-image-1-2.png',
  title: 'Arcane',
  subTitle:
    'Enter the Arcane, where ancient knowledge and mystical arts converge, revealing the secrets that lie beneath the surface of reality.',
}

const TagView = () => {
  return (
    <div>
      <Hero
        imagePath={heroData.imagePath}
        subTitle={heroData.subTitle}
        title={heroData.title}
      />
      <TagPosts />
    </div>
  )
}

export default TagView
