import Container from '../common/Container'

const Hero = () => {
  return (
    <div className='bg-secondary'>
      <Container>
        <div className='flex flex-col items-center pb-16 pt-14'>
          <div className='avatar'>
            <div className='w-20 rounded-full'>
              <img src='https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg' />
            </div>
          </div>
          {/* <div className='mt-6 text-xl font-bold'>Membership</div> */}
          <p className='mt-4 max-w-sm text-center font-medium'>
            A super minimal & lightweight theme with Premium Membership and
            fully Ghost-compatible.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Hero
