'use client'

import Button from '../common/Button'
import Container from '../common/Container'
import DropDown from '../common/DropDown'
import LockIcon from '../svg/LockIcon'
import Logo from '../svg/Logo'
import MenuIcon from '../svg/MenuIcon'
import SearchIcon from '../svg/SearchIcon'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathName = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const handleSignPage = () => {
    router.push('/sign-in')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Container className='flex h-20 items-center justify-between bg-base-100 px-4 xl:px-0'>
        <div className='flex-[1] justify-start'>
          <Link href={'/'}>
            <Logo className='h-5 w-fit' />
          </Link>
        </div>
        <nav className='mx-auto hidden h-full w-fit select-none items-center justify-center gap-6 px-4 lg:flex'>
          <ul className='mx-auto flex w-fit items-center gap-6 px-4 text-base font-[450] text-[#3F3F46]'>
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
              className={
                pathName === '/author' ? 'text-secondary-content' : ''
              }>
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
        <div className='xs:gap-x-4 flex h-full w-fit min-w-fit flex-[1] items-center justify-end gap-x-3'>
          <Button className='h-[34px] w-[34px] !rounded-full bg-neutral-content bg-opacity-5 px-1 hover:bg-inherit'>
            <SearchIcon />
          </Button>
          <Button
            className='h-[34px] !rounded-full bg-primary font-medium text-white hover:bg-[#805AE9]'
            onClick={handleSignPage}>
            <span className='hidden text-inherit sm:inline'>✦</span>
            <span className='hidden sm:inline'> Sign in</span>
            <LockIcon className='inline sm:hidden' />
          </Button>
          <Button
            className='h-[34px] w-[34px] !rounded-full p-0 lg:hidden'
            onClick={toggleMenu}>
            <MenuIcon />
          </Button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className='fixed inset-0 z-50 flex flex-col bg-white'>
          <div className='flex h-20 items-center justify-between px-4'>
            <Logo className='h-5' />
            <div className='flex gap-x-3'>
              <Button className='h-[34px] w-[34px] !rounded-full'>
                <SearchIcon />
              </Button>
              <Button
                className='h-[34px] !rounded-full bg-primary font-medium text-white hover:bg-[#805AE9]'
                onClick={handleSignPage}>
                <span className='hidden text-inherit sm:inline'>✦</span>
                <span className='hidden sm:inline'> Sign in</span>
                <LockIcon className='inline sm:hidden' />
              </Button>
              <Button
                className='h-[34px] w-[34px] !rounded-full bg-neutral-content bg-opacity-5 p-0'
                onClick={toggleMenu}>
                <MenuIcon />
              </Button>
            </div>
          </div>
          <ul className='flex flex-col items-center justify-center gap-4 text-lg'>
            <Link href={'/style-guide'} onClick={toggleMenu}>
              Style Guide ✦
            </Link>
            <Link href={'/features'} onClick={toggleMenu}>
              Features
            </Link>
            <Link href={'/membership'} onClick={toggleMenu}>
              Membership
            </Link>
            <Link href={'/author'} onClick={toggleMenu}>
              Authors
            </Link>
            <Link href={'/tag'} onClick={toggleMenu}>
              Tags
            </Link>
            <Link href={'/subscribe'} onClick={toggleMenu}>
              Subscribe Page
            </Link>
            <Link href={'/single-author'} onClick={toggleMenu}>
              Single Author Page
            </Link>
            <Link href={'/single-tag'} onClick={toggleMenu}>
              Single Tag Page
            </Link>
            <Link href={'/left-aligned'} onClick={toggleMenu}>
              Left-aligned Post
            </Link>
            <Link href={'/centered'} onClick={toggleMenu}>
              Centered Post
            </Link>
            <Link href={'/recommendations'} onClick={toggleMenu}>
              Recommendations
            </Link>
            <Link href={'/contact'} onClick={toggleMenu}>
              Contact
            </Link>
            <Link href={'/404'} onClick={toggleMenu}>
              404 Page
            </Link>
            <Link href={'/documentation'} onClick={toggleMenu}>
              Documentation
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
