'use client'

import Container from '../common/Container'
import FreePlanIcon from '../svg/FreePlanIcon'
import GoldPlanIcon from '../svg/GoldPlanIcon'
import GoldPlusPlanIcon from '../svg/GoldPlusPlanIcon'
import KeyDownIcon from '../svg/KeyDownIcon'
import ListItemTickIcon from '../svg/ListItemTickIcon'
import { useState } from 'react'

const Membership = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true)
  const [openIndexes, setOpenIndexes] = useState([false, false, false, false])

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev => {
      const newOpenIndexes = [...prev]
      newOpenIndexes[index] = !newOpenIndexes[index]
      return newOpenIndexes
    })
  }

  const toggleSwitch = () => {
    setIsMonthly(!isMonthly)
  }

  const accordionData = [
    {
      title: 'Membership Tiers',
      content:
        'Learn about our different membership tiers and find the one that suits your needs best. Discover the exclusive benefits and features each tier has to offer.',
    },
    {
      title: 'Payment and Billing',
      content: `Get answers to your questions about payments, billing cycles, and subscription management. We've got you covered with all the details you need to know.`,
    },
    {
      title: 'Accessing Premium Content',
      content:
        'Wondering how to access premium content after becoming a member? Find step-by-step instructions and troubleshoot common issues in our Accessing Premium Content section.',
    },
    {
      title: 'Cancellation and Refunds',
      content:
        'Need to cancel your membership or have questions about refunds? Explore our Cancellation and Refunds FAQ for a smooth and hassle-free process.',
    },
  ]

  return (
    <div className='xs:px-6 mx-auto my-16 w-full px-4 md:w-full md:max-w-screen-lg'>
      <div className='mx-auto mb-9 flex w-48 items-center space-x-1 rounded-full bg-gray-100 p-1.5'>
        <button
          onClick={toggleSwitch}
          className={`${
            isMonthly ? 'bg-white shadow' : 'bg-transparent'
          } w-24 rounded-full px-4 py-3 text-sm text-gray-600 focus:outline-none`}>
          Monthly
        </button>
        <button
          onClick={toggleSwitch}
          className={`${
            !isMonthly ? 'bg-white shadow' : 'bg-transparent'
          } w-24 rounded-full px-4 py-3 text-sm text-gray-600 focus:outline-none`}>
          Yearly
        </button>
      </div>
      <Container className='flex select-none flex-col items-center justify-center gap-8 px-4 lg:flex lg:flex-row lg:items-start'>
        <div className='flex h-fit w-full max-w-screen-sm flex-col gap-3 rounded-2xl border-[1.6px] border-zinc-100 p-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-start gap-2.5'>
              <FreePlanIcon />
              <div className='text-xl font-bold leading-none text-base-content'>
                Free
              </div>
            </div>
            <div className='mt-2 font-medium text-neutral-content'>
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
            <ul className='flex flex-col gap-3 text-[15px] font-light text-[#3F3F46]'>
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
            <div className='mt-2 font-medium text-neutral-content'>
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
            <ul className='flex flex-col gap-3 text-[15px] font-light text-[#3F3F46]'>
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
            <div className='mt-2 font-normal text-neutral-content'>
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
            <ul className='flex flex-col gap-3 text-[15px] font-light text-[#3F3F46]'>
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
      <div className='mx-auto my-12 flex flex-col items-center justify-start gap-2 px-4 md:max-w-2xl'>
        <div className='my-14 flex justify-center'>
          <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
          <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
          <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
        </div>
        <div className='mx-auto'>
          <div className='mb-4 text-3xl font-bold'>
            Have Questions? Explore Our FAQ Section
          </div>
          <p className='mb-6 text-lg font-light text-[#3F3F46]'>
            Navigate our FAQ hub for brief yet detailed responses to common
            queries. From membership tiers to payment info, find the information
            you need for a hassle-free experience. Can&apos;t locate what
            you&apos;re after? Our support team is here to help.
          </p>
        </div>
        <div className='w-full'>
          {accordionData.map((item, index) => (
            <div
              key={index}
              className='mt-8 w-full select-none rounded-lg border border-[#E4E4E7] p-6'>
              <div
                className='flex w-full cursor-pointer select-none items-center justify-between'
                onClick={() => toggleAccordion(index)}>
                <div className='text-xl font-semibold'>{item.title}</div>
                <div className='ml-4'>
                  {openIndexes[index] ? (
                    <KeyDownIcon className='rotate-180 text-[#D4D4D8]' />
                  ) : (
                    <KeyDownIcon className='text-[#D4D4D8]' />
                  )}
                </div>
              </div>
              {openIndexes[index] && (
                <div className='mt-4 select-none text-[17px] font-light leading-7 text-[#3F3F46]'>
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Membership
