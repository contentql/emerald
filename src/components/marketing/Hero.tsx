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
    <div className='bg-secondary'>
      <Container>
        <div className='flex flex-col items-center pb-16 pt-14'>
          <div className='avatar'>
            <div className='w-20 rounded-full'>
              {/* <img src={imagePath} /> */}
              <Image
                src={imagePath}
                alt={title || 'Hero Image'}
                width={80}
                height={80}
                className='rounded-full'
              />
            </div>
          </div>
          {title !== '' ? (
            <div className='mt-6 text-xl font-bold sm:text-2xl'>{title}</div>
          ) : (
            ''
          )}
          <p className='mt-4 max-w-sm text-center font-medium'>{subTitle}</p>
        </div>
      </Container>
    </div>
  )
}

export default Hero
