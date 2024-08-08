import Button from '../common/Button'
import Container from '../common/Container'
import Image from 'next/image'

const FeaturedPost = () => {
  return (
    <Container>
      <div className='mx-auto my-20 flex flex-col gap-4'>
        <h2 className='text-md font-semibold text-secondary-content'>
          FEATURED POST
        </h2>
        <div className='flex items-center gap-6 md:gap-10'>
          <div>
            <Image
              alt='Featured Post'
              src='/images/home/4-2.webp'
              height={300}
              width={450}
              layout='responsive'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl font-semibold text-base-content'>
                Enchanted Realms of Mushroom Monarchies
              </h3>
              <div className='flex items-center gap-2'>
                <div className='flex -space-x-2'>
                  <Image
                    alt='Author 1'
                    src='/images/home/2-1.webp'
                    height={26}
                    width={26}
                    className='rounded-full'
                  />
                  <Image
                    alt='Author 2'
                    src='/images/home/2-1.webp'
                    height={26}
                    width={26}
                    className='rounded-full'
                  />
                </div>
                <p className='ml-3'>Elderich</p>
              </div>
              <p className='text-neutral-content'>
                This journey transcends ordinary boundaries, inviting you to
                explore a world where magic emanates from every cap and the air
                is alive with the hum of mystical.
              </p>
            </div>
            <Button className='hover:bg-base-150 btn-secondary self-start text-xs'>
              ARCANE
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedPost
