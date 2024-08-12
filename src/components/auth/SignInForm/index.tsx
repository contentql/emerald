'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { type ComponentProps, useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import KeyDownIcon from '@/components/svg/KeyDownIcon'
import Logo from '@/components/svg/Logo'
import SignInImage from '@/public/assets/sign-in.jpeg'

import { signInWithCredentials } from './actions'

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail is required' })
    .email({ message: 'E-mail is invalid' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
})

const Separator = ({ children }: ComponentProps<'div'>) => (
  <div className='relative isolate my-3 flex items-center justify-center'>
    <p className='bg-white p-2 text-sm font-medium uppercase text-zinc-500 dark:bg-zinc-900'>
      {children}
    </p>
    <hr className='absolute z-[-1] w-full border-0 bg-zinc-200 p-px dark:bg-zinc-600' />
  </div>
)

const SignInForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [backendLoginResponse, setBackendLoginResponse] = useState<Awaited<
    ReturnType<typeof signInWithCredentials>
  > | null>(null)

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onBlur',
    defaultValues: {
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

  const [email, password] = watch(['email', 'password'])

  useEffect(() => {
    if (backendLoginResponse && backendLoginResponse.success === false) {
      setBackendLoginResponse(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password])

  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    startTransition(() => {
      signInWithCredentials({ ...data, redirectTo: '/' }).then(result => {
        if (!result) return
        if (result.success === true) {
          router.push('/')
        }
        if ('error' in result) {
          setBackendLoginResponse(result)
        }
      })
    })
  }

  return (
    <div className='fixed flex h-full w-full bg-white'>
      <div className='mx-auto flex h-full max-w-lg flex-col justify-between gap-10 lg:w-96 lg:max-w-none lg:gap-0'>
        <div className='mt-6'>
          <button
            onClick={() => router.push('/')}
            className='h-fit rounded-full bg-secondary py-[6px] pl-2 pr-3 text-[14px]'>
            <KeyDownIcon className='mb-1 mr-1 h-[18px] w-[18px] rotate-90' />
            Back to home
          </button>
        </div>
        <div>
          <Logo className={'flex h-[20px] w-fit items-center justify-start'} />
          <div className='mt-16 font-semibold uppercase tracking-widest text-secondary-content text-opacity-85'>
            Signin
          </div>
          <div className='mt-4 text-[1.5rem] font-semibold leading-8 text-base-content'>
            A super minimal & lightweight theme with Premium Membership and
            fully Ghost-compatible.
          </div>
          <form className='xs:mt-8 mt-6 pr-1'>
            <div className='flex flex-col gap-3.5'>
              <input
                type='email'
                placeholder='Email address'
                className='text-one placeholder:text-four text-md focus: block w-full rounded-md border-0 bg-transparent px-3 py-1.5 leading-8 shadow-sm ring-1 ring-zinc-300 transition-shadow duration-300 focus:ring-2 focus:ring-primary focus-visible:outline-none'
              />
              <button
                type='submit'
                className='h-10 max-h-10 min-h-[40px] w-full rounded-md bg-primary text-[14px] font-medium text-white hover:bg-[#805AE9]'>
                ✦ &nbsp;Sign in
              </button>
            </div>
          </form>
          <div className='relative py-6'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t border-zinc-200'></span>
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-white px-2.5 text-[13px] text-secondary-content text-opacity-85'>
                dont have an account yet?
              </span>
            </div>
          </div>
          <button
            type='button'
            onClick={() => router.push('/sign-up')}
            className='h-10 w-full rounded-md border-[1px] bg-secondary text-[0.875rem]'>
            ✦ &nbsp;Sign up
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
    //     <div className='mx-auto w-full max-w-md rounded-none drop-shadow-2xl md:rounded-2xl'>
    //       <div className='w-full max-w-md p-6'>
    //         {backendLoginResponse && 'error' in backendLoginResponse ? (
    //           <p className='text-center text-red-500'>
    //             {backendLoginResponse?.error?.code === 'credentials' &&
    //               'Sign in failed. Check the details you provided are incorrect.'}
    //           </p>
    //         ) : null}
    //         {backendLoginResponse && backendLoginResponse?.success === true ? (
    //           <p className='text-center text-green-500'>
    //             Successfully logged in! Redirecting...
    //           </p>
    //         ) : null}
    //         <h1 className='mb-6 text-center text-3xl font-semibold text-white'>
    //           Sign In
    //         </h1>
    //         <h1 className='mb-6 text-center text-sm font-semibold text-gray-300'>
    //           Join to Our Community with all time access and free{' '}
    //         </h1>

    //         <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
    //           <div>
    //             <LabelInputContainer className='mb-4'>
    //               <div className='inline-flex justify-between'>
    //                 <label
    //                   htmlFor='email'
    //                   className='block text-sm font-medium text-gray-300'>
    //                   E-Mail
    //                 </label>
    //                 {errors?.email && (
    //                   <p className='text-sm text-red-500'>
    //                     {errors.email.message}
    //                   </p>
    //                 )}
    //               </div>
    //               <Input
    //                 {...register('email')}
    //                 type='text'
    //                 id='email'
    //                 name='email'
    //                 placeholder='john.doe@example.com'
    //               />
    //             </LabelInputContainer>
    //           </div>
    //           <div>
    //             <LabelInputContainer className='mb-8'>
    //               <div className='inline-flex justify-between'>
    //                 <label
    //                   htmlFor='password'
    //                   className='block text-sm font-medium text-gray-300'>
    //                   Password
    //                 </label>
    //                 {errors?.password && (
    //                   <p className='text-sm text-red-500'>
    //                     {errors.password.message}
    //                   </p>
    //                 )}
    //               </div>
    //               <Input
    //                 {...register('password')}
    //                 type='password'
    //                 id='password'
    //                 name='password'
    //                 placeholder='● ● ● ● ● ● ● ● ●'
    //               />
    //             </LabelInputContainer>
    //           </div>
    //           <p className='text-sm text-gray-700 dark:text-gray-300'>
    //             Forgot your password?{' '}
    //             <Link className='underline' href='/reset-password'>
    //               Reset it.
    //             </Link>
    //           </p>
    //           <div>
    //             <button
    //               type='submit'
    //               className='w-full rounded-md border-[1px] border-indigo-600 bg-indigo-600 p-2 text-white transition-all duration-500 hover:bg-indigo-700  focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-opacity-50'
    //               disabled={isPending}>
    //               {isPending ? 'Signing in...' : 'Sign In'}
    //             </button>
    //           </div>
    //         </form>
    //         <div className='mt-4 flex flex-col space-y-4'>
    //           <button
    //             className=' group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
    //             type='submit'>
    //             <FaGithub className='text-neutral-800 dark:text-neutral-300 h-4 w-4' />
    //             <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
    //               GitHub
    //             </span>
    //             <BottomGradient />
    //           </button>
    //           <button
    //             className=' group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
    //             type='submit'>
    //             <FaGithub className='text-neutral-800 dark:text-neutral-300 h-4 w-4' />
    //             <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
    //               Google
    //             </span>
    //             <BottomGradient />
    //           </button>
    //         </div>
    //         <div className='mt-4 text-center text-sm text-gray-300'>
    //           <p>
    //             Don&apos;t have an account?{' '}
    //             <a href='/sign-up' className='text-white hover:underline'>
    //               SignUp here
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SignInForm
