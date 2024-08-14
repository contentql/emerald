import Button from '../common/Button'
import Image from 'next/image'
import Link from 'next/link'

const listOfPosts = [
  {
    imageUrl:
      'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/11.png',
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

const AuthorPosts = () => {
  return (
    <div className='mx-auto my-16 flex w-full flex-col gap-5 md:max-w-screen-sm'>
      <div className='flex'>
        <div className='text-sm font-semibold '>NOAH COOPER</div> {'-'}{' '}
        <div className='text-sm font-semibold  '>3 POSTS</div>
      </div>
      <div className='space-y-14'>
        {listOfPosts.map((post, index) => (
          <div key={index} className='flex gap-7'>
            <div className='avatar'>
              <div className='relative h-28 w-28 rounded-full'>
                <Link href={post?.title}>
                  <Image fill src={post?.imageUrl} alt='BlogPost' />
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <div className='text-xl font-semibold text-base-content'>
                  {post?.title}
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
    </div>
  )
}

export default AuthorPosts
