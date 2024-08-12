'use client'

import Button from '../common/Button'
import Container from '../common/Container'
import DropDown from '../common/DropDown'
import Logo from '../svg/Logo'
import MenuIcon from '../svg/MenuIcon'
import SearchIcon from '../svg/SearchIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  const handleSignPage = () => {
    router.push('/sign-in')
  }

  return (
    <Container className='flex h-20 items-center justify-between'>
      <Link href={'/'}>
        <Logo />
      </Link>
      <nav className='hidden lg:block'>
        <ul className='flex gap-8'>
          <Link href={'/style-guide'}>
            Style Guide{' '}
            <span className='inline-block bg-gradient-to-r from-[#FED7AA] to-[#F97316] bg-clip-text text-transparent'>
              ✦
            </span>
          </Link>
          <Link href={'/features'}>Features</Link>
          <Link href={'/membership'}>Membership</Link>
          <Link href={'/author'}>Authors</Link>
          <Link href={'/tag'}>Tags</Link>
          <DropDown />
        </ul>
      </nav>
      <div className='flex gap-4'>
        <Button className='h-[34px] w-[34px] !rounded-full px-1 hover:bg-inherit'>
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
