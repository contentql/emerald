import Container from '../common/Container'

const Hero = ({
  imagePath,
  title,
  subTitle,
}: {
  imagePath: string
  title: string
  subTitle: string
}) => {
  return (
    <div className='bg-secondary'>
      <Container>
        <div className='flex flex-col items-center pb-16 pt-14'>
          <div className='avatar'>
            <div className='w-24 rounded-full'>
              <img src={imagePath} />
            </div>
          </div>
          {title !== '' ? (
            <div className='mt-6 text-xl font-bold'>{title}</div>
          ) : (
            ''
          )}
          <p className='mt-4 max-w-sm text-center font-medium'>{subTitle}</p>
        </div>
      </Container>
    </div>
  )
}

export default Hero
