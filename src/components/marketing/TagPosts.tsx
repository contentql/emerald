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
    title: 'Temporal Blades Lost in the Mystical Whirlwind',
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

const TagPosts = () => {
  return (
    <div className='mx-auto my-16 flex w-full flex-col gap-5 md:max-w-screen-sm'>
      <div className='flex'>
        <div className='text-sm font-semibold text-secondary-content '>
          ARCANE &nbsp;
        </div>
        {'-'}
        <div className='text-sm font-semibold text-secondary-content  '>
          &nbsp; 7 POSTS
        </div>
      </div>
      <div className='space-y-14'>
        {listOfPosts.map((post, index) => (
          <div key={index} className='flex gap-7'>
            <div className='avatar'>
              <Link href={`/${post?.title}`} className='relative h-28 w-28'>
                <Image
                  fill
                  src={post?.imageUrl}
                  alt='Post'
                  className='rounded-full'
                />
              </Link>
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <Link
                  href={`/${post?.title}`}
                  className='text-xl font-semibold text-base-content'>
                  {post?.title}
                </Link>

                <div className='flex items-center gap-2'>
                  <Link href={`/author/${post?.authorName}`}>
                    <Image
                      alt=''
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
  )
}

export default TagPosts
