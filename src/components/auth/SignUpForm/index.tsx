'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import KeyDownIcon from '@/components/svg/KeyDownIcon'
import Logo from '@/components/svg/Logo'
import SignInImage from '@/public/assets/sign-in.jpeg'

import { signUp } from './actions'

export const signUpFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail is invalid' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
})

export type SignUpFormData = z.infer<typeof signUpFormSchema>

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition()
  const [backendSignUpResponse, setBackendSignUpResponse] = useState<any>(null)

  const router = useRouter()

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form

  const [firstName, lastName, email, password] = watch([
    'firstName',
    'lastName',
    'email',
    'password',
  ])

  useEffect(() => {
    if (backendSignUpResponse) {
      setBackendSignUpResponse(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, email, password])

  const onSubmit = async (data: SignUpFormData) => {
    startTransition(async () => {
      const result = await signUp({ ...data, redirectTo: '/profile' })
      setBackendSignUpResponse(result)
      if (result.success) {
        router.push('/profile')
      }
    })
  }

  return (
    <div className='fixed flex h-full w-full bg-white'>
      <div className='mx-auto flex h-full max-w-lg flex-col justify-between gap-10 px-6 sm:px-4 lg:w-96 lg:max-w-none lg:gap-0 lg:px-0'>
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
            Signup
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
                className='h-10 max-h-10 min-h-[40px] w-full rounded-md bg-primary text-[14px] font-medium text-white hover:bg-[#805AE9]'>
                ✦ &nbsp;Sign up
              </button>
            </div>
          </form>
          <div className='relative py-6'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t border-zinc-200'></span>
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-white px-2.5 text-[13px] text-secondary-content text-opacity-85'>
                Already have an account?
              </span>
            </div>
          </div>
          <button
            type='button'
            onClick={() => router.push('/sign-in')}
            className='h-10 w-full rounded-md border-[1px] bg-secondary text-[0.875rem]'>
            ✦ &nbsp;Sign in
          </button>
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
    // <div className='flex min-h-screen bg-black'>
    //   <div className='flex w-full items-center justify-center'>
    //     <div className='w-full max-w-md p-6'>
    //       {backendSignUpResponse &&
    //       !backendSignUpResponse?.success &&
    //       backendSignUpResponse?.error ? (
    //         <p color='red'>{backendSignUpResponse.error.message}</p>
    //       ) : null}
    //       {backendSignUpResponse && backendSignUpResponse?.success ? (
    //         <p color='green'>Account created! Redirecting...</p>
    //       ) : null}
    //       <h1 className='mb-6 text-center text-3xl font-semibold text-white'>
    //         Sign Up
    //       </h1>
    //       <h1 className='mb-6 text-center text-sm font-semibold text-gray-300'>
    //         Join to Our Community with all time access and free{' '}
    //       </h1>

    //       <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
    //         <div>
    //           <LabelInputContainer className='mb-4'>
    //             <div className='inline-flex justify-between'>
    //               <label
    //                 htmlFor='firstName'
    //                 className='block text-sm font-medium text-gray-300'>
    //                 First Name
    //               </label>
    //               {errors?.firstName && (
    //                 <p className='text-sm text-red-500'>
    //                   {errors.firstName.message}
    //                 </p>
    //               )}
    //             </div>
    //             <Input
    //               {...register('firstName')}
    //               type='text'
    //               id='firstName'
    //               name='firstName'
    //               placeholder='John'
    //             />
    //           </LabelInputContainer>
    //         </div>
    //         <div>
    //           <LabelInputContainer className='mb-4'>
    //             <div className='inline-flex justify-between'>
    //               <label
    //                 htmlFor='lastName'
    //                 className='block text-sm font-medium text-gray-300'>
    //                 Last Name
    //               </label>
    //               {errors?.lastName && (
    //                 <p className='text-sm text-red-500'>
    //                   {errors.lastName.message}
    //                 </p>
    //               )}
    //             </div>
    //             <Input
    //               {...register('lastName')}
    //               type='text'
    //               id='lastName'
    //               name='lastName'
    //               placeholder='Doe'
    //             />
    //           </LabelInputContainer>
    //         </div>

    //         <div>
    //           <LabelInputContainer className='mb-4'>
    //             <div className='inline-flex justify-between'>
    //               <label
    //                 htmlFor='email'
    //                 className='block text-sm font-medium text-gray-300'>
    //                 E-Mail
    //               </label>
    //               {errors?.email && (
    //                 <p className='text-sm text-red-500'>
    //                   {errors.email.message}
    //                 </p>
    //               )}
    //             </div>
    //             <Input
    //               {...register('email')}
    //               type='text'
    //               id='email'
    //               name='email'
    //               placeholder='john.doe@example.com'
    //             />
    //           </LabelInputContainer>
    //         </div>
    //         <div>
    //           <LabelInputContainer className='mb-8'>
    //             <div className='inline-flex justify-between'>
    //               <label
    //                 htmlFor='password'
    //                 className='block text-sm font-medium text-gray-300'>
    //                 Password
    //               </label>
    //               {errors?.password && (
    //                 <p className='text-sm text-red-500'>
    //                   {errors.password.message}
    //                 </p>
    //               )}
    //             </div>
    //             <Input
    //               {...register('password')}
    //               type='password'
    //               id='password'
    //               name='password'
    //               placeholder='● ● ● ● ● ● ● ● ●'
    //             />
    //           </LabelInputContainer>
    //         </div>
    //         <div>
    //           <button
    //             type='submit'
    //             className='w-full rounded-md border-[1px] border-indigo-600 bg-indigo-600 p-2 text-white transition-all duration-500 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-opacity-50'
    //             disabled={isPending}>
    //             {isPending ? 'Creating account...' : 'Sign Up'}
    //           </button>
    //         </div>
    //       </form>
    //       <div className='mt-4 text-center text-sm text-gray-300'>
    //         <p>
    //           Already have an account?{' '}
    //           <a href='/sign-in' className='text-white hover:underline'>
    //             SignIn here
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SignUpForm
