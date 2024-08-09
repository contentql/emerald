import Container from '../common/Container'
import Link from 'next/link'

const AllPosts = () => {
  return (
    <Container className='py-24'>
      <div className='grid grid-cols-4 gap-8'>
        <Link
          href={'/'}
          className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
          <div className='flex flex-col items-center justify-center gap-2.5'>
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <img src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg' />
              </div>
            </div>
            <div className='text-base font-semibold sm:text-lg'>
              Celestia Lilly
            </div>
            <p className='font-medium text-neutral-content'>5 posts</p>
          </div>
        </Link>
        <Link
          href={'/'}
          className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
          <div className='flex flex-col items-center justify-center gap-2.5'>
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <img src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg' />
              </div>
            </div>
            <div className='text-base font-semibold sm:text-lg'>
              Celestia Lilly
            </div>
            <p className='font-medium text-neutral-content'>5 posts</p>
          </div>
        </Link>
        <Link
          href={'/'}
          className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
          <div className='flex flex-col items-center justify-center gap-2.5'>
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <img src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg' />
              </div>
            </div>
            <div className='text-base font-semibold sm:text-lg'>
              Celestia Lilly
            </div>
            <p className='font-medium text-neutral-content'>5 posts</p>
          </div>
        </Link>
        <Link
          href={'/'}
          className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
          <div className='flex flex-col items-center justify-center gap-2.5'>
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <img src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg' />
              </div>
            </div>
            <div className='text-base font-semibold sm:text-lg'>
              Celestia Lilly
            </div>
            <p className='font-medium text-neutral-content'>5 posts</p>
          </div>
        </Link>
        <Link
          href={'/'}
          className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
          <div className='flex flex-col items-center justify-center gap-2.5'>
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <img src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg' />
              </div>
            </div>
            <div className='text-base font-semibold sm:text-lg'>
              Celestia Lilly
            </div>
            <p className='font-medium text-neutral-content'>5 posts</p>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default AllPosts
