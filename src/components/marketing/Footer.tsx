import Container from '../common/Container'
import Facebook from '../svg/Facebook'
import Github from '../svg/Github'
import Logo from '../svg/Logo'
import Twitter from '../svg/Twitter'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='border-t'>
      <Container>
        <div className='flex justify-between  py-12'>
          <div className='flex flex-col gap-5'>
            <div>
              <Logo />
            </div>
            <p className='max-w-xs font-medium'>
              A super minimal & lightweight theme with Premium Membership and
              fully Ghost-compatible.
            </p>
          </div>
          <div className='flex gap-16'>
            <div className='space-y-3'>
              <div className='text-xs font-medium'>MEMBERSHIP</div>
              <div>
                <ul className='flex flex-col gap-3'>
                  <Link href={'/'}>Plans</Link>
                  <Link href={'/'}>Sign In</Link>
                  <Link href={'/'}>Sign Up</Link>
                  <Link href={'/'}>Subscribe</Link>
                  <Link href={'/'}>Portal</Link>
                </ul>
              </div>
            </div>
            <div className='space-y-3'>
              <div className='text-xs font-medium'>LINKS</div>
              <div>
                <ul className='flex flex-col gap-3'>
                  <Link href={'/'}>Contact</Link>
                  <Link href={'/'}>404 Page</Link>
                  <Link href={'/'}>Documentation</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between border-t py-8'>
          <p>© 2024 Elrond — Published with Ghost & Elrond</p>
          <div className='flex gap-5'>
            <Link href={'/'}>
              <Facebook />
            </Link>
            <Link href={'/'}>
              <Twitter />
            </Link>
            <Link href={'/'}>
              <Github />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
