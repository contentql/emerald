import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'

const Recommendations = () => {
  return (
    <Container className='my-16 w-full sm:max-w-lg'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <Link href={'/'} className='flex gap-5'>
          <div className='relative size-14 shrink-0'>
            <Image
              alt=''
              src={
                'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/4-3.png'
              }
              fill
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-lg font-semibold'>Spline</div>
            <p className='text-secondary-content'>
              Spline: Free 3D design for web with modeling, animation, textures,
              and collaboration.
            </p>
          </div>
        </Link>
        <Link href={'/'} className='flex gap-5'>
          <div className='relative size-14 shrink-0'>
            <Image
              alt=''
              src={
                'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/4-3.png'
              }
              fill
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-lg font-semibold'>Spline</div>
            <p className='text-secondary-content'>
              Spline: Free 3D design for web with modeling, animation, textures,
              and collaboration.
            </p>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default Recommendations
