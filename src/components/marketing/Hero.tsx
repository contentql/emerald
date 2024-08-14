import Container from '../common/Container'
import Image, { StaticImageData } from 'next/image'

const Hero = ({
  imagePath,
  title,
  subTitle,
}: {
  imagePath: StaticImageData | string
  title: string
  subTitle: string
}) => {
  return (
    <div className='bg-base-100'>
      <Container>
        <div className='flex flex-col items-center pb-16 pt-14'>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              {/* <img src={imagePath} /> */}
              <Image
                src={imagePath}
                alt={title || 'Hero Image'}
                className='rounded-full'
              />
            </div>
          </div>
          {title !== '' ? (
            <div className='mt-6 text-xl font-bold leading-none sm:text-2xl'>
              {title}
            </div>
          ) : (
            ''
          )}
          <p className='mt-4 max-w-sm text-center font-normal text-[#3F3F46]'>
            {subTitle}
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Hero
