import Button from '../common/Button'
import Container from '../common/Container'
import Image from 'next/image'

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
    <Container>
      <div className='mb-20 flex flex-row justify-between gap-24'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-md font-bold text-secondary-content'>
            LATEST POST
          </h2>
          <div className='space-y-14'>
            {listOfPosts.map((post, index) => (
              <div key={index} className='flex gap-7'>
                <div className='avatar'>
                  <div className='h-[112px] w-[112px] rounded-full'>
                    <img src={post?.imageUrl} alt='' />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                    <div className='text-xl font-semibold text-base-content'>
                      {post?.title}
                    </div>
                    <div className='flex items-center gap-2'>
                      <div>
                        <Image
                          alt=''
                          src={post?.authorImageUrl}
                          height={26}
                          width={26}
                        />
                      </div>
                      <p className='ml-2'>{post?.authorName}</p>
                    </div>
                    <p>{post?.description}</p>
                  </div>
                  <div className='flex gap-2'>
                    <Button
                      key={index}
                      className={`hover:bg-base-150 btn-secondary self-start text-xs`}>
                      {post?.tagName}
                    </Button>
                    {index === 0 && (
                      <Button
                        key={index}
                        className={`self-start bg-warning text-xs text-error hover:bg-warning`}>
                        ✦ PREMIUM
                      </Button>
                    )}
                    {index === 2 && (
                      <Button
                        key={index}
                        className={`btn-primary self-start text-xs hover:bg-primary`}>
                        ✽ MEMBER
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <Button className='hover:bg-base-150 btn-secondary rounded-full text-xs'>
              LOAD MORE
            </Button>
          </div>
        </div>
        <div className='sticky top-10 h-full w-[253px] flex-shrink-0 space-y-4'>
          <h2 className='text-md font-bold text-secondary-content'>
            POPULAR CATEGORIES
          </h2>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
              <button className='flex items-center rounded-xl p-2 transition duration-300 ease-in-out hover:bg-secondary'>
                <Image
                  src={'/images/home/tags-image-1-2.webp'}
                  alt=''
                  height={32}
                  width={32}
                  className='rounded-full'
                />
                <span className='ml-2 font-semibold'>Arcane</span>
              </button>
              <button className='flex items-center rounded-xl p-2 transition duration-300 ease-in-out hover:bg-secondary'>
                <Image
                  src={'/images/home/tags-image-1-2.webp'}
                  alt=''
                  height={32}
                  width={32}
                  className='rounded-full'
                />
                <span className='ml-2 font-semibold'>Arcane</span>
              </button>
              <button className='flex items-center rounded-xl p-2 transition duration-300 ease-in-out hover:bg-secondary'>
                <Image
                  src={'/images/home/tags-image-1-2.webp'}
                  alt=''
                  height={32}
                  width={32}
                  className='rounded-full'
                />
                <span className='ml-2 font-semibold'>Arcane</span>
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-md font-bold text-secondary-content'>
                SUBSCRIBE
              </div>
              <div className='flex flex-col gap-3'>
                <div>
                  <input
                    type='text'
                    placeholder='Email Address'
                    className='input input-bordered w-full max-w-xs'
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
