import Hero from '@/components/marketing/Hero'
import Membership from '@/components/marketing/Membership'
import MembershipImg from '@/public/assets/membership.webp'

const heroData = {
  imagePath: MembershipImg,
  title: 'Membership',
  subTitle:
    'Enhance your reading with our membership. Gain exclusive access to in-depth blog articles. Explore the perks of joining below.',
}

const MembershipPage = () => {
  return (
    <div>
      <Hero
        imagePath={heroData?.imagePath}
        title={heroData?.title}
        subTitle={heroData?.subTitle}
      />
      <Membership />
    </div>
  )
}

export default MembershipPage
