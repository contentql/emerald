import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedPost = () => {
  return (
    <Container className='md:max-w-screen-container w-full'>
      <div className='mx-auto my-20 flex flex-col gap-4'>
        <h2 className='text-sm font-semibold text-secondary-content'>
          FEATURED POST
        </h2>
        <div className='flex items-center gap-6 md:gap-10'>
          <Link
            href={'/Enchanted Realms of Mushroom Monarchies'}
            className='relative h-[300px] w-full'>
            <Image
              alt='Featured Post'
              src='/images/home/4-2.webp'
              className='rounded-xl'
              fill
            />
          </Link>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <Link href={'/Enchanted Realms of Mushroom Monarchies'}>
                <h3 className='text-2xl font-semibold text-base-content'>
                  Enchanted Realms of Mushroom Monarchies
                </h3>
              </Link>
              <div className='flex items-center gap-2'>
                <div className='flex -space-x-2'>
                  <Link href={'/author/Elderich'}>
                    <Image
                      alt='Author 1'
                      src='/images/home/2-1.webp'
                      height={26}
                      width={26}
                      className='rounded-full transition-transform duration-200  hover:transform'
                    />
                  </Link>
                  <Link href={'/author/parcia miles'}>
                    <Image
                      alt='Author 2'
                      src='/images/home/2-1.webp'
                      height={26}
                      width={26}
                      className='rounded-full transition-transform duration-200  hover:transform'
                    />
                  </Link>
                </div>
                <Link href={'/author/Elderich'}>
                  <p className='ml-3'>Elderich & Parcia Mills</p>
                </Link>
              </div>
              <p className='text-neutral-content'>
                This journey transcends ordinary boundaries, inviting you to
                explore a world where magic emanates from every cap and the air
                is alive with the hum of mystical.
              </p>
            </div>
            <Link href={'/tag/arcane'}>
              <div className='badge badge-secondary badge-lg rounded-lg border border-zinc-200 text-xs font-semibold hover:opacity-80'>
                ARCANE
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedPost
