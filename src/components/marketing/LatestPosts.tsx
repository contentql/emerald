'use client'

import Button from '../common/Button'
import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const listOfPosts = [
  {
    imageUrl: '/images/home/8.webp',
    title: 'Aureate Serpent and Celestial Sojourn',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `In the celestial ballet of myth, the Aureate Serpent's golden scales shimmer as heroes navigate cosmic realms. From East to West, the universal allure of mythical journeys echoes humanity's timeless quest for understanding.`,
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Azure Ursids and Moonbeam Lullabies',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Eldritch Thorn',
    description: `Beneath the celestial canopy, where Azure Ursids weave their trails of celestial blue and moonbeam lullabies serenade the night, a cosmic symphony unfolds.`,
    tagName: 'Sylvan',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Celestial Felines and the Enigmatic Chalices of Eldoria',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Evelyn Mitchell',
    description: `Embark on an enchanting journey through Eldoria's skies, where celestial felines dance and enigmatic chalices hold tales of magic and mystery.`,
    tagName: 'chronicles',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Temporal Blades Lost in the Mystical Whirlwind',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Eldritch Thorn',
    description: `Journey through epochs as blades, entwined in the mystical whirlwind, unravel tales echoing across forgotten times—a dance of enchantment waiting to be discovered.`,
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Nesting Dragons in the Amethyst Depths of the Abyss',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `Uncover the enigma of Amethyst Depths, where dragons nest among ancient secrets in the mystical abyss.`,
    tagName: 'Sylvan',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Enchanted Realms of Mushroom Monarchies',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `This journey transcends ordinary boundaries, inviting you to explore a world where magic emanates from every cap and the air is alive with the hum of mystical kingdoms.`,
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Enchanted Realms of Mushroom Monarchies',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `This journey transcends ordinary boundaries, inviting you to explore a world where magic emanates from every cap and the air is alive with the hum of mystical kingdoms.`,
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Enchanted Realms of Mushroom Monarchies',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `This journey transcends ordinary boundaries, inviting you to explore a world where magic emanates from every cap and the air is alive with the hum of mystical kingdoms.`,
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Enchanted Realms of Mushroom Monarchies',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `This journey transcends ordinary boundaries, inviting you to explore a world where magic emanates from every cap and the air is alive with the hum of mystical kingdoms.`,
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Enchanted Realms of Mushroom Monarchies',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description: `This journey transcends ordinary boundaries, inviting you to explore a world where magic emanates from every cap and the air is alive with the hum of mystical kingdoms.`,
    tagName: 'ARCANE',
  },
]

const LatestPosts = () => {
  const [noOfPosts, setNoOfPosts] = useState(6)
  const [loading, setLoading] = useState(false)

  const loadPosts = () => {
    setLoading(true)
    setTimeout(() => {
      setNoOfPosts(noOfPosts + 6)
      setLoading(false)
    }, 1000)
  }
  return (
    <Container className='md:max-w-screen-container w-full px-4 sm:my-8 lg:my-12 lg:px-0'>
      <div className='relative mx-auto my-4 flex w-full flex-col items-start gap-16 sm:my-12 md:max-w-[940px] lg:my-16 lg:flex-row lg:gap-16'>
        <div className='flex flex-col gap-4 md:mx-0'>
          <h2 className='mb-2 text-sm font-medium uppercase tracking-widest text-secondary-content'>
            Latest Post
          </h2>
          <div className='flex w-full flex-col gap-10'>
            {listOfPosts.slice(0, noOfPosts).map((post, index) => (
              <div
                key={index}
                className='flex w-full flex-col items-start gap-6 sm:flex-row'>
                <div className='avatar w-full md:w-auto'>
                  <div className='relative h-60 w-full md:h-28 md:w-28'>
                    <Link href={`/${post?.title}`}>
                      <Image
                        src={post?.imageUrl}
                        alt='Post'
                        fill
                        className='rounded-xl md:rounded-full'
                      />
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col gap-3 sm:mt-1'>
                  <div className='flex flex-col gap-2'>
                    <Link href={`/${post?.title}`}>
                      <div className='text-lg font-semibold text-base-content'>
                        {post?.title}
                        {index === 1 ? (
                          <span className='inline-block bg-gradient-to-r from-[#FED7AA] to-[#F97316] bg-clip-text text-transparent'>
                            &nbsp;✦
                          </span>
                        ) : null}
                      </div>
                    </Link>
                    <div className='flex items-center'>
                      <Link href={`/author/${post?.authorName}`}>
                        <Image
                          alt='Author'
                          src={post?.authorImageUrl}
                          height={24}
                          width={24}
                          className='rounded-full'
                        />
                      </Link>
                      <Link href={`/author/${post?.authorName}`}>
                        <p className='ml-2 text-sm font-normal text-[#3F3F46]'>
                          {post?.authorName}
                        </p>
                      </Link>
                    </div>
                    <p className='text-base font-light leading-normal tracking-[0.1px] text-neutral-content'>
                      {post?.description}
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <Link href={`/tag/${post?.tagName}`}>
                      <div className='badge badge-secondary badge-lg rounded-lg border border-zinc-200 text-xs font-medium uppercase tracking-wider text-zinc-700 hover:opacity-80'>
                        {post?.tagName}
                      </div>
                    </Link>
                    {index === 0 && (
                      <div className='badge badge-warning badge-lg rounded-lg border border-[#FEC896] text-xs font-semibold text-error '>
                        ✦ PREMIUM
                      </div>
                    )}
                    {index === 2 && (
                      <div className='badge badge-primary badge-lg rounded-lg border text-xs font-semibold text-base-100'>
                        ✽ MEMBER
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {listOfPosts.length <= noOfPosts ? (
            ''
          ) : (
            <div className='mt-8 flex items-center justify-center'>
              <Button
                onClick={loadPosts}
                className='hover:bg-base-150 btn-secondary !rounded-full text-xs uppercase'
                disabled={loading}>
                {loading ? 'Loading...' : 'Load More'}
              </Button>
            </div>
          )}
        </div>
        <div className='relative my-8 flex h-full w-full flex-shrink-0 basis-full flex-col items-center gap-10 sm:my-10 md:sticky md:top-6 md:my-0 md:basis-[30%] md:items-start'>
          <div className='flex h-fit w-full flex-col gap-8 sm:max-w-md md:gap-4'>
            <h2 className='text-sm font-medium uppercase tracking-widest text-secondary-content'>
              Popular Categories
            </h2>
            <div className='flex flex-row flex-wrap justify-start gap-6 md:flex-col md:flex-nowrap md:gap-5'>
              {[
                'Arcane',
                'Sylvan',
                'Chronicles',
                'Arcane',
                'Sylvan',
                'Chronicles',
              ].map((category, idx) => (
                <Link
                  href={`/tag/${category.toLowerCase()}`}
                  key={idx}
                  className='flex w-fit select-none flex-row items-center justify-start gap-2.5'>
                  <Image
                    src={`/images/home/tags-image-1-2.webp`}
                    alt=''
                    height={32}
                    width={32}
                    className='rounded-full'
                  />
                  <span className='font-semibold text-base-content'>
                    {category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex h-fit w-full max-w-md flex-col gap-4'>
            <div className='text-sm font-[450] uppercase tracking-widest text-secondary-content'>
              Subscribe
            </div>
            <div className='flex flex-col gap-3'>
              <div>
                <input
                  type='email'
                  placeholder='Email address'
                  className='flex h-9 w-full items-center justify-start rounded-lg border-0 bg-transparent px-3 text-sm font-medium leading-8 text-base-content shadow-sm ring-1 ring-inset ring-zinc-300 transition-shadow duration-300 placeholder:font-normal focus:ring-2 focus:ring-primary focus-visible:outline-none'
                />
              </div>
              <div>
                <Button className='btn-primary h-9 w-full font-medium text-white'>
                  ✦ &nbsp;Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LatestPosts
