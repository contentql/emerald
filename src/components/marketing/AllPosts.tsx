'use client'

import Container from '../common/Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CardDataType {
  imageUrl: string
  title: string
  noOfPosts: number // or specify the exact type if known, e.g., Record<string, number> or something else
}

const AllPosts = ({ cardData }: { cardData: CardDataType[] }) => {
  const pageSlug = usePathname()

  return (
    <Container className='py-24'>
      <div className='grid grid-cols-4 gap-8'>
        {cardData?.map((card, index) => (
          <Link
            key={index}
            href={`${pageSlug}/${card?.title}`}
            className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
            <div className='flex flex-col items-center justify-center gap-2.5'>
              <div className='avatar'>
                <div className='w-20 rounded-full'>
                  <img src={card?.imageUrl} />
                </div>
              </div>
              <div className='text-base font-semibold sm:text-lg'>
                {card?.title}
              </div>
              <p className='font-medium text-neutral-content'>
                {card?.noOfPosts} {card?.noOfPosts === 1 ? 'Post' : 'Posts'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default AllPosts
