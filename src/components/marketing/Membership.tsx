'use client'

import Container from '../common/Container'
import FreePlanIcon from '../svg/FreePlanIcon'
import GoldPlanIcon from '../svg/GoldPlanIcon'
import GoldPlusPlanIcon from '../svg/GoldPlusPlanIcon'
import ListItemTickIcon from '../svg/ListItemTickIcon'
import { useState } from 'react'

const Membership = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true)

  const toggleSwitch = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <div className='xs:px-6 mx-auto my-16 w-full px-4 md:w-full md:max-w-screen-lg'>
      <div className='mx-auto mb-9 flex w-48 items-center space-x-1 rounded-full bg-gray-100 p-1.5'>
        <button
          onClick={toggleSwitch}
          className={`${
            isMonthly ? 'bg-white shadow' : 'bg-transparent'
          } rounded-full px-4 py-2 text-gray-600 transition-colors duration-300 focus:outline-none`}>
          Monthly
        </button>
        <button
          onClick={toggleSwitch}
          className={`${
            !isMonthly ? 'bg-white shadow' : 'bg-transparent'
          } rounded-full px-4 py-2 text-gray-600 transition-colors duration-300 focus:outline-none`}>
          Yearly
        </button>
      </div>
      <Container className='gap-8 lg:flex'>
        <div className='flex h-fit w-full max-w-screen-sm flex-col gap-3 rounded-2xl border-[1.6px] border-zinc-100 p-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-start gap-2.5'>
              <FreePlanIcon />
              <div className='text-xl font-bold leading-none text-base-content'>
                Free
              </div>
            </div>
            <div className='mt-2'>
              Access essential content for free. Start your journey today!
            </div>
            <div className='my-3 flex flex-row items-center justify-start gap-2 text-3xl font-bold'>
              $0{' '}
              <span className='text-sm font-normal text-neutral-content'>
                / forever
              </span>
            </div>
            <button
              type='submit'
              className='h-10 w-full rounded-md border-[1px] bg-secondary text-[0.875rem]'>
              ✦ &nbsp;Sign up for free
            </button>
          </div>
          <div className='ml-0.5 mt-3'>
            <ul className='flex flex-col gap-3 text-[15px] text-[#3F3F46]'>
              <li>
                <ListItemTickIcon /> Access to free content
              </li>
              <li>
                <ListItemTickIcon />
                Limited-time free resources
              </li>
              <li>
                <ListItemTickIcon />
                Weekly email newsletter
              </li>
            </ul>
          </div>
        </div>
        <div className='flex h-fit w-full max-w-screen-sm flex-col gap-3 rounded-2xl border-[1.6px] border-zinc-100 p-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-start gap-2.5'>
              <GoldPlanIcon />
              <div className='text-xl font-bold leading-none text-base-content'>
                Gold
              </div>
            </div>
            <div className='mt-2'>
              Explore exclusive articles and events. Elevate your experience
              with Gold.
            </div>
            <div className='my-3 flex flex-row items-center justify-start gap-2 text-3xl font-bold'>
              ${isMonthly ? 8 : 79}{' '}
              <span className='text-sm font-normal text-neutral-content'>
                / {isMonthly ? 'monthly' : 'yearly'}
              </span>
            </div>
            <button
              type='submit'
              className='h-10 max-h-10 min-h-[40px] w-full rounded-md bg-primary text-[14px] font-medium text-white hover:bg-[#805AE9]'>
              ✦ &nbsp;Sign up now
            </button>
          </div>
          <div className='ml-0.5 mt-3'>
            <ul className='flex flex-col gap-3 text-[15px] text-[#3F3F46]'>
              <li>
                <ListItemTickIcon /> Access to premium content
              </li>
              <li>
                <ListItemTickIcon /> Early access to new releases
              </li>
              <li>
                <ListItemTickIcon /> Simple, secure card payment
              </li>
              <li>
                <ListItemTickIcon /> Weekly email newsletter
              </li>
              <li>
                <ListItemTickIcon /> No Advertising
              </li>
            </ul>
          </div>
        </div>
        <div className='flex h-fit w-full max-w-screen-sm flex-col gap-3 rounded-2xl border-[1.6px] border-zinc-100 p-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-start gap-2.5'>
              <GoldPlusPlanIcon />
              <div className='flex flex-col items-start justify-center gap-1.5'>
                <div className='line-clamp-1 text-xl font-bold leading-none text-base-content'>
                  Golden Plus
                </div>
                <div className='text-sm font-normal leading-none text-secondary-content'>
                  7 days free
                </div>
              </div>
            </div>
            <div className='mt-2'>
              Ultimate access to all content and perks. Discover the pinnacle of
              membership.
            </div>
            <div className='my-3 flex flex-row items-center justify-start gap-2 text-3xl font-bold'>
              ${isMonthly ? 15 : 149}{' '}
              <span className='text-sm font-normal text-neutral-content'>
                / {isMonthly ? 'monthly' : 'yearly'}
              </span>
            </div>
            <button
              type='submit'
              className='h-10 max-h-10 min-h-[40px] w-full rounded-md bg-primary text-[14px] font-medium text-white hover:bg-[#805AE9]'>
              ✦ &nbsp;Sign up now
            </button>
          </div>
          <div className='ml-0.5 mt-3'>
            <ul className='flex flex-col gap-3 text-[15px] text-[#3F3F46]'>
              <li>
                <ListItemTickIcon /> Access to Golden Plus content
              </li>
              <li>
                <ListItemTickIcon /> Gold package content included
              </li>
              <li>
                <ListItemTickIcon /> No Advertising
              </li>
              <li>
                <ListItemTickIcon /> Special discounts
              </li>
              <li>
                <ListItemTickIcon /> Priority customer support
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className='px-4'>
        <div className='my-14 flex justify-center'>
          <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
          <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
          <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
        </div>
        <div className='mx-auto'>
          <div className='text-3xl font-bold'>
            Have Questions&rsquo; Explore Our FAQ Section
          </div>
          <p>
            Navigate our FAQ hub for brief yet detailed responses to common
            queries. From membership tiers to payment info, find the information
            you need for a hassle-free experience. Can&apos;t locate what
            you&apos;re after&rsquo; Our support team is here to help.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Membership
