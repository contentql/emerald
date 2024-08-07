import Image from 'next/image'

const FeaturedPost = () => {
  return (
    <section className='my-8 flex w-full items-center sm:my-12 md:my-16 lg:my-20'>
      <div className='max-w-screen-lg mx-auto flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Featured Post</h2>
        <div className='gap-6 md:gap-10 flex'>
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
            <h3 className='text-lg font-semibold'>
              Enchanted Realms of Mushroom Monarchies
            </h3>
            <div className='flex items-center gap-2'>
              <div className='flex -space-x-2'>
                <Image
                  alt='Author 1'
                  src='/images/home/4-2.webp'
                  height={26}
                  width={26}
                  className='rounded-full'
                />
                <Image
                  alt='Author 2'
                  src='/images/home/4-2.webp'
                  height={26}
                  width={26}
                  className='rounded-full'
                />
              </div>
              <p className='ml-3'>Elderich</p>
            </div>
            <p>
              This journey transcends ordinary boundaries, inviting you to
              explore a world where magic emanates from every cap and the air is
              alive with the hum of mystical.
            </p>
            <button className='btn'>ARCANE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
