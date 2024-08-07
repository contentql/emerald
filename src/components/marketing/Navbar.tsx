import Button from '../common/Button'
import Container from '../common/Container'
import KeyDownIcon from '../svg/KeyDownIcon'
import Logo from '../svg/Logo'
import MenuIcon from '../svg/MenuIcon'
import SearchIcon from '../svg/SearchIcon'

const Navbar = () => {
  return (
    <Container className='flex h-20 items-center justify-between'>
      <div>
        <Logo />
      </div>
      <nav className='hidden lg:block'>
        <ul className='flex gap-8'>
          <li>
            Style Guide{' '}
            <span className='inline-block bg-gradient-to-r from-[#FED7AA] to-[#F97316] bg-clip-text text-transparent'>
              ✦
            </span>
          </li>
          <li>Features</li>
          <li>Membership</li>
          <li>Authors</li>
          <li>Tags</li>
          <li>
            More{' '}
            <span>
              <KeyDownIcon />
            </span>
          </li>
        </ul>
      </nav>
      <div className='flex gap-4'>
        <Button className='h-[34px] w-[34px] !rounded-full px-1 hover:bg-inherit'>
          <SearchIcon />
        </Button>
        <Button className='h-[34px] !rounded-full bg-primary font-medium text-white'>
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
