import Button from '../common/Button'
import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'

const listOfPosts = [
  {
    imageUrl: '/images/home/8.webp',
    title: 'Aureate Serpent and Celestial Sojourn',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description:
      'In the celestial ballet of myth, the Aureate Serpents golden scales shimmer as heroes navigate cosmic realms. From East to West, the universal allure of mythical',
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Aureate Serpent and Celestial Sojourn',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description:
      'In the celestial ballet of myth, the Aureate Serpents golden scales shimmer as heroes navigate cosmic realms. From East to West, the universal allure of mythical',
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Aureate Serpent and Celestial Sojourn',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description:
      'In the celestial ballet of myth, the Aureate Serpents golden scales shimmer as heroes navigate cosmic realms. From East to West, the universal allure of mythical',
    tagName: 'ARCANE',
  },
  {
    imageUrl: '/images/home/8.webp',
    title: 'Aureate Serpent and Celestial Sojourn',
    authorImageUrl: '/images/home/2-1.webp',
    authorName: 'Celestia Lilly',
    description:
      'In the celestial ballet of myth, the Aureate Serpents golden scales shimmer as heroes navigate cosmic realms. From East to West, the universal allure of mythical',
    tagName: 'ARCANE',
  },
]

const LatestPosts = () => {
  return (
    <Container className='md:max-w-screen-container w-full'>
      <div className='mb-20 flex flex-row justify-between gap-24'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-sm font-semibold text-secondary-content'>
            LATEST POST
          </h2>
          <div className='space-y-14'>
            {listOfPosts.map((post, index) => (
              <div key={index} className='flex gap-7'>
                <div className='avatar'>
                  <div className='relative h-28 w-full'>
                    <Link href={`/${post?.title}`}>
                      <Image
                        src={post?.imageUrl}
                        alt='Post'
                        fill
                        className='rounded-full'
                      />
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                    <Link href={`/${post?.title}`}>
                      <div className='text-xl font-semibold text-base-content'>
                        {post?.title}
                      </div>
                    </Link>
                    <div className='flex items-center gap-2'>
                      <Link href={`/author/${post?.authorName}`}>
                        <Image
                          alt='Author'
                          src={post?.authorImageUrl}
                          height={26}
                          width={26}
                          className='rounded-full'
                        />
                      </Link>
                      <Link href={`/author/${post?.authorName}`}>
                        <p className='ml-2'>{post?.authorName}</p>
                      </Link>
                    </div>
                    <p>{post?.description}</p>
                  </div>
                  <div className='flex gap-2'>
                    <Link href={`/tag/${post?.tagName}`}>
                      <div className='badge badge-secondary badge-lg rounded-lg border border-zinc-200 text-xs font-semibold hover:opacity-80'>
                        {post?.tagName}
                      </div>
                    </Link>
                    {index === 0 && (
                      <div className='badge badge-warning badge-lg rounded-lg border border-[#FEC896] text-xs font-semibold text-error '>
                        ✦ PREMIUM
                      </div>
                    )}
                    {index === 2 && (
                      <div className='border-black/0.1 badge badge-primary badge-lg rounded-lg border text-xs font-semibold text-base-100'>
                        ✽ MEMBER
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <Button className='hover:bg-base-150 btn-secondary !rounded-full text-xs'>
              LOAD MORE
            </Button>
          </div>
        </div>
        <div className='sticky top-10 h-full w-[253px] flex-shrink-0 space-y-4'>
          <h2 className='text-sm font-semibold text-secondary-content'>
            POPULAR CATEGORIES
          </h2>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
              <Link
                href={'/tag/arcane'}
                className='flex items-center rounded-xl p-2 transition duration-300 ease-in-out hover:bg-secondary'>
                <Image
                  src={'/images/home/tags-image-1-2.webp'}
                  alt=''
                  height={32}
                  width={32}
                  className='rounded-full'
                />
                <span className='ml-2 font-semibold'>Arcane</span>
              </Link>
              <Link
                href={'/tag/arcane'}
                className='flex items-center rounded-xl p-2 transition duration-300 ease-in-out hover:bg-secondary'>
                <Image
                  src={'/images/home/tags-image-1-2.webp'}
                  alt=''
                  height={32}
                  width={32}
                  className='rounded-full'
                />
                <span className='ml-2 font-semibold'>Arcane</span>
              </Link>
              <Link
                href={'/tag/arcane'}
                className='flex items-center rounded-xl p-2 transition duration-300 ease-in-out hover:bg-secondary'>
                <Image
                  src={'/images/home/tags-image-1-2.webp'}
                  alt=''
                  height={32}
                  width={32}
                  className='rounded-full'
                />
                <span className='ml-2 font-semibold'>Arcane</span>
              </Link>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-sm font-semibold text-secondary-content'>
                SUBSCRIBE
              </div>
              <div className='flex flex-col gap-3'>
                <div>
                  <input
                    type='text'
                    placeholder='Email Address'
                    className='input input-sm input-bordered w-full max-w-xs'
                  />
                </div>
                <div>
                  <Button className='btn-primary w-full'>✦ Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LatestPosts
