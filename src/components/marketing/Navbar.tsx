'use client'

import Button from '../common/Button'
import Container from '../common/Container'
import DropDown from '../common/DropDown'
import Logo from '../svg/Logo'
import MenuIcon from '../svg/MenuIcon'
import SearchIcon from '../svg/SearchIcon'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const pathName = usePathname()

  const handleSignPage = () => {
    router.push('/sign-in')
  }

  return (
    <Container className='flex h-20 items-center justify-between bg-base-100'>
      <Link href={'/'}>
        <Logo className='h-5' />
      </Link>
      <nav className='hidden lg:block'>
        <ul className='mx-auto flex w-fit gap-6 px-4 text-[15px] text-[#3F3F46]'>
          <Link
            href={'/style-guide'}
            className={
              pathName === '/style-guide' ? 'text-secondary-content' : ''
            }>
            Style Guide{' '}
            <span className='inline-block bg-gradient-to-r from-[#FED7AA] to-[#F97316] bg-clip-text text-transparent'>
              ✦
            </span>
          </Link>
          <Link
            href={'/features'}
            className={
              pathName === '/features' ? 'text-secondary-content' : ''
            }>
            Features
          </Link>
          <Link
            href={'/membership'}
            className={
              pathName === '/membership' ? 'text-secondary-content' : ''
            }>
            Membership
          </Link>
          <Link
            href={'/author'}
            className={pathName === '/author' ? 'text-secondary-content' : ''}>
            Authors
          </Link>
          <Link
            href={'/tag'}
            className={pathName === '/tag' ? 'text-secondary-content' : ''}>
            Tags
          </Link>
          <DropDown />
        </ul>
      </nav>
      <div className='flex gap-4'>
        <Button className='h-[34px] w-[34px] !rounded-full bg-neutral-content bg-opacity-5 px-1 hover:bg-inherit'>
          <SearchIcon />
        </Button>
        <Button
          className='h-[34px] !rounded-full bg-primary font-medium text-white'
          onClick={handleSignPage}>
          <span className='text-inherit'>✦</span> Sign in
        </Button>
        <Button className='h-[34px] w-[34px] !rounded-full p-0 lg:hidden'>
          <MenuIcon />
        </Button>
      </div>
    </Container>
  )
}

export default Navbar
