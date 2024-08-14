'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import KeyDownIcon from '@/components/svg/KeyDownIcon'
import Logo from '@/components/svg/Logo'
import SignInImage from '@/public/assets/sign-in.jpeg'

const Subscribe = () => {
  const router = useRouter()

  return (
    <div className='fixed flex h-full w-full bg-white'>
      <div className='mx-auto flex h-full max-w-lg flex-col justify-between gap-10 lg:w-96 lg:max-w-none lg:gap-0'>
        <div className='mt-6'>
          <button
            onClick={() => router.push('/')}
            className='rounded-full bg-secondary py-[6px] pl-2 pr-3 text-[14px]'>
            <KeyDownIcon className='mb-1 mr-1 h-[18px] w-[18px] rotate-90' />
            Back to home
          </button>
        </div>
        <div>
          <Logo className={'flex h-[20px] w-fit items-center'} />
          <div className='mt-16 font-semibold uppercase tracking-widest text-secondary-content text-opacity-85'>
            Subscribe
          </div>
          <div className='mt-4 text-[1.5rem] font-semibold leading-8 text-base-content'>
            A super minimal & lightweight theme with Premium Membership and
            fully Ghost-compatible.
          </div>
          <form className='xs:mt-8 mt-6 pr-1'>
            <div className='flex flex-col gap-3.5'>
              <input
                type='name'
                placeholder='Your name'
                className='text-one placeholder:text-four text-md focus: block w-full rounded-md border-0 bg-transparent px-3 py-1.5 leading-8 shadow-sm ring-1 ring-zinc-300 transition-shadow duration-300 focus:ring-2 focus:ring-primary focus-visible:outline-none'
              />
              <input
                type='email'
                placeholder='Email address'
                className='text-one placeholder:text-four text-md focus: block w-full rounded-md border-0 bg-transparent px-3 py-1.5 leading-8 shadow-sm ring-1 ring-zinc-300 transition-shadow duration-300 focus:ring-2 focus:ring-primary focus-visible:outline-none'
              />
              <button
                type='submit'
                className='h-10 max-h-10 min-h-[40px] w-full rounded-md bg-primary text-[14px] font-medium text-white'>
                ✦ &nbsp;Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className='pb-4 text-center text-sm'>
          © 2024 Elrond - Published with Ghost & Elrond
        </div>
      </div>
      <div className='m-0 hidden h-full w-2/5 select-none items-center justify-center overflow-hidden bg-zinc-100 p-0  dark:bg-zinc-800 lg:flex'>
        <Image
          src={SignInImage}
          className='h-full w-full object-cover'
          alt='sign-in'
        />
      </div>
    </div>
  )
}

export default Subscribe
