import Button from '../common/Button'
import Globe from '../svg/Globe'
import Twitter from '../svg/Twitter'
import Image from 'next/image'

const AuthorDetails = () => {
  return (
    <div className='flex flex-col items-center bg-secondary pb-16 pt-14'>
      <div className='avatar'>
        <div className='relative w-24 rounded-full'>
          <Image
            alt='Author'
            fill
            src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/3-1.png'
          />
        </div>
      </div>
      <div className='mt-6 text-xl font-bold'>Noah Cooper</div>
      <div className='mt-5 font-semibold text-neutral-content'>Istanbul</div>
      <p className='mt-5  max-w-sm text-center text-neutral-content'>
        🚀 Developer & UI/UX Designer. Crafting sleek Ghost CMS themes. Lets
        transform your online presence!
      </p>
      <div className='mt-5 flex gap-4'>
        <Button className='hover:bg-base-150 !rounded-full'>
          <Twitter /> @hedwick
        </Button>
        <Button className='hover:bg-base-150 !rounded-full'>
          <Globe /> cagatiya.io
        </Button>
      </div>
    </div>
  )
}

export default AuthorDetails
